import MovieCast from "@/presentation/components/movie/MovieCast"
import MovieDescription from "@/presentation/components/movie/MovieDescription"
import MovieHeader from "@/presentation/components/movie/MovieHeader"
import { useMovie } from "@/presentation/hooks/useMovie"
import { useLocalSearchParams } from "expo-router"
import { ActivityIndicator, ScrollView, Text, View } from "react-native"

export default function MovieScreen() {
  const { id } = useLocalSearchParams()

  const { movieQuery, castQuery } = useMovie(Number(id))

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="mb-4">Loading...</Text>

        <ActivityIndicator
          color={"purple"}
          size={30}
        />
      </View>
    )
  }

  return (
    <ScrollView>
      <MovieHeader
        title={movieQuery.data.title}
        originalTitle={movieQuery.data.originalTitle}
        poster={movieQuery.data.poster}
      />

      <MovieDescription movie={movieQuery.data} />

      <MovieCast cast={castQuery.data ?? []} />
    </ScrollView>
  )
}
