import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Burger from '../../../assets/burger.webp'
import { Feather } from '@expo/vector-icons';

export default function FoodCards() {
  return (
    <View style={styles.container}>
        <View  style={styles.text}>
          <Text style={styles.texto}>FoodCards</Text>
          <Text>pages</Text>
        </View>
        <View style={styles.card}>
            <Image  style={styles.img} source={Burger} />
            <View style={styles.content} >
                <Text style={styles.title}>Burger Speed</Text>
                <View style={styles.description}>
                    <View style={styles.icon}>
                    <Feather name="clock" size={13} color="black" />
                    <Text> 15min</Text>
                    </View>
                    <Text>500kcal</Text>
                </View>
                <Text style={styles.price}>$50</Text>
            </View>
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
    card:{
        width: 300,
        height: 300,
        padding: 5,
        backgroundColor: 'grey',
        marginTop: 10
    },
    texto:{
        fontWeight:'bold',
        fontSize: 20
    },
    img:{
        width: '100%',
        height: '65%',
        
    },
    description:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 5
    },
    price:{
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    title:{
        fontSize:23,
        fontWeight: '600'
    },
    icon:{
        flexDirection: 'row',
        alignItems: 'center'
        
    }
    
})