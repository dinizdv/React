import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Person from '../../assets/person.png'
import Logo from '../../assets/logo.png'
import ContactUs from '../../assets/contact.png'
import PersonComment from '../../assets/person-comment.png'
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
        // header
        <div className='bg'>
            <header className='header'>
                <nav className='nav-header'>
                    <label className='logo'>student guide</label>
                    {/* <label htmlFor="" className='logo'>Logo</label> */}
                    <ul className='sidebar'>
                        <li onClick={hideSidebar} className='li-nav-header'><a href="#"><i class="fa-solid fa-x"></i></a></li>
                        <li className='li-nav-header sidebar-a'><a href="#">Home</a></li>
                        <li className='li-nav-header sidebar-a'><a href="#">About</a></li>
                        <li className='li-nav-header sidebar-a'><a href="#">Contact</a></li>
                    </ul>
                    <ul className='ul-nav-header'>
                        <li className='li-nav-header hideOnMobile'><a href="#">Home</a></li>
                        <li className='li-nav-header hideOnMobile'><a href="#">About</a></li>
                        <li className='li-nav-header hideOnMobile'><a href="#">Contact</a></li>
                        <li onClick={showSidebar} className='menu-btn'><a href="#"><i class="fa-solid fa-bars"></i></a></li>
                    </ul>
                    {/* <button className='menu-collapse'>☰</button> */}
                </nav>
            </header>

{/* main */}
            <div className="container-section-main">
                <section className="section-main-description">
                    <h1 className='title-section-main-description'>Develop your skills in a new and unique way</h1>
                    <p className='p-section-main-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod minus esse quibusdam qui dolores?</p>
                    <div className="container-btn-section-main">
                        <button className='btn-main-section'>Access</button>
                        <button className='btn-outline-main-section'>Watch video</button>
                    </div>
                </section>

                <section className="section-main-image">
                    <img src={Person} className='person' alt="" />
                </section>
            </div>

            {/* courses */}
            <section className="section-courses">
                <h1 className='title-courses'>Courses</h1>
                <p className='description-courses'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quae ipsam sit consectetur beatae, odit nobis amet neque veniam sapiente?</p>
                
            <div className="container-circles">
                    <div className="container-circle-elements">
                        <div className="circular-progress">
                            <div className="inner-circle"></div>
                            <p className="percentage">97%</p>
                        </div>
                        <label htmlFor="" className='label-circle'>react JS + typeScript</label>
                    </div>

                    <div className="container-circle-elements">
                        <div className="circular-progress">
                            <div className="inner-circle"></div>
                            <p className="percentage">97%</p>
                        </div>
                        <label htmlFor="" className='label-circle'>advanced javaScript</label>
                    </div>

                    <div className="container-circle-elements">
                        <div className="circular-progress">
                            <div className="inner-circle"></div>
                            <p className="percentage">97%</p>
                        </div>
                        <label htmlFor="" className='label-circle'>angular for begginers</label>
                    </div>
            </div>
                
            </section>

{/* contact */}
            <div className="section-contact">
                <section className="section-contact-img">
                    <img src={ContactUs} className='contactUs-img' alt="" />
                </section>

                <section className="section-contact-form">
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
                </section>
            </div>

            {/* recomendations */}
            <section className="section-comments">
                <h1 className='comments-title'>Student´s Comments</h1>
                <p className='comments-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dolorem. A in fugit recusandae quae?</p>
                <div className="container-comments">
                 
                <div className="comment">
                    <div className="container-comment-person">
                        <img src={PersonComment} className='comment-img' alt="" />
                        <div className="container-names-person">
                            <p className="comment-name">Bruno Diniz</p>
                            <p className="comment-job">fullstack developer</p>
                        </div>
                    </div>
                    <div className="container-p-comment">
                        <p className='p-comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam amet saepe iure laborum.</p>
                    </div>
                    </div>  

                    <div className="comment">
                    <div className="container-comment-person">
                        <img src={PersonComment} className='comment-img' alt="" />
                        <div className="container-names-person">
                            <p className="comment-name">Bruno Diniz</p>
                            <p className="comment-job">fullstack developer</p>
                        </div>
                    </div>
                    <div className="container-p-comment">
                        <p className='p-comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam amet saepe iure laborum.</p>
                    </div>
                    </div>

                    <div className="comment">
                    <div className="container-comment-person">
                        <img src={PersonComment} className='comment-img' alt="" />
                        <div className="container-names-person">
                            <p className="comment-name">Bruno Diniz</p>
                            <p className="comment-job">fullstack developer</p>
                        </div>
                    </div>
                    <div className="container-p-comment">
                        <p className='p-comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam amet saepe iure laborum.</p>
                    </div>
                    </div>

                </div>
            </section>

            <footer>
                <label className='logo-footer'>student guide</label>
                <div className="container-footer-elements">
                    <div className="container-footer-icons">
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div className="container-copyright">
                        <p className='p-copyright'>Copyright 2024. All Rights Reserved</p>
                    </div>
                </div>
            </footer>

        </div> // bg 
    )
}