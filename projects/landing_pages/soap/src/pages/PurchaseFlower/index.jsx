import { Link } from 'react-router-dom'
import flowerSoap from '../../assets/flowerSoap.png'
import pixBigger from '../../assets/pixBigger.png'
import { toast } from 'react-toastify'

export default function PurchaseFlower(){
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
                <h1>Fazer compra</h1>
                <div className="container-pix-img">
                <div className="card-product">
                        {/* infos */}
                        <div className="container-img-card container-img-card-purchase">
                        <img src={flowerSoap} alt="" className="img-card" />
                        
                        </div>
                        <div className="container-description-card">
                        <h3 className='title-card'>Sabonete Capim Limão</h3>
                        <p className="price-card"><span className="risk">de R$10,00</span><span className="price-p">por R$4,99</span></p>
                        </div>
                    </div>

                    <img src={pixBigger} className='pix-img' alt="" />

                </div>

                <div className="container-pix-text">
                <strong>Pix copia e cola:</strong>
                    <p id='code-pix'>00020126360014BR.GOV.BCB.PIX0114+551195444930052040000530398654044.995802BR5901N6001C62090505SABOM630490F4</p>
                    <button id='btn-copyCode' onClick={copyCode}>Copiar código</button>
                </div>
                <Link to='/' className='back-link'>Voltar à home</Link>
            </main>
        </div>
    )
}