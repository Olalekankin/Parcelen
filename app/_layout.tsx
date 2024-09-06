import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { useFonts } from 'expo-font'
const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'Cabinet-Black': require('../assets/fonts/Cabinet-Black.otf'),
    'Cabinet-Bold': require('../assets/fonts/Cabinet-Bold.otf'),
    'Cabinet-Medium': require('../assets/fonts/Cabinet-Medium.otf'),
    'Cabinet-Regular': require('../assets/fonts/Cabinet-Regular.otf'),
    'Cabinet-Thin': require('../assets/fonts/Cabinet-Thin.otf'),
  })

  useEffect(() => {
    if (error) throw error

    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, error])

  if (!fontsLoaded) {
    return null
  }

  if (!fontsLoaded && !error) {
    return null
  }
  return (
    <Stack>
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      <Stack.Screen name='(others)' options={{ headerShown: false }} />
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='index' options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout
