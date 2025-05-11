import { Movie } from "@/infrastructure/interfaces/movie-interface"
import { FlatList, Text, View } from "react-native"
import MoviePoster from "./MoviePoster"

interface Props {
  title?: Movie["title"]
  movies: Movie[]
}

const MovieHorizontalList = ({ title, movies }: Props) => {
  return (
    <View>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: { id, poster } }) => (
          <MoviePoster
            id={id}
            poster={poster}
            smallPoster
          />
        )}
      />
    </View>
  )
}

export default MovieHorizontalList
