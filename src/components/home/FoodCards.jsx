import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import Burger from '../../../assets/burger.webp'
import { food } from '../../helpers/data/data'
import Card from './Card'


export default function FoodCards({navigation}) {
  return (
    <View style={styles.container}>
        <View  style={styles.text}>
          <Text style={styles.texto}>Restaurants</Text>
          <Text style={{color: 'orange', fontSize: 17}}>view All</Text>
        </View>
    <View style={styles.list}>
      <FlatList 
      data={food}
      renderItem={({item})=> <Card item={item} navigation={navigation} />}
      keyExtractor={item=> item.id}
      showsVerticalScrollIndicator={false}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20
    },
    text:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 320,
        padding: 10
    },
   
    texto:{
        fontWeight:'bold',
        fontSize: 20
    },
    list:{
        justifyContent: 'center',
        alignItems:'center',
        marginBottom: 370,
        padding: 3
    }
   
    
})