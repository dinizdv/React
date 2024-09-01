import { useState, useContext } from "react";
import "./admin.css";
import { AuthContext } from "../../contexts/auth";

export default function Admin() {
  const [password, setPassword] = useState("");
  const { signIn, loadingAuth } = useContext(AuthContext); // Use context

  async function handleSignIn(e) {
    e.preventDefault();

    if (password !== '') {
      await signIn(password); // Call signIn function from context
    }
  }

  return (
    <div className="container-admin">
      <div className="login">
        <form onSubmit={handleSignIn}>
          <h1>
            Autenticação
          </h1>
          <input
            type="password"
            placeholder="Digite a senha..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btnAccess">
            {loadingAuth ? 'Loading...' : 'Access'}
          </button>
        </form>
      </div>
    </div>
  );
}