import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <View className="bg-primary h-full">
        <Image source={require("../../assets/a.png")} style={{width:40,height:350}} />
        <View>
            <Text className="text-white text-2xl font-bold text-center ">Welcome to </Text>
            <Text className="text-white text-xl text-center my-3">Mismar Delivery</Text>
            <TouchableOpacity className=" mt-10">
                <Text className="text-primary m-auto bg-white px-4 py-1 text-xl rounded-xl">continue</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}