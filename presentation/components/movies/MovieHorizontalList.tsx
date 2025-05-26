import { Movie } from "@/infrastructure/interfaces/movie-interface"
import { useEffect, useRef } from "react"
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View
} from "react-native"
import MoviePoster from "./MoviePoster"

interface Props {
  title?: Movie["title"]
  movies: Movie[]
  className?: string
  loadNextPage?: () => void
}

const MovieHorizontalList = ({
  title,
  movies,
  className,
  loadNextPage
}: Props) => {
  const isLoading = useRef(false)

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false
    }, 200)
  }, [movies])

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return

    const { contentOffset, layoutMeasurement, contentSize } = e.nativeEvent

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width

    if (!isEndReached) return

    isLoading.current = true

    console.log("Loading more movies...")
    loadNextPage && loadNextPage()
  }

  return (
    <View className={`${className}`}>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item: { id, poster } }) => (
          <MoviePoster
            id={id}
            poster={poster}
            smallPoster
          />
        )}
        onScroll={onScroll}
      />
    </View>
  )
}

export default MovieHorizontalList
