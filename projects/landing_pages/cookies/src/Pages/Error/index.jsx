import { Link } from "react-router-dom"
import './error.css'

export default function Error(){
    return(
        <div className="container-error">
        <div className="container-elements">
        <h1>404</h1>
            <p>Ops, parece que nós não encontramos esta página. Acesse nosso site para encontrar os cookies mais deleciosos do mercado!</p>
            <div className="container-back">
            <Link to='/' className="back">Acessar o site</Link>
            </div>
        </div>
        </div>
    )
}