import './dashboard.css';
import ProfilePhoto from '../../assets/profilePhoto.png';
import { Pie, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

export default function Dashboard() {

    const chartData = {
        labels: ['Total Paid', 'Total Unpaid', 'Total Overdue'],
        datasets: [
            {
                data: [10, 15, 20],
                backgroundColor: [
                    '#192030',
                    '#E3EAF2',
                    '#4B59E0'
                ]
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            tooltip: {
                callbacks: {
                    label: (context) => `${context.label}: ${context.parsed}`
                }
            }
        }
    };

    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Sales',
                data: [26, 15, 19, 14, 21, 12, 28],
                borderColor: '#4B59E0',
                backgroundColor: '#4B59E0'
            }
        ]
    };

    const lineChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            tooltip: {
                callbacks: {
                    label: (context) => `${context.label}: ${context.parsed}`
                }
            }
        }
    };

    return (
        <>
            <div className="sidebar">
                <nav>
                    <ul className="ul-sidebar">
                        <li className="li-sidebar">
                            <i className="fa-solid fa-coins"></i>
                            <button>Finance Tech</button>
                        </li>

                        <ul className="ul-sidebar-links">
                            <li className="li-sidebar subtitle-sidebar">
                                <button>resources</button>
                            </li>
                            <li className="li-sidebar link-sidebar">
                                <i className="fa-solid fa-table-cells-large"></i>
                                <button>dashboard</button>
                            </li>
                            <li className="li-sidebar link-sidebar">
                                <i className="fa-solid fa-cube"></i>
                                <button>products</button>
                            </li>
                            <li className="li-sidebar link-sidebar">
                                <i className="fa-solid fa-store"></i>
                                <button>store</button>
                            </li>
                            <li className="li-sidebar link-sidebar">
                                <i className="fa-regular fa-comment-dots"></i>
                                <button>messages</button>
                            </li>
                            <li className="li-sidebar link-sidebar">
                                <i className="fa-solid fa-chart-line"></i>
                                <button>statistics</button>
                            </li>
                            <li className="li-sidebar link-sidebar">
                                <i className="fa-solid fa-file-invoice-dollar"></i>
                                <button>invoices</button>
                            </li>
                            <li className="li-sidebar link-sidebar">
                                <i className="fa-solid fa-list-check"></i>
                                <button>to-do list</button>
                            </li>
                            <li className="li-sidebar link-sidebar">
                                <i className="fa-solid fa-hand-holding-dollar"></i>
                                <button>finances</button>
                            </li>
                        </ul>

                        <ul className="ul-sidebar-links">
                            <li className="li-sidebar subtitle-sidebar">
                                <button>help & support</button>
                            </li>
                            <li className="li-sidebar link-sidebar">
                                <i className="fa-solid fa-triangle-exclamation"></i>
                                <button>help & center</button>
                            </li>
                            <li className="li-sidebar link-sidebar">
                                <i className="fa-solid fa-gear"></i>
                                <button>settings</button>
                            </li>
                        </ul>

                        <ul className="ul-logout">
                            <li className="li-sidebar link-sidebar">
                                <i className="fa-solid fa-arrow-right-from-bracket" id="link-logout"></i>
                                <button>log out</button>
                            </li>
                        </ul>
                    </ul>
                </nav>
            </div>

            <main>
                <div className="top">
                    <p className="welcome">
                        welcome back, diniz <i className="fa-solid fa-hand"></i>
                    </p>

                    <div className="profile-top">
                        <div className="search-container">
                            <form>
                                <button type="submit">
                                    <i className="fa fa-search"></i>
                                </button>
                                <input
                                    type="text"
                                    placeholder="Search anything"
                                    name="search"
                                />
                            </form>
                        </div>
                    </div>

                    <div className="contact-top">
                        <i className="fa-regular fa-comment-dots icon-top"></i>
                        <i className="fa-regular fa-bell icon-top"></i>

                        <div className="container-profile">
                            <div className="radius-profile">
                                <img src={ProfilePhoto} alt="User profile" />
                            </div>
                            <label>Bruno Diniz</label>
                        </div>

                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                </div>

                <div className="container-cards">
                    <div className="card">
                        <div className="border-card">
                            <h2>Customers</h2>
                            <span>1612</span>
                        </div>
                        <p className="p-card">
                            <label className="update">
                                <i className="fa-solid fa-arrow-up"></i>
                                +4,57%
                            </label>
                            since last week
                        </p>
                    </div>

                    <div className="card">
                        <div className="border-card">
                            <h2>Revenue</h2>
                            <span>$3.175</span>
                        </div>
                        <p className="p-card">
                            <label className="fall">
                                <i className="fa-solid fa-arrow-down"></i>
                                -0,21%
                            </label>
                            since last week
                        </p>
                    </div>

                    <div className="card">
                        <div className="border-card">
                            <h2>Profit</h2>
                            <span>58%</span>
                        </div>
                        <p className="p-card">
                            <label className="fall">
                                <i className="fa-solid fa-arrow-down"></i>
                                -0,33%
                            </label>
                            since last week
                        </p>
                    </div>

                    <div className="card">
                        <div className="border-card">
                            <h2>Invoices</h2>
                            <span>1.351</span>
                        </div>
                        <p className="p-card">
                            <label className="update">
                                <i className="fa-solid fa-arrow-up"></i>
                                +14,36%
                            </label>
                            since last week
                        </p>
                    </div>
                </div>

                <section className="container-graph">
                    <div className="pie-chart-container">
                        <Pie data={chartData} options={chartOptions} id="pie-graph" />
                    </div>

                    <div className="line-chart-container">
                        <Line data={lineChartData} options={lineChartOptions} />
                    </div>
                </section>

                <div className="container-table">
                    <table>
                        <h2>recent invoices</h2>
                        <thead>
                            <tr>
                                <th>no</th>
                                <th>id customers</th>
                                <th>customers name</th>
                                <th>items name</th>
                                <th>order date</th>
                                <th>price</th>
                                <th>status</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>#052499</td>
                                <td>Bruno Diniz</td>
                                <td>1xBlack Backpack</td>
                                <td>03/09/2024</td>
                                <td>$101</td>
                                <td>
                                    <label className="td-status paid">paid</label>
                                </td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>#062499</td>
                                <td>Bill Gates</td>
                                <td>1xDistro Backpack</td>
                                <td>04/09/2024</td>
                                <td>$144</td>
                                <td>
                                    <label className="td-status pending">pending</label>
                                </td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>#072499</td>
                                <td>Jeff Bezos</td>
                                <td>1xNew Backpack</td>
                                <td>05/09/2024</td>
                                <td>$121</td>
                                <td>
                                    <label className="td-status paid">paid</label>
                                </td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>#082499</td>
                                <td>Warren Buffet</td>
                                <td>2xBlack Backpack</td>
                                <td>06/09/2024</td>
                                <td>$202</td>
                                <td>
                                    <label className="td-status overdue">overdue</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}
