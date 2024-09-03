import './dashboard.css'
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Chart } from 'react-chartjs-2';

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
        labels: ['series A', 'series B', 'series C'],
        datasets: [{
          data: [10, 15, 20],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
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
                    <li className='li-sidebar'><a href="">resources</a></li>
                    <li className='li-sidebar'><a href=""><i class="fa-solid fa-table-cells-large"></i>dashboard</a></li>
                    <li className='li-sidebar'><a href=""><i class="fa-solid fa-cube"></i>products</a></li>
                    <li className='li-sidebar'><a href=""><i class="fa-solid fa-store"></i>store</a></li>
                    <li className='li-sidebar'><a href=""><i class="fa-regular fa-comment-dots"></i>messages</a></li>
                    <li className='li-sidebar'><a href=""><i class="fa-solid fa-chart-line"></i>statistics</a></li>
                    <li className='li-sidebar'><a href=""><i class="fa-solid fa-file-invoice-dollar"></i>invoices</a></li>
                    <li className='li-sidebar'><a href=""><i class="fa-solid fa-list-check"></i>to-do list</a></li>
                    <li className='li-sidebar'><a href=""><i class="fa-solid fa-hand-holding-dollar"></i>finances</a></li>
                    </ul>
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
    <thead>
        <tr>
            <th>title</th>
            <th>title</th>
            <th>title</th>
            <th>title</th>
            <th>title</th>
            <th>title</th>
            <th>title</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
        </tr>

        <tr>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
        </tr>

        <tr>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
        </tr>


        <tr>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
        </tr>

        <tr>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
            <th>trow</th>
        </tr>

    </tbody>    
</table>
</div>


        </main>
        </>
    )
}