import { useState, useContext } from "react";
import "./signin.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {signIn}  = useContext(AuthContext)

  function handleSignIn(e){
    e.preventDefault()

    if (email !== '' && password !== ''){
      signIn(email, password)
    }
  }

  return (
    <div className="container-center">
      <div className="login">
        <form onSubmit={handleSignIn}>
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
