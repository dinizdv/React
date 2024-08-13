import NFT from '../../assets/NFT-img.png'
import Member1 from '../../assets/member1.png'
import Member2 from '../../assets/member2.png'
import Member3 from '../../assets/member3.png'
import Member4 from '../../assets/member4.png'
import BitcoinCustomer from '../../assets/bitcoin-customer.png'
import { Link } from 'react-router-dom'
import './main.css'

export default function Main() {
    return (
        <div className='container'>
            <header>
                <p className='logo-header'>NFT Tech</p>
                <nav className="nav-header">
                    <ul className="ul-header">
                        <li className="li-header">
                            <a href="#" className="link-header">home</a>
                            <a href="#" className="link-header">NFT markets</a>
                            <a href="#" className="link-header">shop</a>
                            <a href="#" className="link-header">about us</a>
                        </li>
                    </ul>
                </nav>
                <button className="btn-explore-header">explore now</button>
            </header>

            <section className="section-main">
                <div className="section-texts-main">
                    <h1 className='title-main'>explore the largest <span className='nft-color'>NFT</span> marketplaces</h1>
                    <p>Buy, Sell & Trade Cryptocurrency Easily and Securely</p>
                    <div className="container-btn-main">
                        <button className="btn-connect">connect wallet</button>
                        <button className="btn-learnMore">learn more</button>
                    </div>

                    <div className="container-members">
                        <p>Our members</p>
                        <div className="container-circles">
                            <div className="member"><img src={Member1} alt="" className='member-img' /></div>
                            <div className="member"><img src={Member2} alt="" className='member-img' /></div>
                            <div className="member"><img src={Member3} alt="" className='member-img' /></div>
                            <div className="member"><img src={Member4} alt="" className='member-img' /></div>
                            <div className="member"><i className="fa-solid fa-user-plus icon-more"></i></div>
                        </div>
                    </div>
                </div>

                <div className="section-img-main">
                    <img src={NFT} className='nft-img-main' alt="" />
                </div>
            </section> {/* main */}

{/* secure */}
            <section className="section-secure">
                <h2>secure & private</h2>
                <p>24/7 dedicated support team</p>

                <div className="container-secure">
                    <div className="rectangle-secure">
                        <div className="radius-secure radius-secure-bitcoin"><i className="fa-brands fa-bitcoin icon-radius-secure"></i></div>
                        <h3 className='title-rectangle-secure'>Invest in crypto</h3>
                        <p className='description-rectangle-secure'>Invest in crypto anystime, anywhere with our safe, secure, and easy to use online platform</p>
                        <Link to='#' className='link-rectangle-secure'>get started<i class="fa-solid fa-arrow-right icon-arrow-right"></i></Link>
                    </div>

                    <div className="rectangle-secure">
                        <div className="radius-secure radius-secure-fast"><i className="fa-solid fa-bolt icon-radius-secure"></i></div>
                        <h3 className='title-rectangle-secure'>Fast transaction</h3>
                        <p className='description-rectangle-secure'>Invest in cryptocurrency with our secure and easy-to-use online platform. With 24/7 access to full service customer supoort, you can trade with confidence.</p>
                        <Link to='#' className='link-rectangle-secure'>get started<i class="fa-solid fa-arrow-right icon-arrow-right"></i></Link>
                    </div>

                    <div className="rectangle-secure">
                        <div className="radius-secure radius-secure-shield"><i className="fa-solid fa-shield-halved icon-radius-secure"></i></div>
                        <h3 className='title-rectangle-secure'>Secure</h3>
                        <p className='description-rectangle-secure'>Gain access to a variety of digital assets with just a few clicks. Our intuitive platform makes it easy to buy, sell, and store your cryptocurrency.</p>
                        <Link to='#' className='link-rectangle-secure'>get started<i class="fa-solid fa-arrow-right icon-arrow-right"></i></Link>
                    </div>
                </div>
            </section>

        <section className="section-customer">
            <div className="container-img-customer">
                <img src={BitcoinCustomer} className='bitcoin-img-customer' alt="" />
            </div>  

            <div className="container-text-customer">
                <h2>24/7 access to customer support</h2>
                <p>Invest in digital assets with peace of mind. Our secure platform offers industry-leading security to protect your funds. With advanced encryption technology and multi-factor authentication, we ensure that your investments are safeguarded against unauthorized access. Our platform undergoes regular security audits to maintain the highest standards of protection, giving you confidence in the safety of your digital assets.</p>
                <div className="container-btn-customer">
                <button className="btn-learnMore">learn more</button>
                </div>
                </div>
        </section>

        <section className="section-pricing">
            <h2>Pricing</h2>
            <p className='description-pricing'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, quas! Autem consequuntur saepe tempore? Quos, nisi reprehenderit numquam commodi unde dolor saepe quae cupiditate?</p>

            <div className="container-mini-cards">
            <div className="container-pricing-elements">

            <div className="container-text-icon-pricing">
            <i class="fa-solid fa-arrow-right-arrow-left icon-pricing"></i>
            <p className='text-icon-pricing'>send & receive</p>
            </div>
            </div>

            <div className="container-pricing-elements">

<div className="container-text-icon-pricing">
<i class="fa-solid fa-square-poll-vertical icon-pricing"></i>
<p className='text-icon-pricing'>trading & charts</p>
</div>

</div>

<div className="container-pricing-elements">

<div className="container-text-icon-pricing">
<i class="fa-solid fa-wallet icon-pricing"></i>
<p className='text-icon-pricing'>wallet</p>
</div>

</div>

<div className="container-pricing-elements">

<div className="container-text-icon-pricing">
<i class="fa-solid fa-clock-rotate-left icon-pricing"></i>
<p className='text-icon-pricing'>real time & trading</p>
</div>
</div> {/* mini cards container */}
</div>

{/* cards */}
<div className="container-cards">
    <div className="card-pricing">
        <div className="container-plan">
        <p className="plan">basic</p>
        </div>
        <p className="price">R$79.00 usd</p>
        <p className="description-price">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit natus dicta.</p>
        <p className="features">features</p>

        <ul className="ul-cards">
            <li className="li-cards">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="li-cards">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="li-cards">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="li-cards">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>
    </div>

    <div className="card-pricing">
        <div className="container-plan">
        <p className="plan">pro</p>
        </div>
        <p className="price">R$179.00 usd</p>
        <p className="description-price">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit natus dicta.</p>
        <p className="features">features</p>

        <ul className="ul-cards">
            <li className="li-cards">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="li-cards">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="li-cards">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="li-cards">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>
    </div>

    <div className="card-pricing">
        <div className="container-plan">
        <p className="plan">expert</p>
        </div>
        <p className="price">R$579.00 usd</p>
        <p className="description-price">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit natus dicta.</p>
        <p className="features">features</p>

        <ul className="ul-cards">
            <li className="li-cards">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="li-cards">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="li-cards">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="li-cards">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>

        <button className="btn-add">Add to cart</button>
        <button className="btn-buy">Buy now</button>
    </div>
</div>


        </section>
        </div> // container
    )
}