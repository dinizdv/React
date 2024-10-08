import { Link } from 'react-router-dom'
import CookieTraditional from '../../assets/cookieTradicional.png'
import Pix from '../../assets/pixTradicional.png'
import './traditionalCookie.css'
import { toast } from 'react-toastify'

export default function TraditionalCookie(){
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
                <h1>Tradicional</h1>
                <div className="container-pix-img">
                <div className="card-product">
                        {/* infos */}
                        <div className="container-img-card">
                        <img src={CookieTraditional} alt="" className="img-card" />
                        
                        </div>
                        <div className="container-description-card">
                        <h3 className='title-card'>Tradicional</h3>
                        <p className="price-card">R$4,99</p>
                        </div>
                    </div>


                    <img src={Pix} className='pix-img' alt="" />
                </div>

                <div className="container-pix-text">
                <strong>Pix copia e cola:</strong>
                    <p id='code-pix'>00020126330014BR.GOV.BCB.PIX01115464325581152040000530398654044.995802BR5901N6001C62160512ShineCookies6304FE24</p>
                    <button id='btn-copyCode' onClick={copyCode}>Copiar código</button>
                </div>
                <Link to='/' className='back-link'>Voltar à home</Link>
            </main>
        </div>
    )
}

// https://geradordepix.com/