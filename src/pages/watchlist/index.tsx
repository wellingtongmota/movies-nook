import MovieList from "@/components/movie-list"
import { WatchlistContext } from "@/context/watchlist-provider"
import { useContext } from "react"

export default function WatchlistPage() {
  const { movies } = useContext(WatchlistContext)

  return (
    <div>
      <MovieList data={movies} />
    </div>
  )
}
