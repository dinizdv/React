import './main.css'
import { Link } from 'react-router-dom'
import mainImg from '../../assets/soap.jpeg'
import ContactUs from '../../assets/contact.png'
import heartSoap from '../../assets/heartSoap.png'
import flowerSoap from '../../assets/flowerSoap.png'
import squareSoap from '../../assets/squareSoap.png'
import drawSoap from '../../assets/drawSoap.png'
import sabomLogo from '../../assets/sabomLogo.png'
import { useState } from 'react'
import { db } from '../../services/firebaseConnection'
import { addDoc, collection } from 'firebase/firestore'
import { toast } from 'react-toastify'

export default function Main(){
    const [userData, setUserData] = useState({
        name: '',
        age: '',
        email: '',
        phone: '',
        message: ''
    })
    const [name, setName] = useState('SABOM') // company name

    function showSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }

    function hideSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }

    // getting data form
    const handleSubmit = async (e) => {
        e.preventDefault()
    
        const userDataRef = collection(db, 'userData')
    
        // Verifique se todos os campos estão preenchidos
        if (!userData.name || !userData.age || !userData.email || !userData.phone || !userData.message) {
            toast.error('Por favor, preencha todos os campos.')
            return
        }
    
        try {
            const res = await addDoc(userDataRef, {
                name: userData.name,
                age: userData.age,
                email: userData.email,
                phone: userData.phone,
                message: userData.message 
            })
            toast.success('Dados enviados com sucesso')
            setUserData({name: '', age: '', email: '', phone: '', message: ''}) // cleaning inputs
        } catch (error){
            console.log('Error: ', error)
            toast.error('Error ao enviar os dados')
        }
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
                <ul className='ul-header'>
                    <li className='li-header hideOnMobile'><a className='a-header' href="#">home</a></li>
                    <li className='li-header hideOnMobile'><a className='a-header' href="#sec-products">produto</a></li>
                    <li className='li-header hideOnMobile'><a className='a-header' href="#sec-form">increver-se</a></li>
                    <li onClick={showSidebar} className='menu-btn'><a href="#"><i class="fa-solid fa-bars"></i></a></li>
                </ul>


                    <ul className="ul-logo">
                    <li className='li-header' id='logo'><img src={sabomLogo} className='sabomLogo' alt="" /></li>
                    </ul>
            </nav>
        </header>


{/* main */}
        <main className='main'>

            <img src={mainImg} alt="" />
            <div className="container-elements-main">

            <div className="container-texts-main">
            <h1>O melhor sabão de Guarulhos</h1>
            <p>Descubra a sensação mais agradável da sua vida.</p>
            
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
                    <form onSubmit={handleSubmit}>
  <div className="container-input">
    <input 
      type="text" 
      className="input-form" 
      placeholder='nome' 
      value={userData.name}
      onChange={(e) => setUserData({...userData, name: e.target.value})}
    />
    <input 
      type="number" 
      className="input-form" 
      placeholder='idade' 
      value={userData.age}
      onChange={(e) => setUserData({...userData, age: parseInt(e.target.value)})}
    />
  </div>
  <div className="container-input">
    <input 
      type="email" 
      className="input-form" 
      placeholder='email' 
      value={userData.email}
      onChange={(e) => setUserData({...userData, email: e.target.value})}
    />
    <input 
      type="text" 
      className="input-form" 
      placeholder='n° telefone' 
      value={userData.phone}
      onChange={(e) => setUserData({...userData, phone: e.target.value})}
    />
  </div>
  <textarea 
    name="" 
    id="" 
    placeholder='Mensagem (opcional)' 
    value={userData.message}
    onChange={(e) => setUserData({...userData, message: e.target.value})}
  ></textarea>
  <div className="container-btnSend-form">
    <button className='btnSend-form' type='submit'>Enviar</button>
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
            <h2>Nossos produtos</h2>
            <p className="description-section-product">Conheça nosso sabão abaixo e aproveite as promoções imperdíveis!</p>
            
            <div className="container-cards-products">
                    <div className="card-product">
                        {/* infos */}
                        <div className="container-img-card">
                        <img src={heartSoap} alt="" className="img-card" />
                        
                        </div>
                        <div className="container-description-card">
                        <h3 className='title-card'>Sabonete Capim Limão</h3>
                        <p className="price-card"><span className="risk">de R$6,00</span><span className="price-p">por R$2,99</span></p>
                        <Link to='/compra-sabonete-de-coracao' className='btn-comprar'>Comprar</Link>
                        </div>
                    </div>

                    <div className="card-product">
                        {/* infos */}
                        <div className="container-img-card">
                        <img src={flowerSoap} alt="" className="img-card" />
                        
                        </div>
                        <div className="container-description-card">
                        <h3 className='title-card'>Sabonete Capim Limão</h3>
                        <p className="price-card"><span className="risk">de R$10,00</span><span className="price-p">por R$4,99</span></p>
                        <Link to='/compra-sabonete-de-flor' className='btn-comprar'>Comprar</Link>
                        </div>
                    </div>

                    <div className="card-product">
                        {/* infos */}
                        <div className="container-img-card">
                        <img src={squareSoap} alt="" className="img-card" />
                        
                        </div>
                        <div className="container-description-card">
                        <h3 className='title-card'>Sabonete Capim Limão</h3>
                        <p className="price-card"><span className="risk">de R$10,00</span><span className="price-p">por R$4,99</span></p>
                        <Link to='/compra-sabonete-quadrado' className='btn-comprar'>Comprar</Link>
                        </div>
                    </div>


                </div>


        </section>

        <section className="section-draw">
        <h2>Concorra ao sorteio</h2>
            <p className="description-section-draw">Compre qualquer produto no site e <b>concorra ao sorteio</b> de dois sabonetes da {name} + uma saboneteira da Natura</p>
            
            <div className="container-draw-soap">
                <img src={drawSoap} alt="" />
            </div>
        </section>

        </div> // container
        
    )
}