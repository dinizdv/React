import {useEffect, useState} from 'react'
import './favorites.css'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'

function Favorites(){

    const [films, setFilms] = useState([])

    useEffect(() => {
        const myList = localStorage.getItem("@filmsFlix")
        setFilms(JSON.parse(myList) || [])
    }, [])

    function handleFilm(id){
        let filterFilms = films.filter((item) => {
            return(item.id != id) // return all movies (except current id movie)

        })
        setFilms(filterFilms)
        localStorage.setItem("@filmsFlix", JSON.stringify(filterFilms)) // array to string and placing in the localStorage
        toast.success("Film removed successfully.")
    }


    return(
        <div className="myFilms">
            <h1>My Favorites Films</h1>
            {films.length === 0 && <span>You do not have favorite films.</span>}
            {/* if you do not have any films in your favorites */}
        <ul>
            {films.map((item) => {
                return(
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <div>
                            <Link to={`/film/${item.id}`}>See details</Link>
                            <button onClick={() => handleFilm (item.id)}>Delete</button>
                        </div>
                    </li>
                )
            })}
        </ul>
        </div>
    )
}

export default Favorites