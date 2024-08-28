import { Link } from 'react-router-dom'
import CookieChocolateBranco from '../../assets/cookieChocolateBranco.png'
import Pix from '../../assets/pixChocolateBranco.png'
import './whiteCookie.css'
import { toast } from 'react-toastify'

export default function WhiteCookie(){
    function copyCode(){
        const code = document.getElementById('code-pix')
        const copyText = () => navigator.clipboard.writeText(code.textContent) // () => ---> arrow function
        // navegador => área de transferência => escrita
        copyText().then(() => {
            toast.success('Código PIX copiado com sucesso :)')
        })
        .catch(() => {
            toast.error('Não foi possível copiar o código PIX :(')
        })
    }

    return(
        <div className='container-pix'>

            <main className='main-pix'>
                <h1>Chocolate branco</h1>
                <div className="container-pix-img">
                <div className="card-product">
                        {/* infos */}
                        <div className="container-img-card">
                        <img src={CookieChocolateBranco} alt="" className="img-card" />
                        
                        </div>
                        <div className="container-description-card">
                        <h3 className='title-card'>Chocolate branco</h3>
                        <p className="price-card">R$5,99</p>
                        </div>
                    </div>


                    <img src={Pix} className='pix-img' alt="" />
                </div>

                <div className="container-pix-text">
                <strong>Pix copia e cola:</strong>
                    <p id='code-pix'>00020126330014BR.GOV.BCB.PIX01115464325581152040000530398654045.995802BR5901N6001C62160512ShineCookies6304B9C8</p>
                    <button id='btn-copyCode' onClick={copyCode}>Copiar código</button>
                </div>
                <Link to='/' className='back-link'>Voltar à home</Link>
            </main>
        </div>
    )
}

// https://geradordepix.com/