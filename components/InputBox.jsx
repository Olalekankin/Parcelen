import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const InputBox = ({
  containerStyle,
  require,
  title,
  value,
  handleChangeText,
  placeholder,
}) => {
  const [validated, setValidated] = useState(true)
  const [error, setError] = useState('')

  const validateInput = (inputValue) => {
    if (title === 'Email') {
      // Simple email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(inputValue)) {
        setValidated(false)
        setError('Invalid email')
      } else {
        setValidated(true)
        setError('')
      }
    } else if (title === 'Name') {
      // Check if name contains digits
      const nameHasDigits = /\d/
      if (nameHasDigits.test(inputValue)) {
        setValidated(false)
        setError('Invalid name')
      } else {
        setValidated(true)
        setError('')
      }
    }
  }

  return (
    <View className={`${containerStyle}`}>
      <View className='flex flex-row justify-between w-full'>
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

        {/* Only show error if validation failed */}
        {!validated && (
          <View>
            <Text className='text-red-500 text-sm font-cregular'>{error}</Text>
          </View>
        )}
      </View>

      <View className='relative mt-1 w-full flex flex-row items-center justify-between space-x-3'>
        <TextInput
          className={`px-4 py-3 flex-grow text-grey34 rounded-md w-full  bg-greyF8 focus:border focus:border-primary ${
            validated
              ? 'focus:border focus:border-green-400 '
              : 'border border-red-500'
          }`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7B7B8B'
          onChangeText={(text) => handleChangeText(text)}
          onBlur={() => validateInput(value)}
        />

        {/* Show check icon if validated */}
        <View className={`${validated ? 'inline' : 'hidden'} absolute right-2`}>
          <MaterialIcons name='check-circle' size={20} color='green' />
        </View>
      </View>
    </View>
  )
}

export default InputBox
