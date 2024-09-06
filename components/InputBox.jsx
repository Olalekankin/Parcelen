import { View, Text } from 'react-native'
import React from 'react'
import { icons } from '../constants'

const InputBox = ({containerStyle, require, title}) => {
  return (
    <View className={`${containerStyle}`}>
      <View className='flex-row items-start space-x-1'>
        <Text className='text-grey65 font-cmedium text-sm'>{title}</Text>
        <Text
          className={`text-red-500 font-cbold text-xs align-super ${
            require ? 'inline' : 'hidden'
          }`}
        >
          *
        </Text>
      </View>
      <View className='relative mt-1.5'>
        <TextInput
          className='px-4 py-2 rounded-lg text-grey34 bg-greyF8 focus:border focus:border-primary'
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7B7B8B'
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          {...props}
        />
        {title !== 'Password' &&
          validate ===
            true(
              <View className={`absolute right-4 top-1/2 -translate-y-1/2`}>
                <MaterialIcons name='check-circle' size={20} color='green' />
              </View>
            )}

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className='w-6 h-6'
              resizeMode='contain'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default InputBox
