import MovieList from "@/components/movie-list"
import { Input } from "@/components/ui/input"
import tmdb from "@/services/tmdb"
import { Movie } from "@/types"
import { useQuery } from "@tanstack/react-query"
import debounce from "lodash.debounce"
import { ChangeEvent, useCallback, useState } from "react"

export default function HomePage() {
  const [search, setSearch] = useState("")

  // Função de debounce para evitar múltiplas requisições
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      setSearch(query)
    }, 700),
    []
  )

  // Atualiza o estado conforme o usuário digita
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    debouncedSearch(event.target.value)
  }

  const {
    data: moviesData = [],
    isLoading,
    isError
  } = useQuery<Movie[]>({
    queryKey: ["search", search],
    queryFn: async () => {
      const response = await tmdb.get(`/search/movie`, {
        params: { query: search }
      })
      return response.data.results
    },
    enabled: !!search // Só executa a busca se `search` não estiver vazio
  })

  return (
    <div>
      <section className="mx-auto flex flex-col items-center gap-10">
        <h2 className="animate-fade-in max-w-screen-md bg-gradient-to-r from-blue-400 to-violet-900 bg-clip-text pb-4 text-center text-4xl font-semibold text-transparent opacity-0 sm:text-5xl">
          moviesNook. Discover and save your favorite movies!
        </h2>

        <Input
          placeholder="Search for movies"
          className="max-w-screen-sm"
          onChange={onChange}
        />
      </section>

      <section>
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error!</p>
        ) : moviesData.length === 0 ? (
          <p>No movies found</p>
        ) : (
          <MovieList data={moviesData} />
        )}
      </section>
    </div>
  )
}
