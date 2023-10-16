import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  const { APP_PROJECT_ID } = import.meta.env;
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={APP_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
