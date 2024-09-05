import { Link, useRouter } from 'expo-router'
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
const Welcome = () =>{
  const router = useRouter()
  return (
    <>
      <SafeAreaView className='bg-white px-4 flex flex-1 justify-center h-full'>
        <View>
          <Text className='text-primary font-semibold text-3xl text-center'>
            Welcome Pall
          </Text>
        </View>
        <View className='mt-8 p-1 border border-green-50 w-full'>
          <TouchableOpacity
            className='bg-primary flex justify-center items-center py-4 w-full rounded-md'
            onPress={() => router.push('/sign-up')}
          >
            <Text className='text-white text-center'> Create account </Text>
          </TouchableOpacity>
        </View>
        <View className='mt-4 p-1 border border-green-50 w-full'>
          <TouchableOpacity
            onPress={() => router.push('/sign-in')}
            className='bg-greye4 flex justify-center items-center py-4 w-full rounded-md'
          >
            <Text className='text-primary text-center'> Login </Text>
          </TouchableOpacity>
        </View>
        <View className='mt-4 p-1 w-full flex-row flex-wrap text-xs items-center text-center space-x-1 justify-center'>
          <Text className='text-primary'>
            By creating an account, you agree to our
          </Text>
          <TouchableWithoutFeedback
            className=''
            onPress={() => router.push('/privacy')}
          >
            <Text className='text-blueCB'>Privacy policy</Text>
          </TouchableWithoutFeedback>
          <Text>and</Text>
          <TouchableWithoutFeedback
            onPress={() => router.push('/terms')}
            className=''
          >
            <Text className='text-blueCB ml-1'>Terms & conditions</Text>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
      <StatusBar style='light' backgroundColor='#355' />
    </>
  )
}

export default Welcome