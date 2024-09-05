import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'

const OtherLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name='privacy' options={{ headerShown: false }} />
        <Stack.Screen name='terms' options={{ headerShown: false }} />
      </Stack>
      <StatusBar style='light' backgroundColor='#355' />
    </>
  )
}

export default OtherLayout