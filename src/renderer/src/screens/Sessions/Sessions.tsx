import SessionListPanel, { SESSIONS_REFRESH_MS } from "./SessionListPanel";

export { SESSIONS_REFRESH_MS };

interface SessionsProps {
  onResumeSession: (sessionId: string) => void;
  onNewChat: () => void;
  currentSessionId: string | null;
  visible: boolean;
}

function Sessions({
  onResumeSession,
  onNewChat,
  currentSessionId,
  visible,
}: SessionsProps): React.JSX.Element {
  return (
    <SessionListPanel
      onResumeSession={onResumeSession}
      onNewChat={onNewChat}
      currentSessionId={currentSessionId}
      visible={visible}
    />
  );
}

export default Sessions;
