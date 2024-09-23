import '../../styles/main.css'
import Header from '../Header/index'
import bgMain from '../../assets/bgMainnn.jpg'
import bgMainn from '../../assets/bgMainn.jpg'
import imgMain from '../../assets/metaverseMain.png'

const Main = () => {
    return (
        <div className="container-main">
            <Header/>
            <div className="container-bg-main">
            <img src={bgMainn} alt="" />
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
                <a href="" id='buy-tickets-explore'>buy tickets</a>
            </section>


            <section className="explore">
                <img src={bgMainn} alt="" />
            </section>

            section.

</div>
</div>
    )
}

export default Main