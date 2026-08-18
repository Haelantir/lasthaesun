import { useState } from "react";
import { useVoiceInput } from "../hooks/useVoiceInput";

interface MessageInputBarProps {
  onSend: (text: string) => void;
  disabled?: boolean;
  placeholder?: string;
  // "hero" is the bigger, inviting box on the home screen; "compact" is the
  // persistent bar used inside an ongoing chat. Same component, same
  // mic/send behavior — just sized differently.
  size?: "hero" | "compact";
}

function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <path
        d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 11.5a5.5 5.5 0 0 0 11 0M12 19v2.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MessageInputBar({ onSend, disabled, placeholder, size = "compact" }: MessageInputBarProps) {
  const [value, setValue] = useState("");

  const {
    state: voiceState,
    errorMessage: voiceError,
    toggleRecording,
  } = useVoiceInput({
    onFinalText: (text) => setValue((prev) => (prev.trim() ? `${prev.trim()} ${text}` : text)),
  });

  const recording = voiceState === "recording";
  const transcribing = voiceState === "transcribing";

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled || recording || transcribing) return;
    onSend(trimmed);
    setValue("");
  };

  return (
    <div className={`input-bar-wrapper input-bar-${size}`}>
      <form
        className={`input-bar${recording ? " input-bar-recording" : ""}`}
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        {recording ? (
          <div className="input-bar-recording-panel">
            <span className="input-bar-recording-sheen" aria-hidden="true" />
            <span className="input-bar-recording-label">듣는 중</span>
          </div>
        ) : (
          <>
            <label htmlFor="message-input" className="visually-hidden">
              궁금한 내용을 입력하세요
            </label>
            <textarea
              id="message-input"
              className="input-bar-textarea"
              placeholder={placeholder ?? "궁금한 내용을 적어주세요"}
              rows={size === "hero" ? 3 : 2}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              readOnly={transcribing}
            />
          </>
        )}

        <div className="input-bar-actions">
          <button
            type="button"
            className={`icon-btn icon-btn-mic${recording ? " icon-btn-mic-recording" : ""}`}
            onClick={toggleRecording}
            disabled={disabled || transcribing}
            aria-label={recording ? "말하기 종료" : "말해서 입력하기"}
            aria-pressed={recording}
          >
            <MicIcon />
          </button>
          <button
            type="submit"
            className="capsule-btn capsule-btn-send"
            disabled={disabled || recording || transcribing || !value.trim()}
          >
            물어보기
          </button>
        </div>
      </form>

      {recording && (
        <p className="input-bar-hint input-bar-hint-recording">
          다 말씀하셨으면
          <br />
          마이크 버튼을 다시 누르세요
        </p>
      )}
      {transcribing && <p className="input-bar-hint">말씀하신 내용을 정리하고 있어요...</p>}
      {voiceError && (
        <p className="input-bar-hint input-bar-hint-error" role="alert">
          {voiceError}
        </p>
      )}
    </div>
  );
}
