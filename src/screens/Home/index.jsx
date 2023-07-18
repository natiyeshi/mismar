import { View, Text,TextInput,Image,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Product from './components/Product';
import ViewedProduct from "./components/ViewedProduct"
import CheckoutButton from './components/CheckoutButton';
import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';

import CheckoutPage from './CheckoutPage';

export default function Home() {

  const [checkout,setCheckout] = useState(false) 

  return (
    <View className="bg-white h-full pt-3 mt-5">
      
     <CheckoutButton />
     <Navigation />

    <ScrollView 
      contentContainerStyle={{ paddingBottom: 170 }}
    >
     <SearchBar />

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
      
   {checkout && <CheckoutPage />}

    </View>
  )
}