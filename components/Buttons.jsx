import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Buttons = ({handlePress, title, containerStyle, textStyle}) => {
  return (
    <View
      className={`w-full rounded-md ${containerStyle}`}
    >
      <TouchableOpacity
        onPress={handlePress}
        className='w-full flex justify-center py-4'
      >
        <Text className={`text-center font-cmedium ${textStyle}`}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Buttons