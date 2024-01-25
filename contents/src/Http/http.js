import React, {useEffect, useState} from 'react'
import './style.css'
// https://sujeitoprogramador.com/rn-api/?api=posts

// http requisition


function App(){
    const [nutri, setNutri] = useState([]) // nutri -> state; setNutri -> update the state ; [] array starts empty

    // useEffect -> load data from the API once the component is mounted
    useEffect(() => {
        function loadApi(){
            let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
            fetch (url) // fetch -> send GET request to API URL
            .then((r) => r.json()) // convert the request response to JSON -> the body to object js
            .then((json) => { // all API content in JSON
                console.log(json) // verify
                setNutri(json) // passing all JSON content to the setNutri state
            })
        }

        loadApi() // call the function once the component is mounted
    }, []) // [] -> when mounted
    
    return(
        <div className="container">
            <header>
                <p>React Nutri</p>
            </header>

            {nutri.map((item) => {
                return(
                    <article key={item.id} className="posts"> {/* key */}
                        <h2 className="title">{item.titulo}</h2>
                        <img src={item.capa} className="cover" alt="Capa do título"/>
                        <p className="subtitle">{item.subtitulo}</p>
                        <a className="btn">Acessar</a>
                        <div class="line"></div>
                    </article>
                )
            })}
        </div>
    )
}

export default App