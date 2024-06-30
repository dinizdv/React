import { useState } from "react";
import "./signin.css";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container-center">
      <div className="login">
        <form>
          <h1>Login page</h1>
          <input
            type="text"
            placeholder="your_email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btnAccess">
            Access
          </button>
        </form>

        <Link to="/register" className="createAccount">
          Create an account
        </Link>
      </div>
    </div>
  );
}
