import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Person from '../../assets/person.png'
import Logo from '../../assets/logo.png'
import ContactUs from '../../assets/contact.png'
import './main.css'

export default function Main(){
    const [progressValues, setProgressValues] = useState({ circle1: 70, circle2: 85, circle3: 60 }); // Exemplo para três círculos

    function showSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }

    function hideSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }



    useEffect(() => {
        const intervals = Object.keys(progressValues).map(key => {
            const maxValue = progressValues[key]; // Valor máximo de progresso para cada círculo
            const intervalId = setInterval(() => {
                if (progressValues[key] < maxValue) {
                    setProgressValues(prevValues => ({
                        ...prevValues,
                        [key]: prevValues[key] + 1
                    }));
                } else {
                    clearInterval(intervalId);
                }
            }, 20); // Ajuste a velocidade conforme necessário

            return intervalId;
        });

        return () => {
            intervals.forEach(interval => clearInterval(interval));
        };
    }, [progressValues]);

    return(
        // header
        <div className='bg-gradient'>
            <header className='header'>
                <nav className='nav-header'>
                    <img className='logo' src={Logo}/>
                    {/* <label htmlFor="" className='logo'>Logo</label> */}
                    <ul className='sidebar'>
                        <li onClick={hideSidebar} className='li-nav-header'><a href="#"><i class="fa-solid fa-x"></i></a></li>
                        <li className='li-nav-header'><a href="#">Home</a></li>
                        <li className='li-nav-header'><a href="#">About</a></li>
                        <li className='li-nav-header'><a href="#">Contact</a></li>
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

            {/* skills */}
            <section className="section-skills">
                <h1 className='title-skills'>Skills</h1>
                <p className='description-skills'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quae ipsam sit consectetur beatae, odit nobis amet neque veniam sapiente?</p>
                

            <div className="container-circles">
                {Object.entries(progressValues).map(([key, value]) => (
                    <div key={key} className="circular-progress" data-inner-circle-color="white" data-percentage={`${value}%`} data-progress-color="rebeccapurple" data-bg-color="violet">
                        <div className="inner-circle"></div>
                        <p className="percentage">{`${value}%`}</p>
                    </div>
                ))}
            </div>
                
            </section>


            <div className="section-contact">
                <section className="section-contact-img">
                    <img src={ContactUs} className='contactUs-img' alt="" />
                </section>

                <section className="section-contact-form">
                    <h1 className='title-section-contact-form'>get in touch</h1> {/* to capitalize */}
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

        </div> // bg-gradient 
    )
}