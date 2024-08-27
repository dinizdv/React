import { Link } from 'react-router-dom'
import CookieTraditional from '../../assets/cookie.png'
import Pix from '../../assets/pix-tradicional.png'
import './traditionalCookie.css'

export default function TraditionalCookie(){
    return(
        <div className='container-traditional'>
            <h1>Cookie tradicional</h1>
            <img src={CookieTraditional} alt="" />
            <img src={Pix} alt="" />
            <p>00020126330014BR.GOV.BCB.PIX01115464325581152040000530398654044.995802BR5901N6001C62160512ShineCookies6304FE24</p>
            <Link to='/'>Voltar à home</Link>
        </div>
    )
}

// https://geradordepix.com/