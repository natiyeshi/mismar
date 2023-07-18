import { View, Text,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function  Navigation() {
    const [disc,setDisc] = useState(false)
  return (
    <View className="flex px-3 z-10 flex-row justify-between py-2">

        <View className="my-auto bg-gray-100 px-4 py-3 rounded-xl">
            <Ionicons name="person" size={24} color="black" />
        </View>
        
        <View className="text-gray-600 justify-end ">
        <Text className="text-center">current location</Text>
        <View className="flex-row text-center">
            <Entypo name="location-pin" size={20} color="#02890C" />
            <Text className="font-bold">Addis Ababa , jemo 3</Text>
        </View>
        </View>

        <TouchableOpacity onPress={() => setDisc(!disc)} className="my-auto  bg-gray-100 px-4 py-3 rounded-xl">
            <Entypo name="menu" size={24} color="black" />
        </TouchableOpacity>
        {   disc &&
        <View className="absolute rounded-xl bg-gray-400 w-40 right-12 top-12 z-50">
            <Text className="text-lg text-white p-2 mt-2 font-bold " >Notification</Text>
            <Text className="text-lg text-white p-2 mt-2 font-bold " >About</Text>
            <Text className="text-lg text-white p-2 my-2 font-bold " >Logout</Text>
        </View>
       }

  </View>       
  )
}   
