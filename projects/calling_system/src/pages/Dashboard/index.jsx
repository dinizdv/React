import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"
import Header from "../../components/Header"
import './dashboard.css'
import Title from '../../components/Title'
import { Link } from "react-router-dom"

export default function Dashboard(){
    // const { logout } = useContext(AuthContext)

    // async function handleLogout(){
    //     await logout()
    // }

    return(
        <div>
            <Header/>
            <div className="content">
                <Title name="Calling System">
                    <i class="fa-solid fa-comment-dots"></i>
                </Title>

            <>
            <div className="container-newCall">
                <Link to='newCall' className="newCall">
                    <i class="fa-solid fa-plus"></i>
                    New call
                </Link>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th scope="col">client</th>
                        <th scope="col">subject</th>
                        <th scope="col">status</th>
                        <th scope="col">registration</th>
                        <th scope="col">search/edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label='Client'>Amazon</td>
                        <td data-label='Subject'>Suport</td>
                        <td data-label='Status'>
                            <span className="badge">
                                Open
                            </span>
                        </td>
                        <td data-label='Registration'>15/02/2002</td>
                        <td data-label=''>
                            <button className='action' id='search'>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                            <button className='action' id='edit'>
                                <i class="fa-solid fa-pencil"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th scope="col">client</th>
                        <th scope="col">subject</th>
                        <th scope="col">status</th>
                        <th scope="col">registration</th>
                        <th scope="col">search/edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label='Client'>Amazon</td>
                        <td data-label='Subject'>Suport</td>
                        <td data-label='Status'>
                            <span className="badge">
                                Open
                            </span>
                        </td>
                        <td data-label='Registration'>15/02/2002</td>
                        <td data-label=''>
                            <button className='action' id='search'>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                            <button className='action' id='edit'>
                                <i class="fa-solid fa-pencil"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            </>
            {/* <button onClick={handleLogout}>Logout</button> */}
            </div>
        </div>
    )
}