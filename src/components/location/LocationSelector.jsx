import { View, Text, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { Styles } from './styles'
import * as GeoLocation from "expo-location" 

export default function LocationSelector({onLocation}) {
    const[Location, setLocation] = useState(null)
    const verifyPermissions = async ()=>{
        const{status}= await GeoLocation.requestForegroundPermissionsAsync();
        if(status !== "granted"){
            Alert.alert("No permits to use your location");
            return false
        };
        return true;
    }
    const onHandleLocation = async ()=>{
        const isLocation = await verifyPermissions();
        if(!isLocation) return;
        const geolocation = await GeoLocation.getCurrentPositionAsync({
            timeout: 5000,
        })
        const{latitude, longitude} = geolocation.coords;
        setLocation({lat:latitude, lng:longitude})
    }
  return (
    <View style={Styles.container}>
      <View style={Styles.preview}>
        {!Location ? (
            <Text>No location Choose yet</Text>
        ):(
            <Text>Latitud{Location.lat}, longitud={Location.lng} </Text>
        )}
      </View>
      <Button
      title='Select location'
      onPress={onHandleLocation}
      color='blue'
       />
    </View>
  )
}