import '../../styles/main.css'
import Header from '../Header/index'
import bgMain from '../../assets/bgMainnn.jpg'

const Main = () => {
    return (
        <div className="container-main">
            <Header/>
            <div className="container-bg-main">
            <img src={bgMain} alt="" />
            </div>

            <section className="explore">
                <h1>explore the future of the metaverse</h1>
                <p>world´s largest online metaverse conference</p>
                <p>2nd-3rd december 2024</p>
                <div className="container-stopwatch">
                    <div className="stopwatch">
                        <label htmlFor="">63</label>
                        <label htmlFor="">days</label>
                    </div>
                    <div className="stopwatch">
                        <label htmlFor="">63</label>
                        <label htmlFor="">days</label>
                    </div>
                    <div className="stopwatch">
                        <label htmlFor="">63</label>
                        <label htmlFor="">days</label>
                    </div>
                    <div className="stopwatch">
                        <label htmlFor="">63</label>
                        <label htmlFor="">days</label>
                    </div>
                </div>
                <a href="" id='buy-tickets-explore'>buy tickets</a>
            </section>
        </div>
    )
}

export default Main