import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import api from '../../services/api'
import './film-info.css'
import {toast} from 'react-toastify'

function Film () {
    const {id} = useParams() // get the film id and make it available
    const navigate = useNavigate()
    const [film, setFilm] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        async function loadFilm(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "376586d56c257fd50e1c2b37bb7af55e", // prove to the server that you have permission to access the requested resources 
                }   
            })

            .then ((response) => {
                setFilm(response.data) // update the film with the dates
                setLoading(false) 
            })
            .catch(() => {
                console.log("Does not exist") // the film with this id does not exist
                navigate("/", {replace: true}) // redirect home without having to click a link or button
                return
            })
    } 
    
        loadFilm()
        
        return () => {
            console.log("Disassembled component") // when you come home
        }

    }, [navigate, id])

    function saveFilm(){
        const myList = localStorage.getItem("@filmsFlix") // @filmsFlix -> localStorage key

        let savedFilms = JSON.parse(myList) || [] // JSON to string (list) or empty array (undefined)

        const hasFilms = savedFilms.some((savedFilm) => savedFilm.id === film.id) // current film (id) === 

        if (hasFilms){
            toast.warn("This film is already on the 'My Favorites Films'.")
            return
        }

        savedFilms.push(film)
        localStorage.setItem("@filmsFlix", JSON.stringify(savedFilms))
        toast.success("Saved successfully to 'My Favorites Films'.")
    }
    
    // loading only works while the films do not appear
    if (loading){
        return(
            <div className="film-info">
                <h1>Loading films...</h1>
            </div>
        )
    }

    return(
        <div className="film-info">
            <h1>{film.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`} alt={film.title} />

            <h3>Synopsis</h3>
            <span>{film.overview}</span>
            <span className="voteAverage">Vote average: {film.vote_average.toFixed(2)} / 10</span> 

            <div className="area-buttons">
                <button id="buttonSave" onClick={saveFilm}>Save</button>
                {/* search in youtube */}
                <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${film.title} Trailer`}>Trailer</a>
            </div>
        </div>
    )
}

export default Film