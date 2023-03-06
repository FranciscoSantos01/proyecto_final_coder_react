import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import CartClose from '../../assets/cartClose.png' 
import { useSelector } from 'react-redux';
import CartItems from '../components/cart/cartItems';
import LocationSelector from '../components/location/LocationSelector';
export default function Cart() {
   const{cart}=useSelector(state=> state.food)
   const onLocation = (Location)=>{
    console.warn(Location)
   }
  return (
    <>
    <View style={styles.container}>
      <Text style={{color:'black', fontSize:20 }}>Cart</Text>
    </View>
    {
      cart.length === 0
      ?  <View style={styles.main}>
      <Image source={CartClose} style={styles.img} />
      <Text  style={styles.mainText}>No Items in the cart</Text>
 </View>
     :<View style={{justifyContent:'center', alignItems:'center', marginTop: 20}}>
       <FlatList
        data={cart}
        renderItem={({item})=> <CartItems item={item} />}
        keyExtractor={item=>item.id} 
       />
     </View> 
    }
   
    <LocationSelector onLocation={onLocation} />
    </>
  )
}
const styles = StyleSheet.create({
    container:{
        marginTop: 2,
        color: 'black',
        height: 75,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white',
        shadowColor: "#000",
         shadowOffset: {
              width: 0,
              height: 2,
         },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
            elevation: 5,
            padding: 10
    },
    main:{
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center'
      
    },
    img:{
      width : '50%',
      height: '50%'
    },
    mainText:{
      fontSize: 25,
      fontWeight: '300'
    }
    
})
