import { View, Text,Image } from 'react-native'
import React from 'react'

import AmountChanger from './AmountChanger'

export default function CheckoutComponent() {
  return (
    <View className="w-full h-[70px] bg-white flex-row rounded-xl shadow-2xl shadow-gray-500 my-2">
      <Image className="rounded-l-xl" source={require("../../../../assets/pizza.png")} style={{width:100,height:70,resizeMode:"cover"}} />
      
      <View className="justify-center pl-3">
        <Text className="text-lg font-bold">Bahr-Dar</Text>
        <Text>4 birr per peace</Text>
      </View>

      <AmountChanger />
      
      

    </View>
  )
}