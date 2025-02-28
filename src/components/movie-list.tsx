import {
  MovieCard,
  MovieCardImage,
  MovieMarcked
} from "@/components/movie-card"
import { WatchlistContext } from "@/context/watchlist-provider"
import { Movie } from "@/types"
import { Star } from "lucide-react"
import { useContext } from "react"

type MovieListProps = {
  data: Movie[]
}

export default function MovieList({ data: moviesData }: MovieListProps) {
  const { movies, addMovie, removeMovie } = useContext(WatchlistContext)

  return (
    <div className="mx-auto grid w-full animate-fade-in gap-4 pt-4 opacity-0">
      {moviesData.map((movie) => {
        const isBookmarked = movies.some((m) => m.id === movie.id)

        return (
          <MovieCard className="flex items-center border" key={movie.id}>
            <div className="max-w-24 md:max-w-32 2xl:max-w-40">
              <MovieCardImage
                posterPath={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://placehold.co/500x750?text=No+image"
                }
                alt={movie.title}
                voteAverage={movie.vote_average}
              />
            </div>

            <div className="grid h-full w-full grid-rows-[auto_1fr_auto] gap-2 p-2 md:p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-xl font-bold">{movie.title}</h3>
                  <p className="text-muted-foreground">
                    {new Date(movie.release_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit"
                    })}
                  </p>
                </div>
                <MovieMarcked
                  isBookmarked={isBookmarked}
                  onClick={
                    isBookmarked
                      ? () => removeMovie(movie.id)
                      : () => addMovie(movie)
                  }
                />
              </div>
              <p className="line-clamp-3 max-w-screen-md overflow-clip text-sm text-muted-foreground md:text-lg">
                {movie.overview}
              </p>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                {movie.vote_average.toFixed(1)}
              </div>
            </div>
          </MovieCard>
        )
      })}
    </div>
  )
}
