import axios from "axios";
import "./AuthPage.css";

function AuthPage(props) {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post(
        "https://chat-app-backend-one-flame.vercel.app/authenticate",
        {
          username: value,
        },
        { headers }
      )
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("error", e));
  };
  return (
    <main>
      <form className="authForm" onSubmit={onSubmit}>
        <h1 className="authHeading">Welcome 👋</h1>
        <p className="authSubHeading">Set Username to start chatting!</p>
        <input
          className="authUsernameInput"
          type="text"
          placeholder="Username"
        />
        <button className="authSubmitButton" type="submit">
          Enter
        </button>
      </form>
    </main>
  );
}

export default AuthPage;
