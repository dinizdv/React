import './main.css'
import mainImg from '../../assets/soap.jpeg'
import ContactUs from '../../assets/contact.png'

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
        
        {/* header */}
        <header>
            <nav className='nav-header'>

                    <ul className='ul-header sidebar'>
                    <li onClick={hideSidebar} className='li-header'><a href="#"><i class="fa-solid fa-x closeSidebar"></i></a></li>
                    <li className='li-header'><a className='a-header' href="#">home</a></li>
                    <li className='li-header'><a className='a-header' href="#">products</a></li>
                    <li className='li-header'><a className='a-header' href="#">subscribe</a></li>
                </ul>

                    <ul className="ul-logo">
                    <li className='li-header' id='logo'><a className='a-header' href="#">soap company</a></li>
                    </ul>
                    <ul className='ul-header'>
                    <li className='li-header hideOnMobile'><a className='a-header' href="#">home</a></li>
                    <li className='li-header hideOnMobile'><a className='a-header' href="#">products</a></li>
                    <li className='li-header hideOnMobile'><a className='a-header' href="#">subscribe</a></li>
                    <li onClick={showSidebar} className='menu-btn'><a href="#"><i class="fa-solid fa-bars"></i></a></li>
                </ul>
            </nav>
        </header>


{/* main */}
        <main className='main'>

            <img src={mainImg} alt="" />
            <div className="container-elements-main">

            <div className="container-texts-main">
            <h1>Lorem ipsum, dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quisquam sequi possimus temporibus dolores quas adipisci?</p>
            
            <div className="container-buttons-main">
            <button className="buy-products">buy products</button>
            <button className="subscribe-now">subscribe now</button>
            </div>
            </div>
            </div>

        </main>

               {/* contact */}
       <section className="section-contact">
                <div className="section-contact-img">
                    <img src={ContactUs} className='contactUs-img' alt="" />
                </div>

                <div className="section-contact-form">
                    <h1 className='title-section-contact-form'>get in touch</h1>
                    <form action="">
                        <div className="container-input">
                            <input type="text" className="input-form" placeholder='first name'/>
                            <input type="text" className="input-form" placeholder='last name'/>
                        </div>
                        <div className="container-input">
                            <input type="text" className="input-form" placeholder='email address'/>
                            <input type="text" className="input-form" placeholder='phone number'/>
                        </div>
                        <textarea name="" id="" placeholder='Message (optional)'></textarea>
                        <div className="container-btnSend-form">
                            <button className='btnSend-form'>Send</button>
                        </div>
                    </form>
                </div>
            </section>


        {/* experience */}
        <section className="section-experience">
            <h2>experience the aromas</h2>
            <p className="subtitle-experience">Just how do you describe on aroma. It´s not a simple task.</p>
            <p className="description-experience">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, maxime magni modi repellendus ex at omnis voluptatum rem perspiciatis assumenda quibusdam porro nam voluptates.</p>
            
            <div className="container-elements-experience">
            <div className="container-icon-experience">
            <i class="fa-brands fa-envira"></i>
            <p>natural ingredients</p>
            </div>

            <div className="container-icon-experience">
            <i class="fa-solid fa-earth-americas"></i>
            <p>eco-friendlly products</p>
            </div>

            <div className="container-icon-experience">
            <i class="fa-solid fa-earth-americas"></i>
            <p>eco-friendlly products</p>
            </div>

            <div className="container-icon-experience">
            <i class="fa-solid fa-shield-heart"></i> 
            <p>safe for the whole family</p>
            </div>
            </div>
        </section>


        <section className="section-product">
            <h2>our product</h2>
            <p className="description-section-product">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            
            <div className="container-products">
            
            <div className="container-img-product">
            <div className="container-button-product">
            <button className='soap-product'>soap green</button>
            </div>
                <img src={mainImg} alt="" />
            </div>

            <div className="container-img-product">
            <div className="container-button-product">
            <button className='soap-product'>soap green</button>
            </div>
                <img src={mainImg} alt="" />
            </div>

            <div className="container-img-product">
            <div className="container-button-product">
            <button className='soap-product'>soap green</button>
            </div>
                <img src={mainImg} alt="" />
            </div>

            </div>
        </section>

        </div> // container
        
    )
}