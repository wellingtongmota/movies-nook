import axios from "axios"

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMBD_API_KEY}`
  }
})

export default tmdb
