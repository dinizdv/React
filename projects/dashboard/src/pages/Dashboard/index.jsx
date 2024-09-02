import './dashboard.css'

export default function Dashboard(){
    return(
        <>
        <div className="sidebar">
            <nav>
                <ul className='ul-sidebar'>
                    <li className='li-sidebar'><a href="">Dashboard</a></li>
                </ul>
            </nav>
        </div> {/* sidebar */}

        <main>
            <div className="top">
                <p>welcome back, diniz</p>
                <div className="profile-top">
                    <p>test</p>
                </div>
            </div>
        
            <div className="container-cards">
                <div className="card">
                    <div className="border-card">
                    <h2>Customers</h2>
                    <span>1420</span>
                    </div>
                    <p className='p-card'><label htmlFor="" className="update"><i class="fa-solid fa-arrow-up"></i>
4,5%</label>since last week</p>
                </div>

                <div className="card">
                    <div className="border-card">
                    <h2>Customers</h2>
                    <span>1420</span>
                    </div>
                    <p className='p-card'><label htmlFor="" className="update"><i class="fa-solid fa-arrow-up"></i>
4,5%</label>since last week</p>
                </div>

                <div className="card">
                    <div className="border-card">
                    <h2>Customers</h2>
                    <span>1420</span>
                    </div>
                    <p className='p-card'><label htmlFor="" className="update"><i class="fa-solid fa-arrow-up"></i>
4,5%</label>since last week</p>
                </div>

                <div className="card">
                    <div className="border-card">
                    <h2>Customers</h2>
                    <span>1420</span>
                    </div>
                    <p className='p-card'><label htmlFor="" className="update"><i class="fa-solid fa-arrow-up"></i>
4,5%</label>since last week</p>
                </div>

            </div>
        </main>
        </>
    )
}