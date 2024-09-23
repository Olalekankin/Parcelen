import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { router, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import {InputBox, PhoneInputComponent} from '../../components'


const SignUp = () => {
  const router = useRouter()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  

  const handlePhoneChange = (text) => {
    setPhoneNumber(text)
    
  }

  // This function will handle changes to name input
  const handleNameChange = (text) => {
    setName(text)
  }

  return (
    <>
      <SafeAreaView className='min-h-screen bg-white'>
        <ScrollView className=''>
          <View className='relative'>
            <View className=''>
              <View className='bg-primary px-4 py-4 fixed spa'>
                <TouchableOpacity className='' onPress={() => router.back()}>
                  <MaterialIcons
                    name='arrow-back-ios-new'
                    size={14}
                    color='white'
                  />
                </TouchableOpacity>

                <Text className='text-white mt-4 text-2xl font-cbold'>
                  Create account
                </Text>
                <Text className='text-white mt-2 text-sm font-cregular'>
                  Welcome aboard! Fill in your details below to create your
                  personal account
                </Text>
              </View>

              <View className='px-4 py-8'>
                <View className=' text-white flex flex-row justify-between items-center'>
                  <View>
                    <Text className='text-lg text-primary font-cbold'>
                      Profile
                    </Text>
                  </View>

                  <View className='flex flex-row items-center space-x-1'>
                    <Text className='text-sm text-grey34 font-cregular'>
                      Already have an account?
                    </Text>
                    <TouchableOpacity
                      onPress={() => router.push('auth/sign-in')}
                    >
                      <Text className='text-sm text-blueCB font-cmedium'>
                        Log in
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View className='mt-6'>
                  <InputBox
                    containerStyle='w-full'
                    require={true}
                    title='First name'
                    value={firstName}
                    handleChangeText={handleNameChange}
                    placeholder='Enter your first name'
                  />
                </View>
                <View className='mt-6'>
                  <InputBox
                    containerStyle='w-full'
                    require={true}
                    title='Last name'
                    value={lastName}
                    handleChangeText={handleNameChange}
                    placeholder='Enter your last name'
                  />
                </View>
                <View className='mt-6'>
                  <PhoneInputComponent
                    phoneNumber={phoneNumber}
                    onPhoneChange={handlePhoneChange}
                    title='Phone Number'
                  />
                </View>
                <View className='mt-8  w-full flex-row flex-wrap text-xs items-center text-center space-x-1 justify-center'>
                  <Text className='text-primary font-cregular'>
                    By creating an account, you agree to our
                  </Text>
                  <TouchableWithoutFeedback
                    className=''
                    onPress={() => router.push('pages/privacy')}
                  >
                    <Text className='text-blueCB font-cregular'>
                      Privacy policy
                    </Text>
                  </TouchableWithoutFeedback>
                  <Text className='font-cregular'>and</Text>
                  <TouchableWithoutFeedback className=''>
                    <Text className='text-blueCB ml-1 font-cregular'>
                      Terms & conditions
                    </Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <View className='mt-5'>
                <TouchableOpacity className='bg-greye4 flex justify-center items-center py-4 w-full rounded-md'>
                  <Text className='text-white text-center font-cregular'>
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style='light' backgroundColor='#355' />
    </>
  )
}

export default SignUp
