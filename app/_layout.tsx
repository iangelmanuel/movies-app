import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Stack } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import "./global.css"

export default function RootLayout() {
  const queryClient = new QueryClient()

  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false
          }}
        />
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}
