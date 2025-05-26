import { nowPlaying } from "@/core/actions/movies/now-playing.action"
import { popularMovies } from "@/core/actions/movies/popular.action"
import { topRatedMovies } from "@/core/actions/movies/top-rated.action copy"
import { upComing } from "@/core/actions/movies/upcoming.action"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlaying,
    staleTime: 1000 * 60 * 60 * 24
  })

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMovies,
    staleTime: 1000 * 60 * 60 * 24
  })

  const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "topRated"],
    queryFn: ({ pageParam }) => {
      return topRatedMovies({ page: pageParam })
    },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (_, pages) => pages.length + 1
  })

  const upComingQuery = useQuery({
    queryKey: ["movies", "upComing"],
    queryFn: upComing,
    staleTime: 1000 * 60 * 60 * 24
  })

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upComingQuery
  }
}
