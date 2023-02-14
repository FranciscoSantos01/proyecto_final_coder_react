import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from '../screens/Cart'

export default function CartNavigation() {
    const stack = createNativeStackNavigator()
  return (
   <stack.Navigator
   initialRouteName='Cart'
   screenOptions={{
    headerShown: false
   }}
   >
     <stack.Screen name='Cart' component={Cart} />
   </stack.Navigator>
  )
}