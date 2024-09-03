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
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales',
            data: [18, 15, 24, 26, 19, 26],
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
            
{/* graphs */}
<section className="container-graph">
<div className="pie-chart-container">
<Pie data={chartData} options={chartOptions} id='pie-graph' />
</div>

<div className="barra-chart-container">
<Line
  data={lineChartData}
  options={lineChartOptions}
/>


</div>
</section>
        </main>
        </>
    )
}