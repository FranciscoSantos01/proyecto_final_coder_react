import { View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import ProductCard from '../components/detail/ProductCard';
import { Products } from '../helpers/data/data';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 



export default function FoodDetail({navigation,route}) {
    const{title, rating,time} = route.params;
    const products = Products.filter(items =>items.category === title)
    console.log(title,rating,time)
   
  return (
    <View style={{justifyContent: 'center', alignItems:'center', marginTop: 100}}>
      <Text style={{textAlign:'left', marginBottom: 10,  fontSize: 25}}>{title}</Text>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:300, marginBottom:12}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <AntDesign name="star" size={24} color="yellow" />
        <Text style={{fontWeight:'bold', fontSize:18}}> {rating} </Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Feather name="clock" size={18} color="black" />
        <Text style={{fontSize: 18}} > {time} </Text>
        </View>
      </View>
      <View style={{marginBottom: 100}}>
        <FlatList
         data={products}
         renderItem={({item})=> <ProductCard item={item} />}
         keyExtractor={item=> item.id}
         />
      </View>
    </View>
  )
}