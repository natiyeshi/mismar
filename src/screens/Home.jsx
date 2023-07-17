import { View, Text,TextInput,Image,ScrollView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Product from '../components/Product';
import ViewedProduct from "../components/ViewedProduct"

export default function Home() {
  return (
    <View className="bg-white h-full pt-3 mt-5">
      
      <View className="flex px-3 flex-row justify-between py-2">

        <View className="my-auto bg-gray-100 px-4 py-3 rounded-xl">
            <Ionicons name="person" size={24} color="black" />
        </View>
        
        <View className="text-gray-600 justify-end ">
          <Text className="text-center">current location</Text>
          <View className="flex-row text-center">
            <Entypo name="location-pin" size={20} color="#02890C" />
            <Text className="font-bold">Addis Ababa , jemo</Text>
          </View>
        </View>

        <View className="my-auto bg-gray-100 px-4 py-3 rounded-xl">
          <Entypo name="menu" size={24} color="black" />
        </View>

      </View>

    <ScrollView 
          contentContainerStyle={{ paddingBottom: 170 }}
    
    >

          <View className="mx-auto bg-white my-5 w-4/5 p-1 rounded-full bg-yellow-80 flex-row justify-between  shadow-md shadow-black">

              <TextInput placeholder='search' className="text-bold text-lg pl-1" />
              <View className="bg-primary my-auto p-2 rounded-full ">
                  <FontAwesome name="search" size={24} color="white" className="" />
              </View>            
              
          </View>

          <View className=" mt-2 px-3" >
              <Text className="font-bold text-2xl" >Mostly Ordered</Text>
          </View>

          <ScrollView 
          contentContainerStyle={{ padding: 20 }}
          horizontal={true} className="mt-2 ps-3 flex-row space-x-4" >
              
              <ViewedProduct />
              <ViewedProduct />
              <ViewedProduct />
              <ViewedProduct />

          </ScrollView>

        
          <View className=" mt-2 px-3" >
              <Text className="font-bold text-2xl" >Our Service</Text>
          </View>

          <View 
            // contentContainerStyle={{ padding: 20 }}
            className="mt-2  flex-row flex-wrap items-center" >
              
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />

          </View>

    </ScrollView>
      
    </View>
  )
}