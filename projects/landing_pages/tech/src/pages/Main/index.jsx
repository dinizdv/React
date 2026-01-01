import NFT from '../../assets/NFT-img.png';
import Member1 from '../../assets/member1.png';
import Member2 from '../../assets/member2.png';
import Member3 from '../../assets/member3.png';
import Member4 from '../../assets/member4.png';
import BitcoinCustomer from '../../assets/bitcoin-customer.png';
import { Link } from 'react-router-dom';
import './main.css';

export default function Main() {
    function showSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    }

    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    }

    return (
        <>
            <header>
                <p className="logo-header">NFT Tech</p>

                <nav className="nav-header">
                    <ul className="sidebar">
                        <li className="li-header">
                            <a href="#" className="link-header">
                                <i
                                    className="fa-solid fa-x closeSidebar"
                                    onClick={hideSidebar}
                                ></i>
                            </a>
                            <a href="#" className="link-header">home</a>
                            <a href="#" className="link-header">NFT markets</a>
                            <a href="#" className="link-header">shop</a>
                            <a href="#" className="link-header">about us</a>
                        </li>
                    </ul>

                    <ul className="ul-header">
                        <li className="li-header">
                            <a href="#" className="link-header hideOnMobile">home</a>
                            <a href="#" className="link-header hideOnMobile">NFT markets</a>
                            <a href="#" className="link-header hideOnMobile">shop</a>
                            <a href="#" className="link-header hideOnMobile">about us</a>
                            <a href="#" className="link-header">
                                <i
                                    className="fa-solid fa-bars menu-btn"
                                    onClick={showSidebar}
                                ></i>
                            </a>
                        </li>
                    </ul>
                </nav>

                <button className="btn-explore-header">explore now</button>
            </header>

            <div className="container">
                <section className="section-main">
                    <div className="section-texts-main">
                        <h1 className="title-main">
                            explore the largest <span className="nft-color">NFT</span> marketplaces
                        </h1>

                        <p>
                            Buy, sell, and trade digital assets with confidence using a modern
                            and secure blockchain platform designed for everyone.
                        </p>

                        <div className="container-btn-main">
                            <button className="btn-connect">connect wallet</button>
                            <button className="btn-learnMore">learn more</button>
                        </div>

                        <div className="container-members">
                            <p>Our members</p>

                            <div className="container-circles">
                                <div className="member">
                                    <img src={Member1} alt="" className="member-img" />
                                </div>
                                <div className="member">
                                    <img src={Member2} alt="" className="member-img" />
                                </div>
                                <div className="member">
                                    <img src={Member3} alt="" className="member-img" />
                                </div>
                                <div className="member">
                                    <img src={Member4} alt="" className="member-img" />
                                </div>
                                <div className="member">
                                    <i className="fa-solid fa-user-plus icon-more"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-img-main">
                        <img src={NFT} className="nft-img-main" alt="" />
                    </div>
                </section>

                <section className="section-secure">
                    <h2>secure & private</h2>
                    <p>24/7 dedicated support team</p>

                    <div className="container-secure">
                        <div className="rectangle-secure">
                            <div className="radius-secure radius-secure-bitcoin">
                                <i className="fa-brands fa-bitcoin icon-radius-secure"></i>
                            </div>
                            <h3 className="title-rectangle-secure">Invest in crypto</h3>
                            <p className="description-rectangle-secure">
                                Invest anytime and anywhere using a reliable platform that
                                prioritizes transparency, simplicity, and security.
                            </p>
                            <Link to="#" className="link-rectangle-secure">
                                get started
                                <i className="fa-solid fa-arrow-right icon-arrow-right"></i>
                            </Link>
                        </div>

                        <div className="rectangle-secure">
                            <div className="radius-secure radius-secure-fast">
                                <i className="fa-solid fa-bolt icon-radius-secure"></i>
                            </div>
                            <h3 className="title-rectangle-secure">Fast transaction</h3>
                            <p className="description-rectangle-secure">
                                Experience instant transfers and real-time confirmations,
                                backed by scalable infrastructure and global accessibility.
                            </p>
                            <Link to="#" className="link-rectangle-secure">
                                get started
                                <i className="fa-solid fa-arrow-right icon-arrow-right"></i>
                            </Link>
                        </div>

                        <div className="rectangle-secure">
                            <div className="radius-secure radius-secure-shield">
                                <i className="fa-solid fa-shield-halved icon-radius-secure"></i>
                            </div>
                            <h3 className="title-rectangle-secure">Secure</h3>
                            <p className="description-rectangle-secure">
                                Protect your digital assets with industry-grade encryption,
                                multi-factor authentication, and constant monitoring.
                            </p>
                            <Link to="#" className="link-rectangle-secure">
                                get started
                                <i className="fa-solid fa-arrow-right icon-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="section-customer">
                    <div className="container-img-customer">
                        <img src={BitcoinCustomer} className="bitcoin-img-customer" alt="" />
                    </div>

                    <div className="container-text-customer">
                        <h2>24/7 access to customer support</h2>
                        <p>
                            Get help whenever you need it. Our global support team is available
                            around the clock to assist with transactions, security, and account
                            management.
                        </p>
                        <div className="container-btn-customer">
                            <button className="btn-learnMore">learn more</button>
                        </div>
                    </div>
                </section>

                <section className="section-pricing">
                    <h2>Pricing</h2>
                    <p className="description-pricing">
                        Choose a plan that fits your goals. Whether you are just starting
                        or managing advanced portfolios, we have a solution for you.
                    </p>

                    <div className="container-mini-cards">
                        <div className="container-pricing-elements">
                            <div className="container-text-icon-pricing">
                                <i className="fa-solid fa-arrow-right-arrow-left icon-pricing"></i>
                                <p className="text-icon-pricing">send & receive</p>
                            </div>
                        </div>

                        <div className="container-pricing-elements">
                            <div className="container-text-icon-pricing">
                                <i className="fa-solid fa-square-poll-vertical icon-pricing"></i>
                                <p className="text-icon-pricing">trading & charts</p>
                            </div>
                        </div>

                        <div className="container-pricing-elements">
                            <div className="container-text-icon-pricing">
                                <i className="fa-solid fa-wallet icon-pricing"></i>
                                <p className="text-icon-pricing">wallet</p>
                            </div>
                        </div>

                        <div className="container-pricing-elements">
                            <div className="container-text-icon-pricing">
                                <i className="fa-solid fa-clock-rotate-left icon-pricing"></i>
                                <p className="text-icon-pricing">real-time trading</p>
                            </div>
                        </div>
                    </div>

                    <div className="container-cards">
                        <div className="card-pricing">
                            <div className="container-plan">
                                <p className="plan">basic</p>
                            </div>
                            <p className="price">R$79.00 usd</p>
                            <p className="description-price">
                                Ideal for beginners who want a simple and secure way
                                to explore digital assets.
                            </p>
                            <p className="features">features</p>

                            <ul className="ul-cards">
                                <li className="li-cards">Access to basic trading tools</li>
                                <li className="li-cards">Secure wallet storage</li>
                                <li className="li-cards">Email support</li>
                                <li className="li-cards">Standard transaction limits</li>
                            </ul>

                            <div className="container-btn-pricing">
                                <button className="btn-add">Add to cart</button>
                                <button className="btn-buy">Buy now</button>
                            </div>
                        </div>

                        <div className="card-pricing">
                            <div className="container-plan">
                                <p className="plan">pro</p>
                            </div>
                            <p className="price">R$279.00 usd</p>
                            <p className="description-price">
                                Perfect for active traders looking for deeper insights
                                and faster execution.
                            </p>
                            <p className="features">features</p>

                            <ul className="ul-cards">
                                <li className="li-cards">Advanced analytics tools</li>
                                <li className="li-cards">Priority customer support</li>
                                <li className="li-cards">Higher transaction limits</li>
                                <li className="li-cards">Market trend alerts</li>
                            </ul>

                            <div className="container-btn-pricing">
                                <button className="btn-add">Add to cart</button>
                                <button className="btn-buy">Buy now</button>
                            </div>
                        </div>

                        <div className="card-pricing">
                            <div className="container-plan">
                                <p className="plan">expert</p>
                            </div>
                            <p className="price">R$579.00 usd</p>
                            <p className="description-price">
                                Designed for professionals managing large portfolios
                                and high-volume transactions.
                            </p>
                            <p className="features">features</p>

                            <ul className="ul-cards">
                                <li className="li-cards">Unlimited trading volume</li>
                                <li className="li-cards">Dedicated account manager</li>
                                <li className="li-cards">Custom security controls</li>
                                <li className="li-cards">Exclusive market insights</li>
                            </ul>

                            <div className="container-btn-pricing">
                                <button className="btn-add">Add to cart</button>
                                <button className="btn-buy">Buy now</button>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    <h2>contact us</h2>
                    <p>
                        Reach out to our team for partnerships, support, or general inquiries.
                        We are always ready to help you move forward.
                    </p>

                    <nav className="nav-links-footer">
                        <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                        <Link to="#"><i className="fa-brands fa-x-twitter"></i></Link>
                        <Link to="#"><i className="fa-brands fa-youtube"></i></Link>
                        <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                        <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                    </nav>
                </footer>
            </div>
        </>
    );
}