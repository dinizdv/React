import { Link } from 'react-router-dom'
import CookieTraditional from '../../assets/cookieTradicional.png'
import Pix from '../../assets/pix-tradicional.png'
import './traditionalCookie.css'

export default function TraditionalCookie(){
    return(
        <div className='container-pix'>

            <main className='main-pix'>
                <h1>Cookie tradicional</h1>
                <div className="container-pix-img">
                <div className="card-product card-product-pix">
                        {/* infos */}
                        <div className="container-img-card container-img-card-pix">
                        <div className="container-description-card container-description-card-pix">
                        <h3 className='title-card'>Tradicional</h3>
                        <p className="price-card">R$4,99</p>
                        </div>
                        <img src={CookieTraditional} alt="" className="img-card" />
                        </div>
                    </div>

                    <img src={Pix} className='pix-img' alt="" />
                </div>

                <div className="container-pix-text">
                    <p><strong>Pix copia e cola: </strong>00020126330014BR.GOV.BCB.PIX01115464325581152040000530398654044.995802BR5901N6001C62160512ShineCookies6304FE24</p>
                    <button>Copiar código</button>
                </div>
                <Link to='/' className='back-link'>Voltar à home</Link>
            </main>
        </div>
    )
}

// https://geradordepix.com/