import { View, Text } from 'react-native'
import React, { useState, useRef } from 'react'
import PhoneInput from 'react-native-phone-number-input'

const PhoneInputComponent = ({ phoneNumber, onPhoneChange, title }) => {
  const [formattedValue, setFormattedValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [isValid, setIsValid] = useState(true)
  const phoneInputRef = useRef(null)

  const validatePhoneNumber = (text) => {
    const isValidPhone = text.length >= 10 && text.length <= 11
    setIsValid(isValidPhone)
    onPhoneChange(text, isValidPhone)
  }

  return (
    <View className=''>
      <View className='flex-row items-start space-x-1'>
        <Text className='text-grey65 font-cmedium text-sm'>{title}</Text>
        <Text
          className={`text-red-500 font-cbold text-xs align-super`}
        >
          *
        </Text>
      </View>
      <View className='relative mt-1 rounded-md p-2'>
        <PhoneInput
          ref={phoneInputRef}
          defaultCode='NG'
          layout='first'
          value={phoneNumber}
          onChangeText={validatePhoneNumber}
          onChangeFormattedText={(text) => setFormattedValue(text)}
          withShadow
          containerStyle={{
            backgroundColor: '#F2F5F8',
            padding: 1,
            width: '100%',
            borderColor: isFocused ? '#01427A' : isValid ? '#01427A' : 'red',
            borderWidth: 1,
            borderRadius: 6,
          }}
          textInputStyle={{
            color: '#343434',
          }}
          flagButtonStyle={{
            borderRightWidth: 1,
            borderRightColor: '#ccc',
          }}
          textInputProps={{
            placeholder: 'Enter phone number',
            maxLength: 11,
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
          }}
        />
      </View>
      {!isValid && (
        <Text style={{ color: 'red', marginTop: 5 }}>
          Phone number must be between 10 and 11 digits
        </Text>
      )}
    </View>
  )
}

export default PhoneInputComponent
