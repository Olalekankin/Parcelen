import { Link, useRouter } from 'expo-router'
import {
  Button,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Buttons} from '../components'
const Welcome = () =>{
  const router = useRouter()
  return (
    <>
      <SafeAreaView className='bg-white px-4 flex flex-1 justify-center h-full'>
        <View>
          <Text className='text-primary font-semibold text-3xl text-center'>
            Welcome Pal
          </Text>
        </View>
        <View className='mt-8'>
          <Buttons
            title='Create account'
            containerStyle='bg-primary w-full'
            textStyle='text-white'
            handlePress={() => router.push('/sign-up')}
          />
        </View>
        <View className='mt-4'>
          <Buttons
            title='Login'
            containerStyle='bg-greye4 w-full'
            textStyle='text-primary'
            handlePress={() => router.push('/sign-in')}
          />
        </View>
        <View className='mt-4 p-1 w-full flex-row flex-wrap text-xs items-center text-center space-x-1 justify-center'>
          <Text className='text-primary font-cregular'>
            By creating an account, you agree to our
          </Text>
          <Link href='/privacy' className=''>
            <Text className='text-blueCB font-cmedium'>Privacy policy</Text>
          </Link>
          <Text>and</Text>
          <Link href='/terms' className=''>
            <Text className='text-blueCB ml-1 font-cmedium'>
              Terms & conditions
            </Text>
          </Link>
        </View>
      </SafeAreaView>
      <StatusBar style='light' backgroundColor='#355' />
    </>
  )
}

export default Welcome