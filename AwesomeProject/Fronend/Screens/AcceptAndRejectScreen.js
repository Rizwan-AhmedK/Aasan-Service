import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import { TextInput, Button, Avatar, IconButton, Colors, Title  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Logout } from '../../src/store/actions';


export default function AcceptAndRejectScreen({route}) {


    const data = route.params.userData;
    const Title = route.params.Title;


      
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
        <Text key={inx} style={{color: "white", fontSize: 25, marginTop: 20, marginBottom: 20, textAlign: 'center'}}>Project Details</Text>

        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <Text  style={{color: "#10047c",fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 20, textAlign: 'center'}}>Work Details</Text>
        <Text  style={{color: "#10047c",fontSize: 20, marginTop: 2, marginBottom: 20, textAlign: 'center'}}> 
        I have to work more there, i have to change some bulbs and i have to renew new wiring and much more
        </Text>

        <Text  style={{color: "#10047c",fontSize: 20, fontWeight: 'bold', marginTop: 60, marginBottom: 20, textAlign: 'center'}}>Work Amount</Text>
        <Text  style={{color: "#10047c",fontSize: 25, marginTop: 2, marginBottom: 20, textAlign: 'center'}}> 2000 </Text>

        <Button style={{marginTop: 50, backgroundColor: 'green', paddingLeft: 5, paddingRight: 5}} mode="contained" onPress={submit}>
             Accept request
            </Button>

        <Button style={{marginTop: 20, backgroundColor: 'red', paddingLeft: 5, paddingRight: 5, marginBottom: 100}} mode="contained" onPress={() => navigation.navigate('UserSettings', {Id: val.data._id, userData: [data]})}>
             Reject Request
            </Button> 
        </View>    
             
  </View>
          )
        })}
        </ScrollView>
        
    )
}

