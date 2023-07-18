import { View, Text,ScrollView } from 'react-native'
import React from 'react'

import CheckoutComponent from './components/CheckoutComponent';
import Checkout from './components/Checkout';

export default function CheckoutPage() {
  return (
    <View className="absolute top-0 h-full z-30   bg-opacity-10  w-full bg-red-0">
        <View className="h-[12%] bg-gray-50 opacity-75 ">
        </View>
        
        <View className="bg-gray-100 h-[88%] rounded-t-[40px] ">
            <Text className="text-2xl font-bold pt-10 pl-4 mb-2 ">Checkout</Text>
            
            <Checkout />
            
            <ScrollView contentContainerStyle={{ marginTop:25, paddingHorizontal:10,paddingBottom:130,alignItems:'center' }}>

              <CheckoutComponent />
              <CheckoutComponent />
              <CheckoutComponent />
              <CheckoutComponent />
              <CheckoutComponent />
              <CheckoutComponent />
              <CheckoutComponent />
              <CheckoutComponent />

             

            </ScrollView>
        </View>

      </View>
  )
}