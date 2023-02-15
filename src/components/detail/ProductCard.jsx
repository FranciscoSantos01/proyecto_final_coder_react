import { View, Text, Image, Button, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { useDispatch } from 'react-redux';
import { addCart } from '../../store/food/foodSlice';


export default function ProductCard({item}) {
  const dispatch = useDispatch()
  const handleAddCart = (payload)=>{
      dispatch(addCart(payload))
  }
  return (
    <View style={styles.card}>
      <Image style={styles.img} source={{uri: item.img}} />
      <View style={styles.description}>
        <Text style={{fontSize:20, fontWeight:'700'}}> {item.title} </Text>
      </View>
      <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems:'center', padding: 5}}>
      <Text style={{fontSize: 18, fontWeight:'500'}}>${item.price}</Text>
      <Ionicons name="add-circle" size={38} color="black" onPress={()=>{handleAddCart({title:item.title, id:item.id, img:item.img, price:item.price})}} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    card:{
        width: 350,
        height: 250,
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
        marginBottom: 10
    },
    img:{
        width: '100%',
        height: '65%',
        borderRadius: 20
        
    },
    description:{
        padding: 5
    }
})