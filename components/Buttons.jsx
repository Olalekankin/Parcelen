import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Buttons = ({handlePress, title, containerStyle, textStyle}) => {
  return (
    <View className={`flex flex-row justify-center items-center py-4 rounded-md ${containerStyle}`}>
      <TouchableOpacity
        onPress={handlePress}
      >
        <Text className={`text-center font-cmedium ${textStyle}`}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Buttons