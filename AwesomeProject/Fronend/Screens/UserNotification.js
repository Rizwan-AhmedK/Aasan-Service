import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, ScrollView} from 'react-native'
import { TextInput, Button, Avatar, IconButton, Colors  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';




export default function UserNotification({route}) {
const [rattingData, setRattingData] = useState([]); 
const [loading, setLoading] = useState([]); 
const Data = route.params.userData;
const userId = route.params.Id;
const navigation = useNavigation();


useEffect(() => {
    
    fetch(`http://localhost:3000/notification/${userId}`)
            .then((res) => res.json())
            .then (serviceData => {
            setRattingData(serviceData)
            
        }) 

}, [])

console.log(rattingData)



    return (
        <ScrollView>
        <View style={{backgroundColor: '#10047c', flex: 1}}>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 1}}>


            <Text style={{color: '#10047c', fontSize: 35, marginTop: 35, fontWeight: 'bold', marginBottom: 20}}>Notification</Text> 


        </View>  
        <View> 
        {rattingData.map((val, inx) => {
                        return(
                <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
                    
                     <Text style={{marginTop: 4, marginBottom: 4, fontWeight: 'bold', color: 'white'}}>{val.title} {'\n'}<Text style={{fontWeight: 'normal', color: 'gray'}}>c{val.message} </Text></Text>
                    
                     <Button style={{marginTop: 14,position: 'absolute', right: 110, backgroundColor: 'green'}}  color='white' onPress={()=> {navigation.navigate("AcceptAndRejectScreen", {Title: title, userData: [data]})}}>Open</Button> 
                    <Button style={{marginTop: 14,position: 'absolute', right: 10, backgroundColor: 'red'}}  color='white'>Delete</Button>
                <View style={{ borderBottomColor: 'white', borderBottomWidth: 1}} />

                </View>  
                )
                
            })
            }


               
</View>
      
  </View>
        </ScrollView>
        
    )
}

