import Person from '../../assets/person.png'
import BillGates from '../../assets/bill-gates.png'
import JeffBezos from '../../assets/jeff-bezos.png'
import ContactUs from '../../assets/contact.png'
import BrunoDiniz from '../../assets/person-comment.png'

import './main.css'

export default function Main() {
    function showSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }

    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }

    return (
        <div className="bg">
            <header className="header">
                <nav className="nav-header">
                    <label className="logo">student guide</label>

                    <ul className="sidebar">
                        <li
                            onClick={hideSidebar}
                            className="li-nav-header"
                        >
                            <a href="#">
                                <i className="fa-solid fa-x closeSidebar"></i>
                            </a>
                        </li>

                        <li className="li-nav-header sidebar-a">
                            <a href="#">Home</a>
                            <i className="fa-solid fa-house"></i>
                        </li>

                        <li className="li-nav-header sidebar-a">
                            <a href="#">About</a>
                            <i className="fa-solid fa-comment"></i>
                        </li>

                        <li className="li-nav-header sidebar-a">
                            <a href="#">Courses</a>
                            <i className="fa-solid fa-book"></i>
                        </li>

                        <li className="li-nav-header sidebar-a">
                            <a href="#">Contact</a>
                            <i className="fa-solid fa-phone-flip"></i>
                        </li>
                    </ul>

                    <ul className="ul-nav-header">
                        <li className="li-nav-header hideOnMobile">
                            <a href="#">Home</a>
                        </li>

                        <li className="li-nav-header hideOnMobile">
                            <a href="#">About</a>
                        </li>

                        <li className="li-nav-header hideOnMobile">
                            <a href="#">Courses</a>
                        </li>

                        <li className="li-nav-header hideOnMobile">
                            <a href="#">Contact</a>
                        </li>

                        <li
                            onClick={showSidebar}
                            className="menu-btn"
                        >
                            <a href="#">
                                <i className="fa-solid fa-bars"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <div className="container-section-main">
                <section className="section-main-description">
                    <h1 className="title-section-main-description">
                        Develop your skills in a unique way
                    </h1>

                    <p className="p-section-main-description">
                        Various courses on software development and programming!
                        Discover all the courses below or watch a video about them
                    </p>

                    <div className="container-btn-section-main">
                        <button className="btn-main-section">
                            Access courses
                        </button>

                        <button className="btn-outline-main-section">
                            Watch video
                        </button>
                    </div>
                </section>

                <section className="section-main-image">
                    <img
                        src={Person}
                        className="person"
                        alt=""
                    />
                </section>
            </div>

            <section className="section-courses">
                <h1 className="title-courses">Courses</h1>

                <p className="description-courses">
                    Below are our most popular courses and the total satisfaction
                    percentage of students who completed them
                </p>

                <div className="container-circles">
                    <div className="container-circle-elements">
                        <div className="circular-progress">
                            <div className="inner-circle"></div>
                            <p className="percentage">99%</p>
                        </div>

                        <label className="label-circle">
                            react JS + typeScript
                        </label>
                    </div>

                    <div className="container-circle-elements">
                        <div className="circular-progress">
                            <div className="inner-circle"></div>
                            <p className="percentage">96%</p>
                        </div>

                        <label className="label-circle">
                            advanced javaScript
                        </label>
                    </div>

                    <div className="container-circle-elements">
                        <div className="circular-progress">
                            <div className="inner-circle"></div>
                            <p className="percentage">97%</p>
                        </div>

                        <label className="label-circle">
                            java for beginners
                        </label>
                    </div>
                </div>
            </section>

            <div className="section-contact">
                <section className="section-contact-img">
                    <img
                        src={ContactUs}
                        className="contactUs-img"
                        alt=""
                    />
                </section>

                <section className="section-contact-form">
                    <h1 className="title-section-contact-form">
                        get in touch
                    </h1>

                    <form action="">
                        <div className="container-input">
                            <input
                                type="text"
                                className="input-form"
                                placeholder="first name"
                            />

                            <input
                                type="text"
                                className="input-form"
                                placeholder="last name"
                            />
                        </div>

                        <div className="container-input">
                            <input
                                type="text"
                                className="input-form"
                                placeholder="email address"
                            />

                            <input
                                type="text"
                                className="input-form"
                                placeholder="phone number"
                            />
                        </div>

                        <textarea
                            placeholder="Message (optional)"
                        ></textarea>

                        <div className="container-btnSend-form">
                            <button className="btnSend-form">
                                Send
                            </button>
                        </div>
                    </form>
                </section>
            </div>

            <section className="section-comments">
                <h1 className="comments-title">
                    Student´s Comments
                </h1>

                <p className="comments-description">
                    Below are some comments from our students about their experiences with us
                </p>

                <div className="container-comments">
                    <div className="comment">
                        <div className="container-comment-person">
                            <img
                                src={BillGates}
                                className="comment-img"
                                alt=""
                            />

                            <div className="container-names-person">
                                <p className="comment-name">bill gates</p>
                                <p className="comment-job">fullstack developer</p>
                            </div>
                        </div>

                        <p className="p-comment">
                            I had an incredible experience with two courses taken here.
                            I want to continue!
                        </p>
                    </div>

                    <div className="comment">
                        <div className="container-comment-person">
                            <img
                                src={BrunoDiniz}
                                className="comment-img"
                                alt=""
                            />

                            <div className="container-names-person">
                                <p className="comment-name">Bruno Diniz</p>
                                <p className="comment-job">fullstack developer</p>
                            </div>
                        </div>

                        <p className="p-comment">
                            It was a great opportunity to participate in the React JS + TypeScript course!
                        </p>
                    </div>

                    <div className="comment">
                        <div className="container-comment-person">
                            <img
                                src={JeffBezos}
                                className="comment-img"
                                alt=""
                            />

                            <div className="container-names-person">
                                <p className="comment-name">jeff bezos</p>
                                <p className="comment-job">backend developer</p>
                            </div>
                        </div>

                        <p className="p-comment">
                            I learned a lot here. It helped me to create Amazon system!
                        </p>
                    </div>
                </div>
            </section>

            <footer>
                <label className="logo-footer">
                    student guide
                </label>

                <div className="container-footer-elements">
                    <div className="container-footer-icons">
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>

                    <div className="container-copyright">
                        <p className="p-copyright">
                            Copyright 2024. All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
