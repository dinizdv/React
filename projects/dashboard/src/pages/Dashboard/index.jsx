import './dashboard.css'
import ProfilePhoto from '../../assets/profilePhoto.png'
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
            borderColor: '#4B59E0',
            backgroundColor: '#4B59E0'
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
                    <li className='li-sidebar'><i class="fa-solid fa-coins"></i><a href="">Finance Tech</a></li>
                    <ul className="ul-sidebar-links">
                    <li className='li-sidebar subtitle-sidebar'><a href="">resources</a></li>
                    <li className='li-sidebar link-sidebar'><i class="fa-solid fa-table-cells-large"></i><a href="">dashboard</a></li>
                    <li className='li-sidebar link-sidebar'><i class="fa-solid fa-cube"></i><a href="">products</a></li>
                    <li className='li-sidebar link-sidebar'><i class="fa-solid fa-store"></i><a href="">store</a></li>
                    <li className='li-sidebar link-sidebar'><i class="fa-regular fa-comment-dots"></i><a href="">messages</a></li>
                    <li className='li-sidebar link-sidebar'><i class="fa-solid fa-chart-line"></i><a href="">statistics</a></li>
                    <li className='li-sidebar link-sidebar'><i class="fa-solid fa-file-invoice-dollar"></i><a href="">invoices</a></li>
                    <li className='li-sidebar link-sidebar'><i class="fa-solid fa-list-check"></i><a href="">to-do list</a></li>
                    <li className='li-sidebar link-sidebar'><i class="fa-solid fa-hand-holding-dollar"></i><a href="">finances</a></li>
                    </ul>

                    <ul className="ul-sidebar-links">
                    <li className='li-sidebar subtitle-sidebar'><a href="">help & support</a></li>
                    <li className='li-sidebar link-sidebar'><i class="fa-solid fa-triangle-exclamation"></i><a href="">help & center</a></li>
                    <li className='li-sidebar link-sidebar'><i class="fa-solid fa-gear"></i><a href="">settings</a></li>
                    </ul>

<ul className="ul-logout">
<li className='li-sidebar link-sidebar'><i class="fa-solid fa-arrow-right-from-bracket" id='link-logout'></i><a href="">log out</a></li>
</ul>

                </ul>
            </nav>
        </div> {/* sidebar */}

        <main>
            <div className="top">
                <p className='welcome'>welcome back, diniz<i class="fa-solid fa-hand"></i></p>
                <div className="profile-top">
                    {/* <div className="search"><i class="fa-solid fa-magnifying-glass"></i></div> */}
                    <div class="search-container">
    <form>
    <button type="submit"><i class="fa fa-search"></i></button>
      <input type="text" placeholder="Search anything" name="search" />
    </form>
  </div>        
                </div>
                <div className="contact-top">
                    
                <i class="fa-regular fa-comment-dots icon-top"></i>
                
                <i class="fa-regular fa-bell icon-top"></i>
                
                <div className="container-profile">
                <div className="radius-profile">
                    <img src={ProfilePhoto} alt="Photo profile" />
                </div>

                <label htmlFor="">Bruno Diniz</label>

                </div>
                <i class="fa-solid fa-caret-down"></i>
                </div>
            </div>
        

        
            <div className="container-cards">
                <div className="card">
                    <div className="border-card">
                    <h2>Customers</h2>
                    <span>1612</span>
                    </div>
                    <p className='p-card'><label htmlFor="" className="update"><i class="fa-solid fa-arrow-up"></i>
+4,57%</label>since last week</p>
                </div>

                <div className="card">
                    <div className="border-card">
                    <h2>Revenue</h2>
                    <span>$3.175</span>
                    </div>
                    <p className='p-card'><label htmlFor="" className="fall"><i class="fa-solid fa-arrow-down"></i>
-0,21%</label>since last week</p>
                </div>

                <div className="card">
                    <div className="border-card">
                    <h2>Profit</h2>
                    <span>58%</span>
                    </div>
                    <p className='p-card'><label htmlFor="" className="fall"><i class="fa-solid fa-arrow-down"></i>
-0,33%</label>since last week</p>
                </div>

                <div className="card">
                    <div className="border-card">
                    <h2>Invoices</h2>
                    <span>1.351</span>
                    </div>
                    <p className='p-card'><label htmlFor="" className="update"><i class="fa-solid fa-arrow-up"></i>
+14,36%</label>since last week</p>
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
        <td>2</td>
            <td>#062499</td>
            <td>Bill Gates</td>
            <td>1xDistro Backpack</td>
            <td>04/09/2024</td>
            <td>$144</td>            <td>
                <label htmlFor="trow" className='td-status pending'>pending</label>
            </td>
        </tr>

        <tr>
        <td>3</td>
            <td>#072499</td>
            <td>Jeff Bezos</td>
            <td>1xNew Backpack</td>
            <td>05/09/2024</td>
            <td>$121</td>            <td>
                <label htmlFor="trow" className='td-status paid'>paid</label>
            </td>
        </tr>


        <tr>
        <td>4</td>
            <td>#082499</td>
            <td>Warren Buffet</td>
            <td>2xBlack Backpack</td>
            <td>06/09/2024</td>
            <td>$202</td>            <td>
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