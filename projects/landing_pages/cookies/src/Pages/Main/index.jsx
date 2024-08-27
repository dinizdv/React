import Logo from '../../assets/logo.png'
import Cookie from '../../assets/cookie.png'
import CookieTradicional from '../../assets/cookieCard.png'
import CookieNutella from '../../assets/cookieNutella.png'
import CookieChocolateBranco from '../../assets/cookieChocolateBranco.png'
import { Link  } from 'react-router-dom'
import './main.css'

export default function Main(){
    return(
        <div className="container">
            <header>
                <nav className="header-nav">
                    <ul className="ul-header">
                        <img src={Logo} alt="Logo da Shine Cookies" />
                    </ul>
                    <ul className="ul-header">
                        <li className="li-header"><a href="" className="a-header">home</a></li>
                        <li className="li-header"><a href="" className="a-header">cookies</a></li>
                        <li className="li-header"><a href="" className="a-header">pix</a></li>
                        <li className="li-header"><a href="" className="a-header">contato</a></li>
                    </ul>

                    <ul className="ul-header"><button className="btn-header">explorar cookies</button></ul>
                </nav>
            </header>


            {/* main */}
            <main>
                <section className="section-main-text">
                    <h1>Nós fazemos o melhor</h1>
                    <p>Nós temos o melhor cookie do mercado feito com muito carinho para você!</p>
                    <button className="btn-main">Comprar cookies</button>
                </section>

                <section className="section-main-img">
                    <img src={Cookie} className='cookie-main' alt="" />
                </section>
            </main>


{/* choose */}
            <section className="section-choose">
                <h2>Por que nos escolher?</h2>
                <div className="container-choose">
                    <div className="choose">
                    <i class="fa-solid fa-cookie"></i>
                    <h3>Fresh food</h3>
                    <p>Nossos cookies são extremamente saborosos, recheados e crocantes.</p>
                    </div>
                    
                    <div className="choose">
                    <i class="fa-solid fa-cookie"></i>
                    <h3>Fresh food</h3>
                    <p>Nossos cookies são extremamente saborosos, recheados e crocantes.</p>
                    </div>

                    <div className="choose">
                    <i class="fa-solid fa-cookie"></i>
                    <h3>Fresh food</h3>
                    <p>Nossos cookies são extremamente saborosos, recheados e crocantes.</p>
                    </div>
                </div>
            </section>

            {/* products */}
            <section className="section-products">
                <h2>Explore nossos cookies</h2>
                <div className="container-cards-products">
                    <div className="card-product">
                        {/* infos */}
                        <div className="container-img-card">
                        <div className="container-description-card">
                        <h3 className='title-card'>Tradicional</h3>
                        <p className="price-card">R$4,99</p>
                        <Link to='/cookieTradicional' className='btn-comprar'>Comprar</Link>
                        </div>
                        <img src={CookieTradicional} alt="" className="img-card" />
                        </div>
                    </div>

                    <div className="card-product">
                        {/* infos */}
                        <div className="container-img-card">
                        <div className="container-description-card">
                        <h3 className='title-card'>Nutella</h3>
                        <p className="price-card">R$7,49</p>
                        <Link to='/cookieTradicional' className='btn-comprar'>Comprar</Link>
                        </div>
                        <img src={CookieNutella} alt="" className="img-card" />
                        </div>
                    </div>

                    <div className="card-product">
                        {/* infos */}
                        <div className="container-img-card">
                        <div className="container-description-card">
                        <h3 className='title-card'>Chocolate branco</h3>
                        <p className="price-card">R$5,99</p>
                        <Link to='/cookieTradicional' className='btn-comprar'>Comprar</Link>
                        </div>
                        <img src={CookieChocolateBranco} alt="" className="img-card" />
                        </div>
                    </div>
                </div>
            </section>

                    {/* footer */}
        <footer>
            <h2>Contate-nos</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae vel rerum culpa aspernatur, ipsa mollitia beatae itaque maxime impedit dolorem at, doloribus nostrum.</p>
            <nav className="nav-links-footer">
                <Link to='#'><i class="fa-brands fa-facebook-f"></i></Link>
                <Link to='#'><i class="fa-brands fa-x-twitter"></i></Link>
                <Link to='#'><i class="fa-brands fa-youtube"></i></Link>
                <Link to='#'><i class="fa-brands fa-linkedin-in"></i></Link>
                <Link to='#'><i class="fa-brands fa-instagram"></i></Link>
            </nav>
        </footer>
        </div>
    )
}