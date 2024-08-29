import './main.css'
import { Link } from 'react-router-dom'
import mainImg from '../../assets/soap.jpeg'
import ContactUs from '../../assets/contact.png'
import { useState } from 'react'

export default function Main(){
    const [name, setName] = useState('Soap GRU') // company name

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
        
        {/* header */}
        <header>
            <nav className='nav-header'>

                    <ul className='ul-header sidebar'>
                    <li onClick={hideSidebar} className='li-header'><a href="#"><i class="fa-solid fa-x closeSidebar"></i></a></li>
                    <li className='li-header'><a className='a-header' href="#">home</a></li>
                    <li className='li-header'><a className='a-header' href="#sec-products">produto</a></li>
                    <li className='li-header'><a className='a-header' href="#sec-form">increver-se</a></li>
                </ul>

                    <ul className="ul-logo">
                    <li className='li-header' id='logo'><a className='a-header' href="#">{name}</a></li>
                    </ul>
                    <ul className='ul-header'>
                    <li className='li-header hideOnMobile'><a className='a-header' href="#">home</a></li>
                    <li className='li-header hideOnMobile'><a className='a-header' href="#sec-products">produto</a></li>
                    <li className='li-header hideOnMobile'><a className='a-header' href="#sec-form">increver-se</a></li>
                    <li onClick={showSidebar} className='menu-btn'><a href="#"><i class="fa-solid fa-bars"></i></a></li>
                </ul>
            </nav>
        </header>


{/* main */}
        <main className='main'>

            <img src={mainImg} alt="" />
            <div className="container-elements-main">

            <div className="container-texts-main">
            <h1>O melhor sabão de Guarulhos</h1>
            <p>Descubra a sensação de roupas limpas e louças brilhantes com nosso sabão.</p>
            
            <div className="container-buttons-main">
            <Link to='/compra' className="buy-products">Comprar sabão</Link>
            <a href='#sec-form' className="subscribe-now">Increver-se</a>
            </div>
            </div>
            </div>

        </main>

               {/* contact */}
       <section className="section-contact" id='sec-form'>
                <div className="section-contact-img">
                    <img src={ContactUs} className='contactUs-img' alt="" />
                </div>

                <div className="section-contact-form">
                    <h1 className='title-section-contact-form'>Formulário</h1>
                    <form action="">
                        <div className="container-input">
                            <input type="text" className="input-form" placeholder='nome'/>
                            <input type="text" className="input-form" placeholder='idade'/>
                        </div>
                        <div className="container-input">
                            <input type="text" className="input-form" placeholder='email'/>
                            <input type="text" className="input-form" placeholder='n° telefone'/>
                        </div>
                        <textarea name="" id="" placeholder='Mensagem (opcional)'></textarea>
                        <div className="container-btnSend-form">
                            <button className='btnSend-form'>Enviar</button>
                        </div>
                    </form>
                </div>
            </section>


        {/* experience */}
        <section className="section-experience">
            <h2>Sua experiência é prioridade</h2>
            <p className="subtitle-experience">Nossos clientes são nossas maiores motivações para que continuemos produzindo.</p>
            <p className="description-experience">O sabão da <strong>{name}</strong> passa por diversos estágios na produção, desde o setor primário até o setor quinário. Todo processo é feito cuidadosamente para que nosso sabão chegue às suas mãos em ótimas condições.</p>
            
            <div className="container-elements-experience">
            <div className="container-icon-experience">
            <i class="fa-brands fa-envira"></i>
            <p>Produto natural</p>
            </div>

            <div className="container-icon-experience">
            <i class="fa-solid fa-earth-americas"></i>
            <p>Produto não-poluente</p>
            </div>

            <div className="container-icon-experience">
            <i class="fa-regular fa-thumbs-up"></i>
            <p>Produto eficiente</p>
            </div>

            <div className="container-icon-experience">
            <i class="fa-solid fa-shield-heart"></i> 
            <p>Produto seguro</p>
            </div>
            </div>
        </section>


        <section className="section-product" id='sec-products'>
            <h2>Nosso produto</h2>
            <p className="description-section-product">Conheça nosso sabão abaixo e aproveite as promoções imperdíveis!</p>
            
            <div className="container-cards-products">
                    <div className="card-product">
                        {/* infos */}
                        <div className="container-img-card">
                        <img src={mainImg} alt="" className="img-card" />
                        
                        </div>
                        <div className="container-description-card">
                        <h3 className='title-card'>Sabão em pedra</h3>
                        <p className="price-card"><span className="risk">de R$6,00</span><span className="price-p">por R$2,99</span></p>
                        <Link to='/compra' className='btn-comprar'>Comprar</Link>
                        </div>
                    </div>

                    <div className="card-product">
                        {/* infos */}
                        <div className="container-img-card">
                        <img src={mainImg} alt="" className="img-card" />
                        
                        </div>
                        <div className="container-description-card">
                        <h3 className='title-card'>Sabão em pedra</h3>
                        <p className="price-card"><span className="risk">de R$6,00</span><span className="price-p">por R$2,99</span></p>
                        <Link to='/compra' className='btn-comprar'>Comprar</Link>
                        </div>
                    </div>

                    <div className="card-product">
                        {/* infos */}
                        <div className="container-img-card">
                        <img src={mainImg} alt="" className="img-card" />
                        
                        </div>
                        <div className="container-description-card">
                        <h3 className='title-card'>Sabão em pedra</h3>
                        <p className="price-card"><span className="risk">de R$6,00</span><span className="price-p">por R$2,99</span></p>
                        <Link to='/compra' className='btn-comprar'>Comprar</Link>
                        </div>
                    </div>


                </div>


        </section>

        </div> // container
        
    )
}