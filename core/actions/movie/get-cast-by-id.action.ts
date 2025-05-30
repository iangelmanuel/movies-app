import { movieApi } from "@/core/api/movie-api"
import { MovieDBCreditsResponse } from "@/infrastructure/interfaces/moviedb-credits.response"
import { CastMapper } from "@/infrastructure/mappers/cast-mapper"

export const getCastById = async (movieId: number) => {
  try {
    const { data } = await movieApi.get<MovieDBCreditsResponse>(
      `/${movieId}/credits`
    )

    return data.cast.map(CastMapper.fromMovieDBCastToEntity)
  } catch (error) {
    console.error("Error fetching movie cast:", error)
    throw new Error("Failed to fetch movie cast")
  }
}
