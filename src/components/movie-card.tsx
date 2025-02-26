import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Bookmark } from "lucide-react"

type GenericProps<T = any> = {
  children?: React.ReactNode
  className?: string
} & T

export function MovieCard({ children, className }: GenericProps) {
  return <div className={cn(["relative", className])}>{children}</div>
}

type MovieCardImageProps = {
  posterPath: string | null
  alt: string
  voteAverage: number
}

export function MovieCardImage({
  className,
  posterPath,
  alt,
  voteAverage
}: GenericProps<MovieCardImageProps>) {
  return (
    <div className={cn(["relative", className])}>
      <img
        src={
          posterPath
            ? `https://image.tmdb.org/t/p/w500${posterPath}`
            : "/no_image_500x750.svg"
        }
        alt={alt}
        className="aspect-[2/3] w-full object-cover object-center"
      />

      {/* Nota do filme */}
      <span className="absolute bottom-1 right-1 rounded bg-black/70 px-1 py-0.5 text-xs font-bold text-white">
        {voteAverage.toFixed(1)}
      </span>
    </div>
  )
}

type MovieMarckedProps = React.HTMLAttributes<HTMLButtonElement> & {
  className?: string
  isBookmarked: boolean
}

export function MovieMarcked({
  className,
  isBookmarked,
  ...props
}: MovieMarckedProps) {
  return (
    <Button
      size="icon"
      variant="link"
      className={cn(["h-6 w-6", className])}
      {...props}
    >
      {isBookmarked ? <Bookmark className="text-green-500" /> : <Bookmark />}
    </Button>
  )
}
