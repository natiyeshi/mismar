import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Product() {
  return (
    <View className="bg-gray-100 shadow-lg -z-10 shadow-black mr-3  rounded-xl" style={{height:250}}>

          <Image className="rounded-t-xl -z-10" source={require("../../../../assets/pizza.png")} style={{width:200,height:150,resizeMode:"cover"}} />
          <View className="mt-2 px-2">
             
            <Text className="text-[16px] font-bold">BahrDar</Text>
            
            <View className="flex-row justify-between mt-4">

                <Text className="text-[16px] my-auto">50 birr</Text>
                <TouchableOpacity className="bg-primary px-4 py-2 rounded-2xl">
                    <Text className="text-white">Order</Text>
                </TouchableOpacity>
            
            </View>

          </View>

        </View>
  )
}