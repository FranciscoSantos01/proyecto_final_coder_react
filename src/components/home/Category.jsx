import { View, Text, StyleSheet, Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import React from 'react'

export default function Category({item}) {
  return (
    <View style={styles.CategoriesContainer}>
        <View style={styles.itemContainer}>
          <View style={styles.logo}>
           <Image style={styles.img} source={{uri:item.img}} />
          </View>
        <Text> {item.category} </Text>
        </View>
     </View>
  )
}

const styles = StyleSheet.create({
    CategoriesContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        overflow: 'scroll'
    },
    item:{
        backgroundColor: 'grey',
        padding: 20,
        borderRadius: 50
    },
    itemContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginRight: 15,
        paddingHorizontal: 5
     },
     logo:{
       backgroundColor: 'grey',
       padding: 20,
       borderRadius: 50
     },
     img:{
        width: 26,
        height: 26
      }
})