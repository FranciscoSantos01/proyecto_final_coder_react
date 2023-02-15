import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FoodScreen } from '../screens/FoodScreen'
import FoodDetail from '../screens/FoodDetail'

export  const HomeNavigation =()=>{
    const stack = createNativeStackNavigator()
  return (
    <stack.Navigator 
    initialRouteName='home'
     screenOptions={{
        headerShown: false
     }}
    >
        <stack.Screen name='home' component={FoodScreen} />
        <stack.Screen name='detail' component={FoodDetail} />
    </stack.Navigator>
  )
}