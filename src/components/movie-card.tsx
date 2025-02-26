import { Movie } from "@/types"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"

type MovieCardProps = {
  movie: Movie
  isBookmarked: boolean
  onClick?: () => void
  onBookmarkClick?: () => void
}

export function MovieCard({
  movie,
  isBookmarked,
  onClick,
  onBookmarkClick
}: MovieCardProps) {
  return (
    <div className="relative max-w-40 p-1">
      <div className="relative cursor-pointer" onClick={onClick}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/no_image_500x750.svg"
          }
          alt={movie.title}
          className="aspect-[2/3] w-full object-cover object-center"
        />

        {/* Nota do filme */}
        <span className="absolute bottom-1 right-1 rounded bg-black/70 px-1 py-0.5 text-xs font-bold text-white">
          {movie.vote_average.toFixed(1)}
        </span>
      </div>

      <div className="flex items-start justify-between gap-1">
        <h3 className="text-sm">{movie.title}</h3>

        <Button
          size="icon"
          variant="link"
          className="h-6 w-6"
          onClick={onBookmarkClick}
        >
          {isBookmarked ? (
            <Bookmark className="text-green-500" />
          ) : (
            <Bookmark />
          )}
        </Button>
      </div>
    </div>
  )
}
