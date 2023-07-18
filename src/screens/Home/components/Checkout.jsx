import { View, Text } from 'react-native'
import React from 'react'

export default function Checkout() {
  return (
    <View className="absolute bottom-10 z-20   w-full ">
        <View className="bg-primary mx-5 p-[6px] rounded-full flex-row justify-between"> 


            <Text className="text-white flex-1 text-center  text-lg my-auto">
                1200 birr total
            </Text>
            
        
            <View className="w-12 h-12 flex-1 rounded-3xl ite bg-white">
                <Text className="text-lg m-auto font-bold">Confirm</Text>
            </View>

        </View>

  </View>

  )
}