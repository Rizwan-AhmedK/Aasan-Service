import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import { TextInput, Button, Avatar, IconButton, Colors  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Logout } from '../../src/store/actions';


export default function UserProfile({route}) {


    const id = route.params.Id;
    const data = route.params.userData;


      
const navigation = useNavigation();
const dispatch = useDispatch();
const submit = () => {
  dispatch(Logout())
}




    return (
        <ScrollView>
            {  data.map((val, inx) => {
        return(


        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10}}> 
            <Avatar.Image  size={60} source={require('../../src/assets/Login.png')} />
        <Text key={inx} style={{color: "white", fontSize: 20, marginTop: 10, marginBottom: 10, textAlign: 'center'}}>{val.data.name} {'\n'} <Text style={{fontSize: 15}}>{val.data.field} , {val.data.role}</Text></Text>

        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <Button style={{marginTop: 50, backgroundColor: '#10047c',width: '90%', paddingLeft: 5, paddingRight: 5}} mode="contained" onPress={submit}>
             LogOut
            </Button>

        <View style={{}}>
        <Text style={{color: '#10047c', fontSize: 20, marginTop: 35, fontWeight: 'bold', textAlign: 'center'}}>User details</Text> 

            <Text style={{color: '#10047c', fontSize: 20, marginTop: 35, fontWeight: 'bold', textAlign: 'left'}}>Phone No: {val.data.phone}</Text> 
            <Text style={{color: '#10047c', fontSize: 20, marginTop: 35, fontWeight: 'bold', textAlign: 'left'}}>Email: {val.data.email}</Text> 
            <Text style={{color: '#10047c', fontSize: 20, marginTop: 35, fontWeight: 'bold', textAlign: 'left'}}>City: {val.data.city}</Text> 
            <Text style={{color: '#10047c', fontSize: 20, marginTop: 35, fontWeight: 'bold', textAlign: 'left'}}>City: {val.data.name}</Text> 
        </View>

            <Button style={{marginTop: 50, backgroundColor: '#10047c', paddingLeft: 5, paddingRight: 5, marginBottom: 5, width: '90%'}} mode="contained" onPress={() => navigation.navigate('UserSettings', {Id: val.data._id, userData: [data]})}>
             Edit Details
            </Button> 


            <Button style={{marginTop: 10, backgroundColor: 'red', paddingLeft: 5, paddingRight: 5, marginBottom: 160, width: '90%', margin: 10}} mode="contained" onPress={console.log("pressed")}>
             Delete Account
            </Button> 
        </View>    
             
  </View>
          )
        })}
        </ScrollView>
        
    )
}

