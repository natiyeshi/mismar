import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View className="h-full bg-gray-50 items-center pt-32">
      <Text className="text-xl font-bold my-2">Phone number</Text>
      <TextInput placeholder='input phone number' className="border-b-2 border-primary text-center pt-2 w-2/4" />
      <TouchableOpacity className="mt-5">
        <Text className="text-lg font-bold bg-primary text-white px-5 py-1 rounded-xl ">Login</Text>
      </TouchableOpacity>

    </View>
  )
}