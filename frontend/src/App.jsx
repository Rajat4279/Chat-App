import { useState } from "react";
import "./App.css";
import dotenv from "dotenv";

dotenv.config();

import AuthPage from "./Pages/AuthPage/AuthPage";
import ChatsPage from "./Pages/ChatPage/ChatPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
