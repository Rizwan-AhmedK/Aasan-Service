import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, ScrollView} from 'react-native'
import { TextInput, Button, Avatar, IconButton, Colors  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';
import { List } from 'react-native-paper';




export default function UserNotification({route}) {
const [rattingData, setRattingData] = useState([]); 
const [loading, setLoading] = useState(true); 
const Data = route.params.userData;
const userId = route.params.Id;
const navigation = useNavigation();


useEffect(() => {
    
    fetch(`http://localhost:3000/notification/${userId}`)
            .then((res) => res.json())
            .then (serviceData => {
            setRattingData(serviceData)
            setLoading(false)
            
        }) 

}, [])

console.log(rattingData)

if(rattingData.length == 0){
    return(
        <>
        <ActivityIndicator 
        animating = {loading}
        color = '#bc2b78'
        size = "large"
        />
        <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
        <Text style={{color: 'blue'}}>No Results Found</Text>
        <Button style={{marginTop: 10, backgroundColor: '#10047c'}}  color='white' onPress={() => navigation.goBack()}> Back To Dashboard </Button>
   </View>
   </>
    )
}else{
    return (
        <ScrollView>
            
        <View style={{backgroundColor: '#10047c', flex: 1}}>

        <View style={{backgroundColor: '#10047c', alignItems: 'center', flex: 1}}>


            <Text style={{color: 'white', fontSize: 35, marginTop: 35, fontWeight: 'bold', marginBottom: 20}}>Notifications</Text> 


        </View>  
        <View style={{backgroundColor: 'white'}}> 
        {rattingData.map((val, inx) => {
                        return(
        <List.Section>
            <List.Item title={val.title} style={{color: '#10047c'}} left={() => <List.Icon icon="bell" color='#10047c'/>} />
            <Button style={{marginTop: 20,position: 'absolute', right: 15, backgroundColor: 'green'}}  color='white' onPress={()=> {navigation.navigate("AcceptAndRejectScreen", {
                        Title: val.title, data: [val] ,
                        by: val.by, deatils: val.workDetails, message: val.message, amount: val.workAmount,for: val.fors, id: val._id })}}>Open</Button> 
                <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1}} />

        </List.Section>


)
                
})
}
      
  </View>
  </View>
        </ScrollView>
        
    )
}}

