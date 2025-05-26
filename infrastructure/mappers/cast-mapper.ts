import { Cast } from "../interfaces/cast"
import { MovieDBCast } from "../interfaces/moviedb-credits.response"

export class CastMapper {
  static fromMovieDBCastToEntity(cast: MovieDBCast): Cast {
    return {
      id: cast.id,
      name: cast.name,
      character: cast.character ?? "No character",
      avatar: cast.profile_path
        ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
        : "https://www.themoviedb.org/t/p/w500/placeholder.jpg"
    }
  }
}
