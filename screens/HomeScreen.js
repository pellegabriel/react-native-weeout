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
      <View>
        <Text>Go</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen