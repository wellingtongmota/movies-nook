import { Input } from "@/components/ui/input"

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto flex flex-col items-center gap-10">
        <h2 className="animate-fade-in max-w-screen-md bg-gradient-to-r from-blue-400 to-violet-900 bg-clip-text pb-4 text-center text-4xl font-semibold text-transparent opacity-0 sm:text-5xl">
          moviesNook. Discover and save your favorite movies!
        </h2>

        <Input placeholder="Search for movies" className="max-w-screen-sm" />
      </section>
    </div>
  )
}
