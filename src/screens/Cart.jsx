import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Cart() {
  return (
    <View style={styles.container}>
      <Text style={{color:'black', fontSize:20 }}>Cart</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        color: 'black',
        justifyContent:'center',
        alignItems:'center'
    }
})
