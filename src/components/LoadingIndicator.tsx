interface LoadingIndicatorProps {
  text: string;
}

export function LoadingIndicator({ text }: LoadingIndicatorProps) {
  return (
    <div className="loading-indicator" role="status" aria-live="polite">
      <span className="loading-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span>{text}</span>
    </div>
  );
}
