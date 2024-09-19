import { useState } from 'react'
import md5 from 'md5'
import Characters from '../Characters'
import Comics from '../Comics'
import '../../styles/search.scss'
import bg from '../../assets/bg.jpg'

export default function Search(){
    const [characterName, setCharacterName] = useState('')
    const [characterData, setCharacterData] = useState(null)
    const [comicData, setComicData] = useState(null)
    const [viewComics, setViewComics] = useState(false)

    // .env file
    const publicKey = import.meta.env.VITE_PUBLIC_KEY
    const privateKey = import.meta.env.VITE_PRIVATE_KEY

    const handleSubmit = (e) => {
        e.preventDefault()

        getCharacterData()
    }

    const getCharacterData = () => {
        // if the api does not work, we will not be stuck with the searching
        setCharacterData(null)
        setCharacterData(null)

        const timeStamp = new Date().getTime()
        const hash = generateHash(timeStamp)

        const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&hash=${hash}&ts=${timeStamp}&nameStartsWith=${characterName}&limit=100`
    
        fetch(url).then(response => response.json()).then(
            result => {
                setCharacterData(result.data)
                console.log(result)
                setViewComics(true)
            }
        ).catch((error) => {
            console.log(`There was an error: ${error}`)
        })
    }

    const getComicData = (characterId) => {
        window.scrollTo({ top: 0, left: 0 })
    
        const timeStamp = new Date().getTime()
        const hash = generateHash(timeStamp)

        const url = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?apikey=${publicKey}&hash=${hash}&ts=${timeStamp}`

        fetch(url).then(response => response.json())
        .then(results => {
            setComicData(results.data)
            setViewComics(true)
            console.log(results)
        })
        .catch((error) => {
            console.log(`There was an error: ${error}`)
        })

    }

    const generateHash = (timeStamp) => {
        return md5(timeStamp + privateKey + publicKey)
    }

    const handleChange = (e) => {
        setCharacterName(e.target.value)
    }
    
    const handleReset = () => {
        setCharacterData(null)
        setComicData(null)
        setCharacterName('')
    }

    return(
        <div className='container'>
            <div className="container-bg-img">
            <img src={bg} alt="" />
            </div>
            
            <form action="" className="search-form" onSubmit={handleSubmit}>
                <h1>Marvel API</h1>
                <input type="text" placeholder="Enter character name" onChange={handleChange}/>
            <div className="btns-form">
                <button type='submit' className="btn-submit" onClick={getCharacterData}>Get character data</button>
                <button type="submit" className="btn-reset" onClick={handleReset}>Reset</button>
            </div>
            </form>

                {!comicData && characterData && characterData.results[0] && (
                    <>
                    <Characters data={characterData.results} onClick={getComicData} />
                    </>
                )}

                {comicData && comicData.results[0] && <Comics data={comicData.results} /> }

        </div>
    )
}