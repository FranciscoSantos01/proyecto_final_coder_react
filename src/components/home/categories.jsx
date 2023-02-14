import { View, Text, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import React from 'react'

export default function Categories() {
  return (
    <View>
    <View style={styles.container}>
      <Text>Food Category</Text>
      <View style={styles.text}>
      <Text> See more</Text>
      <AntDesign name="arrowright" size={24} color="black" />
    </View>
    </View>
    <View style={styles.CategoriesContainer}>
        <View style={styles.item}>
        <MaterialCommunityIcons name="hamburger" size={24} color="black" />
        </View>
        <View style={styles.item}>
        <Ionicons name="pizza" size={24} color="black" />
        </View>
        <View style={styles.item}>
        <Ionicons name="pizza" size={24} color="black" />
        </View>
        <View style={styles.item}>
        <Ionicons name="pizza" size={24} color="black" />
        </View>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
        flexWrap :'wrap',
        width: 300,
        marginTop: 10
    },
    text:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'orange'
    },
    CategoriesContainer:{
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    item:{
        backgroundColor: 'grey',
        padding: 20,
        borderRadius: 50
    }
 
})