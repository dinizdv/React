import '../../styles/main.css'
import Header from '../Header/index'
import bgMain from '../../assets/bgMainnn.jpg'
import bgMainn from '../../assets/bgMainn.jpg'
import imgMain from '../../assets/metaverseMain.png'
import { FaMicrosoft } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { BsNvidia } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaAmazon } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiFerrari } from "react-icons/si";
import { SiMcdonalds } from "react-icons/si";


const Main = () => {
    return (
        <div className="container-main">
            <Header/>
            <div className="container-bg-main">
            <img src={bgMain} alt="" />
            </div>

<div className="container-explore">
            <section className="explore-left">
                <h1>explore the metaverse</h1>
                <p>world´s largest online metaverse conference</p>
                <p>2nd-3rd december 2024</p>
                <div className="container-stopwatch">
                    <div className="stopwatch">
                        <label htmlFor="">63</label>
                        <label htmlFor="">days</label>
                    </div>
                    <div className="stopwatch">
                        <label htmlFor="">63</label>
                        <label htmlFor="">hours</label>
                    </div>
                    <div className="stopwatch">
                        <label htmlFor="">63</label>
                        <label htmlFor="">minutes</label>
                    </div>
                    <div className="stopwatch">
                        <label htmlFor="">63</label>
                        <label htmlFor="">seconds</label>
                    </div>
                </div>
                <a href="" className='btn-main'>buy tickets</a>
            </section>


            <section className="explore">
                <img src={bgMainn} alt="" />
            </section>

</div>

<section className="about-us">
    <h1>About us</h1>
</section>

<section className="container-business">
                    <h1>Listen to some of the biggest players in the Metaverse industry</h1>
                    <div className="container-enterprises">
                    <div className="enterprise">
                        <label htmlFor="">microsoft</label>
                        <FaMicrosoft className='logo-enterprise'/>
                </div>

                <div className="enterprise">
                        <label htmlFor="">apple</label>
                        <FaApple className='logo-enterprise'/>
                </div>

                <div className="enterprise">
                        <label htmlFor="">x</label>
                        <BsTwitterX className='logo-enterprise'/>
                </div>               

                <div className="enterprise">
                        <label htmlFor="">spotify</label>
                        <FaSpotify className='logo-enterprise'/>
                </div>

                <div className="enterprise">
                        <label htmlFor="">amazon</label>
                        <FaAmazon className='logo-enterprise'/>
                </div>

                <div className="enterprise">
                        <label htmlFor="">google</label>
                        <FaGoogle className='logo-enterprise'/>
                </div>

                <div className="enterprise">
                        <label htmlFor="">meta</label>
                        <FaMeta className='logo-enterprise'/>
                </div>

                <div className="enterprise">
                        <label htmlFor="">instagram</label>
                        <FaInstagram className='logo-enterprise'/>
                </div>

                <div className="enterprise">
                        <label htmlFor="">ferrari</label>
                        <SiFerrari className='logo-enterprise'/>
                </div>

                <div className="enterprise">
                        <label htmlFor="">mcDonalds</label>
                        <SiMcdonalds className='logo-enterprise'/>
                </div>


                </div>
            </section>
</div>
    )
}

export default Main