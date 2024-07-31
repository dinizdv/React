import { useState, useContext } from "react";
import "./signin.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import './signin.css'

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, loadingAuth }  = useContext(AuthContext)

  async function handleSignIn(e){
    e.preventDefault()

    if (email !== '' && password !== ''){
      await signIn(email, password)
    }
  }

  return (
    <div className="container-center">
      <div className="login">
        <form onSubmit={handleSignIn}>
          <h1>Página de login<i class="fa-solid fa-user-check"></i></h1>
          <input
            type="text"
            placeholder="seu_nome@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha com 6 ou mais caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btnAccess">
            {loadingAuth ? 'Loading...' : 'Acessar'}
          </button>
        </form>

        <Link to="/register" className="createAccount">
          Criar uma conta
        </Link>
      </div>
    </div>
  );
}