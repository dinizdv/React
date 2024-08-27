import Cookie from '../../assets/cookie.png'
import CookieCard from '../../assets/cookieCard.png'
import './main.css'

export default function Main(){
    return(
        <div className="container">
            <header>
                <nav className="header-nav">
                    <ul className="ul-header">
                        <a>Logo</a>
                    </ul>
                    <ul className="ul-header">
                        <li className="li-header"><a href="" className="a-header">home</a></li>
                        <li className="li-header"><a href="" className="a-header">home</a></li>
                        <li className="li-header"><a href="" className="a-header">home</a></li>
                        <li className="li-header"><a href="" className="a-header">home</a></li>
                    </ul>

                    <ul className="ul-header"><button className="btn-header">explore it</button></ul>
                </nav>
            </header>


            {/* main */}
            <main>
                <section className="section-main-text">
                    <h1>Nós fazemos o melhor</h1>
                    <p>Nós temos o melhor cookie do mercado feito com muito carinho para você!</p>
                    <button className="btn-main">Explorar cookies</button>
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
                <h2>Explore nossos produtos</h2>
                <div className="container-cards-products">
                    <div className="card-product">
                        {/* infos */}
                        <div className="container-img-card">
                        <div className="container-description-card">
                        <h3 className='title-card'>Cookie tradicional</h3>
                        <p className="price-card">R$5,99</p>
                        </div>
                        <img src={CookieCard} alt="" className="img-card" />
                        </div>
                    </div>

                    <div className="card-product">
                        {/* infos */}
                        <div className="container-img-card">
                        <div className="container-description-card">
                        <h3 className='title-card'>Cookie com Nutella</h3>
                        <p className="price-card">R$6,99</p>
                        </div>
                        <img src={CookieCard} alt="" className="img-card" />
                        </div>
                    </div>

                    <div className="card-product">
                        {/* infos */}
                        <div className="container-img-card">
                        <div className="container-description-card">
                        <h3 className='title-card'>Cookie de Ninho</h3>
                        <p className="price-card">R$6,99</p>
                        </div>
                        <img src={CookieCard} alt="" className="img-card" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}