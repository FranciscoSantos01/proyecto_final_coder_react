import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

export default function Card({item,navigation}) {
  return (
    <TouchableWithoutFeedback onPress={()=>navigation.dispatch(navigation.navigate('detail',{...item}))}>
    <View style={styles.card}>
    <Image  style={styles.img} source={{uri:item.image}} />
    <View style={styles.content} >
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.description}>
            <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
            <AntDesign name="star" size={24} color="black" />
            <Text> {item.rating} </Text>
            </View>
            <View style={styles.icon}>
            <Feather name="clock" size={13} color="black" />
            <Text> {item.time} min</Text>
            </View>
        </View>
    </View>
</View >
</TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    card:{
        width: 350,
        height: 250,
        padding: 5,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },
    img:{
        width: '100%',
        height: '65%',
        borderRadius: 20
        
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
        fontWeight: '600',
        
    },
    icon:{
        flexDirection: 'row',
        alignItems: 'center'
        
    }
})