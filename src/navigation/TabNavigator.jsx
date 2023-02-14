import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'
import { HomeNavigation } from './HomeNavigation';
import CartNavigation from './CartNavigation';

export const TabNavigator = () => {
    const tab = createBottomTabNavigator()
  return (
    <tab.Navigator
    initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
      }} 
    >
        <tab.Screen 
        name='Home'
        component={HomeNavigation}
        options={{
            title:'Home',
            tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? 'home' : 'home-outline'}
                  size={22}
                  color='black'
                />
              ),
        }}
         />
        <tab.Screen name='cart' component={CartNavigation}
        options={{
            title:'cart',
            tabBarIcon:({focused})=>( 
                <Ionicons
                name={focused ? 'cart' : 'cart-outline'}
                size={22}
                color= 'black'
              />
            ),
        }}
         />
    </tab.Navigator>
  )
}
