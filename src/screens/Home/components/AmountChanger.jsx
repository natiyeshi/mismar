import { View, Text } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

export default function AmountChanger() {
  return (
    <View className=" ml-2 flex-1 my-auto px-3 justify-center  flex-row space-x-3">    
       

        <View className="bg-primary justify-center items-center w-8 h-8 rounded-full">
            <AntDesign name="minus" size={24} color="white" />
        </View>
         
        <Text className="my-auto text-lg font-bold">5</Text>

        <View className="bg-primary justify-center items-center w-8 h-8 rounded-full">
            <AntDesign name="plus" size={24} color="white" />
        </View> 

      </View>
  )
}