import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../store/food/foodSlice';

export default function CartItems({item}) {
    const dispatch = useDispatch()
    const handleDeleteCart=(payload)=>{
       dispatch(deleteTask(payload))
    }
  return (
    <View key={item.id} style={{flexDirection:'row',justifyContent:'space-between', backgroundColor:'white', width: 350, padding:20,marginBottom:10}}>
    <Text> {item.title} </Text>
    <FontAwesome name="trash" size={24} color="black" onPress={()=>{handleDeleteCart(item.id)}} />
   </View>
  )
}