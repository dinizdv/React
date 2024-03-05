import {useEffect, useState} from 'react'
import './favorites.css'
import { Link } from 'react-router-dom'

function Favorites(){

    const [films, setFilms] = useState([])

    useEffect(() => {
        const myList = localStorage.getItem("@filmsFlix")
        setFilms(JSON.parse(myList) || [])
    }, [])

    return(
        <div className="myFilms">
            <h1>Favorites Films</h1>
        
        <ul>
            {films.map((item) => {
                return(
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <div>
                            <Link to={`/film/${item.id}`}>See details</Link>
                            <button>Delete</button>
                        </div>
                    </li>
                )
            })}
        </ul>
        </div>
    )
}

export default Favorites