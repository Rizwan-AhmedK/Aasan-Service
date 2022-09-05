import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, Alert} from 'react-native'
import { TextInput, Button, Avatar, IconButton, Colors, Title  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Logout } from '../../src/store/actions';
import { List } from 'react-native-paper';


export default function ExtraWorkDetails({route, navigation}) {

    
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    // const Title = route.params.Title;
    // const by = route.params.by;
    const userID = route.params.userID;
    console.log(userID)
    // const workDetails = route.params.deatils;
    // const Message = route.params.message;
    // const workAmount = route.params.amount;
    // const id = route.params.id;
    // console.log(Title);

    useEffect(() => {
    
        fetch(`http://localhost:3000/ViewExtraWorkRequest/${userID}`)
                .then((res) => res.json())
                .then (serviceData => {
                setData(serviceData)
                setLoading(false)
    
            }) 
    
    }, [])

    console.log(data)
      
   return (
        <ScrollView>

        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10}}> 
        <Text style={{color: "white", fontSize: 25, marginTop: 20, marginBottom: 20, textAlign: 'center'}}>Extra Work Details</Text>

        </View>

        <View style={{backgroundColor: 'white', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        {data.map((val, inx) => {
            return(
        <List.Section>

       
                
    <List.Item key={inx} title={`Amount: ${val.workAmount}`} left={() => <List.Icon icon="folder" />} />
    <Button style={{marginTop: 20,position: 'absolute', right: 15, backgroundColor: '#10047c'}}  color='white' onPress={() => {
        Alert.alert(`Work Details: ${val.workDetails}`)
    }}>Details</Button> 
                <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1}} />
               

  </List.Section>
  
   )})}

   
        </View>   

  </View>

  

        </ScrollView>
        
    )
}

