
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { TabNavigator } from './TabNavigator'

export const MainNavigation =()=> {
  return (
   <NavigationContainer>
      <TabNavigator />
   </NavigationContainer>
  )
}