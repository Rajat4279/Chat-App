import { useState } from "react";
import "./App.css";
import AuthPage from "./Pages/AuthPage/AuthPage";
import ChatsPage from "./Pages/ChatPage/ChatPage";

function App() {
  const [user, setUser] = useState(undefined);

  const REACT_APP_PROJECT_ID = import.meta.env.VITE_REACT_APP_PROJECT_ID;

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} projectId={REACT_APP_PROJECT_ID} />;
  }
}

export default App;
