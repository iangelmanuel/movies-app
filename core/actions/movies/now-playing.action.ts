import { movieApi } from "@/core/api/movie-api"
import type { MoviesDBResponse } from "@/infrastructure/interfaces/moviedb-response"
import { MovieMapper } from "@/infrastructure/mappers/movie-mapper"

export const nowPlaying = async () => {
  try {
    const { data } = await movieApi.get<MoviesDBResponse>("/now_playing")

    const movies = data.results.map((movie) =>
      MovieMapper.fromTheMovieDBToMovie(movie)
    )

    return movies
  } catch (error) {
    console.log(error)
    throw "Cannot load now playing movies"
  }
}
