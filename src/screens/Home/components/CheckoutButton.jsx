import { View, Text } from 'react-native'
import React from 'react'

export default function CheckoutButton() {
  return (
    <View className="absolute bottom-10 z-20   w-full ">
        <View className="bg-primary mx-5 p-[6px] rounded-full flex-row justify-between"> 

        <View className="w-12 h-12 rounded-full bg-white">
            <Text className="text-lg m-auto font-bold">5</Text>
        </View>

        <Text className="text-white font-bold text-lg my-auto">
            Checkout
        </Text>
        
        <Text className="text-white text-lg my-auto mr-2 font-bold">
            100 birr
        </Text>

        </View>

  </View>
  )
}