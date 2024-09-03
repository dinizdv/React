import './dashboard.css'
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Dashboard(){
    
      const chartData = {
        labels: ['Total Paid', 'Total Unpaid', 'Total Overdue'],
        datasets: [{
          data: [10, 15, 20],
          backgroundColor: [
            '#192030',
            '#E3EAF2',
            '#4B59E0'
          ]
        }]
      };
    
      const chartOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                return `${context.label}: ${context.parsed}`;
              }
            }
          }
        }
      };
    
      const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Sales',
            data: [26, 15, 19, 14, 21, 12, 28],
            borderColor: '#FF6384',
            backgroundColor: '#FF6384'
        }]
    };

    const lineChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        return `${context.label}: ${context.parsed}`;
                    }
                }
            }
        }
    };

    return(
        <>
        <div className="sidebar">
            <nav>
                <ul className='ul-sidebar'>
                    <li className='li-sidebar'><a href="">Finance Tech</a></li>
                    <ul className="ul-sidebar-links">
                    <li className='li-sidebar subtitle-sidebar'><a href="">resources</a></li>
                    <li className='li-sidebar link-sidebar'><a href=""><i class="fa-solid fa-table-cells-large"></i>dashboard</a></li>
                    <li className='li-sidebar link-sidebar'><a href=""><i class="fa-solid fa-cube"></i>products</a></li>
                    <li className='li-sidebar link-sidebar'><a href=""><i class="fa-solid fa-store"></i>store</a></li>
                    <li className='li-sidebar link-sidebar'><a href=""><i class="fa-regular fa-comment-dots"></i>messages</a></li>
                    <li className='li-sidebar link-sidebar'><a href=""><i class="fa-solid fa-chart-line"></i>statistics</a></li>
                    <li className='li-sidebar link-sidebar'><a href=""><i class="fa-solid fa-file-invoice-dollar"></i>invoices</a></li>
                    <li className='li-sidebar link-sidebar'><a href=""><i class="fa-solid fa-list-check"></i>to-do list</a></li>
                    <li className='li-sidebar link-sidebar'><a href=""><i class="fa-solid fa-hand-holding-dollar"></i>finances</a></li>
                    </ul>

                    <ul className="ul-sidebar-links">
                    <li className='li-sidebar subtitle-sidebar'><a href="">help & support</a></li>
                    <li className='li-sidebar link-sidebar'><a href=""><i class="fa-solid fa-triangle-exclamation"></i>help & center</a></li>
                    <li className='li-sidebar link-sidebar'><a href=""><i class="fa-solid fa-gear"></i>settings</a></li>
                    </ul>

<ul className="ul-logout">
<li className='li-sidebar link-sidebar'><a href=""><i class="fa-solid fa-arrow-right-from-bracket" id='link-logout'></i>logout</a></li>
</ul>

                </ul>
            </nav>
        </div> {/* sidebar */}

        <main>
            <div className="top">
                <p className='welcome'>welcome back, diniz<i class="fa-solid fa-hand"></i></p>
                <div className="profile-top">
                    <div className="search"><i class="fa-solid fa-magnifying-glass"></i></div>
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
            
{/* graphs */}
<section className="container-graph">
<div className="pie-chart-container">
<Pie data={chartData} options={chartOptions} id='pie-graph' />
</div>

<div className="line-chart-container">
<Line
  data={lineChartData}
  options={lineChartOptions}
/>
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
            {/* paid (green), pending (orange), overdue (red) */}
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
                <label htmlFor="trow" className='td-status paid'>paid</label>
            </td>
        </tr>

        <tr>
            <td>trow</td>
            <td>trow</td>
            <td>trow</td>
            <td>trow</td>
            <td>trow</td>
            <td>trow</td>
            <td>
                <label htmlFor="trow" className='td-status pending'>pending</label>
            </td>
        </tr>

        <tr>
            <td>trow</td>
            <td>trow</td>
            <td>trow</td>
            <td>trow</td>
            <td>trow</td>
            <td>trow</td>
            <td>
                <label htmlFor="trow" className='td-status paid'>paid</label>
            </td>
        </tr>


        <tr>
            <td>trow</td>
            <td>trow</td>
            <td>trow</td>
            <td>trow</td>
            <td>trow</td>
            <td>trow</td>
            <td>
                <label htmlFor="trow" className='td-status overdue'>overdue</label>
            </td>        
            </tr>

    </tbody>    
</table>
</div>


        </main>
        </>
    )
}