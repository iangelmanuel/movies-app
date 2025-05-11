import MainSlideShow from "@/presentation/hooks/components/movies/MainSlideShow"
import MovieHorizontalList from "@/presentation/hooks/components/movies/MovieHorizontalList"
import { useMovies } from "@/presentation/hooks/useMovies"
import { ActivityIndicator, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function HomaScreen() {
  const { nowPlayingQuery, popularQuery, topRatedQuery, upComingQuery } =
    useMovies()
  const safeArea = useSafeAreaInsets()

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="flex justify-center items-center flex-1">
        <ActivityIndicator
          color="purple"
          size={40}
        />
      </View>
    )
  }

  return (
    <View
      className="mt-2"
      style={{ paddingTop: safeArea.top }}
    >
      <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>
      {/* Carousel */}
      <MainSlideShow movies={nowPlayingQuery.data ?? []} />

      {/* Popular */}
      <MovieHorizontalList
        title="Populares"
        movies={popularQuery.data ?? []}
      />

      <MovieHorizontalList
        title="Más Valorados"
        movies={topRatedQuery.data ?? []}
      />

      <MovieHorizontalList
        title="Próximamente"
        movies={upComingQuery.data ?? []}
      />
    </View>
  )
}
