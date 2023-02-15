import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import React from 'react'
import { categories } from '../../helpers/data/data';
import Category from './Category';

export default function Categories() {
  return (
    <View>
    <View style={styles.container}>
      <Text style={{fontSize:17}}>Food Category</Text>
      <View style={styles.text}>
      <Text style={{fontWeight:'400', fontSize: 17}}> See more</Text>
      <AntDesign name="arrowright" size={24} color="black" />
    </View>
    </View>
    <View style={{height:130}}>
     <FlatList
      data={categories}
      renderItem={({item})=> <Category item={item} />}
      keyExtractor={item=> item.id}
      horizontal
      showsHorizontalScrollIndicator = {false}
     />
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 10,
        paddingHorizontal: 8    
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
    itemContainer:{
       justifyContent:'center',
       alignItems:'center'
    },
    logo:{
      backgroundColor: 'grey',
      padding: 20,
      borderRadius: 50
    },
    img:{
      width: 26,
      height: 26
    },
    list:{
      flexDirection: 'row',
    }
 
})