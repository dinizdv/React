import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container-center">
      <div className="login">
        <form>
          <h1>Register account</h1>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
            Register
          </button>
        </form>

        <Link to="/" className="createAccount">
          Already have an account?
        </Link>
      </div>
    </div>
  );
}
