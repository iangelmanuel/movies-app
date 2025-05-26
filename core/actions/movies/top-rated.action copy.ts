import { movieApi } from "@/core/api/movie-api"
import type { MoviesDBResponse } from "@/infrastructure/interfaces/moviedb-response"
import { MovieMapper } from "@/infrastructure/mappers/movie-mapper"

interface Options {
  page?: number
  limit?: number
}

export const topRatedMovies = async ({ page = 1, limit = 10 }: Options) => {
  try {
    const { data } = await movieApi.get<MoviesDBResponse>("/top_rated", {
      params: {
        page,
        limit
      }
    })

    const movies = data.results.map((movie) =>
      MovieMapper.fromTheMovieDBToMovie(movie)
    )

    return movies
  } catch (error) {
    console.log(error)
    throw "Cannot load now playing movies"
  }
}
