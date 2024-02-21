import { useEffect, useState } from "react"
import api from '../../services/api'
import {Link} from 'react-router-dom'
import './home.css'

function Home () {
    // useState -> re-renders the functional component
    const [films, setFilms] = useState([]) // [] -> initial value of the films (this will be changed with setFilmes)
    const [loading, setLoading] = useState(true) // true => initial state

    useEffect(() => {
        // useEffect -> side effects
        async function loadFilms(){ // async -> search for external resource
            const response = await api.get("/movie/now_playing", {
                // await -> the response must be available before
                params: {
                    api_key: "376586d56c257fd50e1c2b37bb7af55e", // prove to the server that you have permission to access the requested resources 
                    page: 1,
                }
            })

            setFilms(response.data.results.slice(0,10)) // 10 first films
            // updating the state of the films
            setLoading(false) //quick message before loading movies
        }

        loadFilms() // calling the async function

    }, []) // [] -> the effect will only run once


    if (loading){
        return(
            <div className="loading">
                <h1>Loading films...</h1>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="films-list">
                {films.map((film) => { // for each film in films (10)
                    return(
                        <article key={film.id}> 
                            <h1>{film.title}</h1>
                            <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title}/> {/* concatenation */}
                            <Link to={`/film/${film.id}`}>Access</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home