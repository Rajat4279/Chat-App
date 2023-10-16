import { useState } from "react";
import "./App.css";
import { REACT_APP_PROJECT_ID } from "../config.js";

import AuthPage from "./Pages/AuthPage/AuthPage";
import ChatsPage from "./Pages/ChatPage/ChatPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} project_id = {REACT_APP_PROJECT_ID} />;
  }
}

export default App;
