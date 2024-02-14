// https://api.themoviedb.org/3/ 
// /movie/now_playing?api_key=376586d56c257fd50e1c2b37bb7af55e

// npm install axios -> fot HTTP requests

import axios from 'axios'

const api = axios.create({ // create a new instance
    baseURL: 'https://api.themoviedb.org/3/' 
})

export default api