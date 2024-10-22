import Logo from '../../assets/logo.png'
import grape1 from '../../assets/grape1.jpg'
import grape2 from '../../assets/grape2.jpg'
import grape3 from '../../assets/grape3.jpg'
import { Link  } from 'react-router-dom'
import './main.css'

export default function Main(){
    
    function showSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }

        function hideSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'none'
        }

    return(
        <div className="container">
            <header>
                <nav className="header-nav">
                    <ul className="sidebar">
                    <ul className="ul-header">
                        <li className="li-header"><a href="#" className="a-header"><i class="fa-solid fa-x closeSidebar"  onClick={hideSidebar}></i></a></li>
                        <li className="li-header"><a href="#" className="a-header">Home</a></li>
                        <li className="li-header"><a href="#about" className="a-header">Sobre</a></li>
                        <li className="li-header"><a href="#cookies" className="a-header">Cookies</a></li>
                        <li className="li-header"><a href="#footer" className="a-header">Contato</a></li>
                        <ul className="ul-header">
                        <img src={Logo} alt="Logo da Shine Cookies" />
                    </ul>
                    </ul>
                </ul>

                    <ul className="ul-header">
                        <img src={Logo} alt="Logo da Shine Cookies" />
                    </ul>
                    <ul className="ul-header ul-headers-icons">
                        <li className="li-header hideOnMobile"><a href="#" className="a-header">Home</a></li>
                        <li className="li-header hideOnMobile"><a href="#about" className="a-header">Sobre</a></li>
                        <li className="li-header hideOnMobile"><a href="#cookies" className="a-header">Cookies</a></li>
                        <li className="li-header hideOnMobile"><a href="#footer" className="a-header">Contato</a></li>
                    
                    </ul>
                    <div className="container-btn-explore">
                    <ul className="ul-header"><a className="btn-header" id='btn-explore' href='#cookies'>Explorar cookies</a></ul>
                    </div>
                    <li><a href="#" className="link-header" id='menuIcon'><i class="fa-solid fa-bars menu-btn" onClick={showSidebar}></i></a></li>

                </nav>
            </header>


            {/* main */}
            <main>
                <section className="section-main-text">
                    <h1>Nós fazemos o melhor</h1>
                    <p>Nós temos o melhor cookie do mercado feito com muito carinho para você!</p>
                    <a className="btn-main" href='#cookies'>Comprar cookies</a>
                </section>

                <section className="section-main-img">
                    <img src={grape1} className='cookie-main' alt="" />
                </section>
            </main>

{/* choose */}
            <section className="section-choose" id='about'>
                <h2>Por que nos escolher?</h2>
                <div className="container-choose">
                    <div className="choose">
                    <i class="fa-solid fa-cookie"></i>
                    <h3>Cookies deliciosos</h3>
                    <p>Nossos cookies são extremamente saborosos, recheados e crocantes</p>
                    </div>
                    
                    <div className="choose">
                    <i class="fa-solid fa-truck-fast"></i>
                    <h3>Entregas eficientes</h3>
                    <p>Nossas entregas são presenciais e extremamente rápidas</p>
                    </div>

                    <div className="choose">
                    <i class="fa-solid fa-hand-holding-dollar"></i>
                    <h3>Renda doada</h3>
                    <p>100% da renda advinda das vendas é destinada à doação</p>
                    </div>
                </div>
            </section>

            {/* products */}
            <section className="section-products" id='cookies'>
                <h2>Explore nossos produtos</h2>
                <div className="container-cards-products">
                    <div className="card-product">
                        {/* infos */}
                        <div className="container-img-card">
                        <img src={grape1} alt="" className="img-card" />
                        
                        </div>
                        <div className="container-description-card">
                        <p className="price-card">R$8,00</p>
                        <Link to='/cookie_tradicional' className='btn-comprar'>Comprar</Link>
                        </div>
                    </div>


                    <div className="card-product">
                        {/* infos */}
                        <div className="container-img-card">
                        <img src={grape2} alt="" className="img-card" />
                        
                        </div>
                        <div className="container-description-card">
                        <p className="price-card">R$8,00</p>
                        <Link to='/cookie_tradicional' className='btn-comprar'>Comprar</Link>
                        </div>
                    </div>


                    <div className="card-product">
                        {/* infos */}
                        <div className="container-img-card">
                        <img src={grape3} alt="" className="img-card" />
                        
                        </div>
                        <div className="container-description-card">
                        <p className="price-card">R$8,00</p>
                        <Link to='/cookie_tradicional' className='btn-comprar'>Comprar</Link>
                        </div>
                    </div>


                </div>
            </section>

                    {/* footer */}
        <footer id='footer'>
            <h2>Contate-nos</h2>
            <p>Entre em contato conosco! Abaixo estão as mídias sociais da Shine Cookies para que, além do site, nós possamos fornecer um atendimento exclusivo e esclarecer dúvidas</p>
            <nav className="nav-links-footer">
                <a target='blank' href='https://api.whatsapp.com/send?phone=5511989779948&text=Ol%C3%A1,%20Sweet%20Grape!
'><i class="fa-brands fa-whatsapp"></i></a>
                <a href='https://www.linkedin.com/in/luisa-belo-1a3535285/'><i class="fa-brands fa-linkedin-in"></i></a>
                {/* <a href='#'><i class="fa-brands fa-instagram"></i></a> */}
            </nav>
        </footer>
        </div>
    )
}