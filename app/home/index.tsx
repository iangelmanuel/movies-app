import MainSlideShow from "@/presentation/components/movies/MainSlideShow"
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList"
import { useMovies } from "@/presentation/hooks/useMovies"
import { ActivityIndicator, ScrollView, Text, View } from "react-native"
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
    <ScrollView>
      <View
        className="mt-2 pb-10"
        style={{ paddingTop: safeArea.top }}
      >
        <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>
        {/* Carousel */}
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />

        {/* Popular */}
        <MovieHorizontalList
          title="Populares"
          movies={popularQuery.data ?? []}
          className="mb-5"
        />

        <MovieHorizontalList
          title="Más Valorados"
          movies={topRatedQuery.data?.pages.flat() ?? []}
          className="mb-5"
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        <MovieHorizontalList
          title="Próximamente"
          movies={upComingQuery.data ?? []}
          className="mb-5"
        />
      </View>
    </ScrollView>
  )
}
