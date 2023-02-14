import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function Search() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.search} placeholder='Search your food' />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 20,
        
    },
    search:{
        width: 320,
        borderRadius: 20,
        padding: 16,
        borderColor: 'black',
        borderWidth: 2
    }
})