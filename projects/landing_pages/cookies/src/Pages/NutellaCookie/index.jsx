import { Link } from 'react-router-dom'
import CookieNutella from '../../assets/cookieNutella.png'
import Pix from '../../assets/pixNutella.png'
import './nutellaCookie.css'
import { toast } from 'react-toastify'

export default function NutellaCookie(){
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
                <h1>Nutella</h1>
                <div className="container-pix-img">
                <div className="card-product">
                        {/* infos */}
                        <div className="container-img-card">
                        <img src={CookieNutella} alt="" className="img-card" />
                        
                        </div>
                        <div className="container-description-card">
                        <h3 className='title-card'>Nutella</h3>
                        <p className="price-card">R$7,49</p>
                        </div>
                    </div>


                    <img src={Pix} className='pix-img' alt="" />
                </div>

                <div className="container-pix-text">
                <strong>Pix copia e cola:</strong>
                    <p id='code-pix'>00020126330014BR.GOV.BCB.PIX01115464325581152040000530398654047.495802BR5901N6001C62160512ShineCookies63048DB2</p>
                    <button id='btn-copyCode' onClick={copyCode}>Copiar código</button>
                </div>
                <Link to='/' className='back-link'>Voltar à home</Link>
            </main>
        </div>
    )
}

// https://geradordepix.com/