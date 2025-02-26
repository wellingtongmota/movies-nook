import { Movie } from "@/types"
import { createContext, ReactNode, useState } from "react"

type WatchlistContextType = {
  movies: Movie[]
  addMovie: (movie: Movie) => void
  removeMovie: (id: number) => void
}

const initialState: WatchlistContextType = {
  movies: [],
  addMovie: () => {},
  removeMovie: () => {}
}

export const WatchlistContext =
  createContext<WatchlistContextType>(initialState)

export const WatchlistProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>([])

  const addMovie = (movie: Movie) => {
    if (!movies.some((m) => m.id === movie.id)) {
      setMovies([movie, ...movies])
    }
  }

  const removeMovie = (id: number) => {
    setMovies(movies.filter((movie) => movie.id !== id))
  }

  return (
    <WatchlistContext.Provider value={{ movies, addMovie, removeMovie }}>
      {children}
    </WatchlistContext.Provider>
  )
}
