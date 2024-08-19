import './main.css'
import mainImg from '../../assets/soap.jpeg'

export default function Main(){
    return(
        <div className="container">
        
        {/* header */}
        <header>
            <nav className='nav-header'>
                <ul className='ul-header'>
                    <li className='li-header'><a className='a-header' href="#">home</a></li>
                    <li className='li-header'><a className='a-header' href="#">products</a></li>
                    <li className='li-header'><a className='a-header' href="#">subscribe</a></li>
                </ul>
                    <li className='li-header' id='logo'><a className='a-header' href="#">logo</a></li>
                <ul>    
                    <li className='li-header'><a className='a-header' href="#">about</a></li>
                    <li className='li-header'><a className='a-header' href="#">alembic</a></li>
                    <li className='li-header'><a className='a-header' href="#">contact</a></li>
                </ul>
            </nav>
        </header>


{/* main */}
        <main className='main'>
            <img src={mainImg} alt="" />
            <div className="container-texts-main">
            <h1>Lorem ipsum, dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quisquam sequi possimus temporibus dolores quas adipisci?</p>
            
            <div className="container-buttons-main">
            <button className="buy-products">buy products</button>
            <button className="subscribe-now">subscribe now</button>
            </div>
            </div>
        </main>

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