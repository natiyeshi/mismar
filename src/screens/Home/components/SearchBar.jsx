import { View, Text,TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View className="mx-auto -z-10 bg-white my-5 w-4/5 p-1 rounded-full bg-yellow-80 flex-row justify-between  shadow-md shadow-black">

        <TextInput placeholder='search' className="text-bold text-lg pl-1" />
        <View className="bg-primary my-auto p-2 rounded-full ">
            <FontAwesome name="search" size={24} color="white" className="" />
        </View>            
        
    </View>
  )
}