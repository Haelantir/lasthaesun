import { useCallback, useRef, useState } from "react";
import { transcribeAudio } from "../lib/api";

export type VoiceState = "idle" | "recording" | "transcribing" | "error";

// Auto-stops a stuck/forgotten recording — also keeps a single clip (and its
// transcription cost) bounded.
const MAX_RECORDING_MS = 60_000;

const NOT_SUPPORTED_MESSAGE = "이 기기에서는 음성 입력을 지원하지 않아요.";
const MIC_DENIED_MESSAGE = "마이크 사용을 허용해주셔야 음성으로 물어보실 수 있어요.";
const NO_SPEECH_MESSAGE = "음성을 알아듣지 못했어요. 다시 말씀해주세요.";

export interface UseVoiceInputOptions {
  // Fired once when the server (authoritative) transcript for the recorded
  // clip comes back.
  onFinalText: (text: string) => void;
}

export function useVoiceInput({ onFinalText }: UseVoiceInputOptions) {
  const [state, setState] = useState<VoiceState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const maxTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const releaseStream = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    if (maxTimerRef.current) {
      clearTimeout(maxTimerRef.current);
      maxTimerRef.current = null;
    }
  };

  const stopRecording = useCallback(() => {
    const recorder = recorderRef.current;
    if (!recorder || recorder.state === "inactive") return;
    recorder.stop();
  }, []);

  const startRecording = useCallback(async () => {
    setErrorMessage(null);

    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      setErrorMessage(NOT_SUPPORTED_MESSAGE);
      setState("error");
      return;
    }

    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      setErrorMessage(MIC_DENIED_MESSAGE);
      setState("error");
      return;
    }

    streamRef.current = stream;
    const recorder = new MediaRecorder(stream);
    chunksRef.current = [];

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: recorder.mimeType || "audio/webm" });
      releaseStream();

      if (blob.size === 0) {
        setState("idle");
        return;
      }

      setState("transcribing");
      transcribeAudio(blob)
        .then((text) => {
          const trimmed = text.trim();
          if (trimmed) {
            setState("idle");
            onFinalText(trimmed);
          } else {
            setErrorMessage(NO_SPEECH_MESSAGE);
            setState("error");
          }
        })
        .catch(() => {
          setErrorMessage(NO_SPEECH_MESSAGE);
          setState("error");
        });
    };

    recorderRef.current = recorder;
    recorder.start();
    setState("recording");
    maxTimerRef.current = setTimeout(stopRecording, MAX_RECORDING_MS);
  }, [onFinalText, stopRecording]);

  const toggleRecording = useCallback(() => {
    if (state === "recording") {
      stopRecording();
    } else if (state !== "transcribing") {
      void startRecording();
    }
  }, [state, startRecording, stopRecording]);

  return { state, errorMessage, toggleRecording };
}
