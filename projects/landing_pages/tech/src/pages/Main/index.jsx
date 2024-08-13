import NFT from '../../assets/NFT-img.png'
import Member1 from '../../assets/member1.png'
import Member2 from '../../assets/member2.png'
import Member3 from '../../assets/member3.png'
import Member4 from '../../assets/member4.png'
import { Link } from 'react-router-dom'
import './main.css'

export default function Main() {
    return (
        <div className='container'>
            <header>
                <p className='logo-header'>Logo</p>
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
                <h1>secure & private</h1>
                <p>24/7 dedicated support team</p>

                <div className="container-secure">
                    <div className="rectangle-secure">
                        <div className="radius-secure"><i className="fa-brands fa-bitcoin icon-radius-secure"></i></div>
                        <h2 className='title-rectangle-secure'>Invest in crypto</h2>
                        <p className='description-rectangle-secure'>Invest in crypto anystime, anywhere with our safe, secure, and easy to use online platform</p>
                        <Link to='#' className='link-rectangle-secure'>get started</Link>
                    </div>

                    <div className="rectangle-secure">
                        <div className="radius-secure"><i className="fa-brands fa-bitcoin icon-radius-secure"></i></div>
                        <h2 className='title-rectangle-secure'>Invest in crypto</h2>
                        <p className='description-rectangle-secure'>Invest in crypto anystime, anywhere with our safe, secure, and easy to use online platform</p>
                        <Link to='#' className='link-rectangle-secure'>get started</Link>
                    </div>

                    <div className="rectangle-secure">
                        <div className="radius-secure"><i className="fa-brands fa-bitcoin icon-radius-secure"></i></div>
                        <h2 className='title-rectangle-secure'>Invest in crypto</h2>
                        <p className='description-rectangle-secure'>Invest in crypto anystime, anywhere with our safe, secure, and easy to use online platform</p>
                        <Link to='#' className='link-rectangle-secure'>get started</Link>
                    </div>
                </div>
            </section>

<h1>text</h1>
        </div> // container
    )
}