import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { router, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const SignUp = () => {
  const router = useRouter()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  return (
    <>
      <SafeAreaView>
        <ScrollView className=''>
          <View className='bg-white'>
            <View className=''>
              <View className='bg-primary py-3.5 px-4  z-50'>
                <TouchableOpacity
                  className='py-2'
                  onPress={() => router.back()}
                >
                  <MaterialIcons
                    name='arrow-back-ios-new'
                    size={14}
                    color='white'
                  />
                </TouchableOpacity>
                <Text className='text-white mt-8 text-2xl font-cbold'>
                  Create account
                </Text>
                <Text className='text-white mt-2 text-sm font-cregular'>
                  Welcome aboard! Fill in your details below to create your
                  personal account
                </Text>
              </View>
              <View className='mt-6 px-4 h-3/4  z-10'>
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
                      <Text className='text-sm text-blueCB font-cmedium'>Log in</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View className='mt-6'>
                  <Text className='text-grey65'>First name</Text>
                  <View className='relative'>
                    <TextInput
                      placeholder='Enter your email'
                      value={firstName}
                      onChangeText={setFirstName}
                      className='px-4 py-3 rounded-lg text-grey34 mt-2 bg-greyF8 focus:border focus:border-primary'
                    />
                    <View className='absolute right-4 top-1/2 -translate-y-1/2 hidden'>
                      <MaterialIcons
                        name='check-circle'
                        size={20}
                        color='green'
                      />
                    </View>
                  </View>
                </View>
                <View className='mt-6'>
                  <Text className='text-grey65'>Last name</Text>
                  <View className='relative'>
                    <TextInput
                      placeholder='Enter your last name'
                      value={lastName}
                      onChangeText={setLastName}
                      className='px-4 py-3 rounded-lg text-grey34 mt-2 bg-greyF8 focus:border focus:border-primary'
                    />
                    <View className='absolute right-4 top-1/2 -translate-y-1/2 hidden'>
                      <MaterialIcons
                        name='check-circle'
                        size={20}
                        color='green'
                      />
                    </View>
                  </View>
                </View>
                <View className='mt-6'>
                  <Text className='text-grey65'>Phone Number</Text>
                  <View className='relative'>
                    <TextInput
                      placeholder='Enter your phone number'
                      value={phoneNumber}
                      onChangeText={setPhoneNumber}
                      className='px-4 py-3 rounded-lg text-grey34 mt-2 bg-greyF8 focus:border focus:border-primary'
                    />
                    <View className='absolute right-4 top-1/2 -translate-y-1/2 hidden'>
                      <MaterialIcons
                        name='check-circle'
                        size={20}
                        color='green'
                      />
                    </View>
                  </View>
                </View>
                <View className='mt-10  w-full flex-row flex-wrap text-xs items-center text-center space-x-1 justify-center'>
                  <Text className='text-primary'>
                    By creating an account, you agree to our
                  </Text>
                  <TouchableWithoutFeedback
                    className=''
                    onPress={() => router.push('pages/privacy')}
                  >
                    <Text className='text-blueCB'>Privacy policy</Text>
                  </TouchableWithoutFeedback>
                  <Text>and</Text>
                  <TouchableWithoutFeedback className=''>
                    <Text className='text-blueCB ml-1'>Terms & conditions</Text>
                  </TouchableWithoutFeedback>
                </View>
                <View className='mt-10'>
                  <TouchableOpacity
                    onPress={() => router.push('auth/sign-in')}
                    className='bg-greye4 flex justify-center items-center py-4 w-full rounded-md'
                  >
                    <Text className='text-white text-center'> Login </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default SignUp
