import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Search from '../components/home/SearchBar';
import Categories from '../components/home/categories';
import FoodCards from '../components/home/FoodCards';



export const FoodScreen =({navigation})=> {
  return (
    <View style={styles.container}>  
     <View  >
      <Search />
     </View>
      <Categories />
      <FoodCards navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 190,  
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  