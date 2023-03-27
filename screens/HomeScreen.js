import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect (() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
      <SafeAreaView className='bg-white flex-1 relative'>
        {/* First Section */}
        <View className='flex-row px-6 mt-8 items-center space-x-2'>
          <View className='w-16 h-16 bg-black rounded-full items-center'>
            <Text className='text-[#00bcc9] text-3xl font-semibold'>Wee</Text>
          </View>
          <Text className='text-[#2a2b4b] text-3xl font-semibold'>Out</Text>
        </View>

        <View className='px-6 mt-8 space-y-3'>
          <Text className='text-[#3c6072] text-[42px]'>Enjoy the trip with</Text>
          <Text className='text-[#00bcc9] text-[38px] font-bold'>
            Good Moments
          </Text>
          <Text className='text-[#3c6072] text-[42px]'>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
          Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
          </Text>
        </View>
        {/* First Section */}
        <View className='w-[400px] h-[400px] bg-[#00bcc9] rounded-full absolute bottom-36 -right-36'></View>
        <View className='w-[400px] h-[400px] bg-[#e99265] rounded-full absolute -bottom-26 -left-36'></View>
        <View className='flex-1 relative items-center justify-center'>
          <Image
            source={{
              url:''
            }}
            className='w-20 h-20 object-cover'
          />

        <View className='absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border=[#00bcc9] ronded-full items-center justify-center'>
         <TouchableOpacity>
            <View className='absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border=[#00bcc9]'>
              <Text className='text-gray-50 text-[36px] font-semibold'></Text>
            </View>   
          </TouchableOpacity>
        </View>   
      </View>

      </SafeAreaView>
    );
}

export default HomeScreen