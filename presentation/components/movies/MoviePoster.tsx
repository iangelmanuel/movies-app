import { Movie } from "@/infrastructure/interfaces/movie-interface"
import { router } from "expo-router"
import { Image, Pressable } from "react-native"

interface Props {
  id: Movie["id"]
  poster: Movie["poster"]
  smallPoster?: boolean
  className?: string
}

const MoviePoster = ({
  id,
  poster,
  smallPoster = false,
  className = ""
}: Props) => {
  return (
    <Pressable
      onPress={() => router.push(`/movie/${id}`)}
      className={`active:opacity-90 px-2 ${className}`}
    >
      <Image
        source={{ uri: poster }}
        className="shadow-lg rounded-2xl w-full h-full"
        resizeMode="cover"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250
        }}
      />
    </Pressable>
  )
}

export default MoviePoster
