import React,{useState} from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import {Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { CommandStartedEvent } from 'mongodb';



export default function PaymentSystem({ route }) {
    const title = "New Work request";
    const message = "New Work request is initiated";
    

    const {
        by, 
        field, 
        problemStatement, 
        latitude, 
        longititude, 
        fors, 
        date, 
        email, 
        name, 
        phone, 
        address } = route.params;

        console.log(by, fors)


const insertServiceRecords = () => {
    fetch("http://localhost:3000/temp", {
        method : "post",
        headers:{
            'Content-Type': 'application/json' 
        },
        body:JSON.stringify({
            by, 
            field, 
            problemStatement, 
            latitude, 
            longititude, 
            fors, 
            date, 
            email, 
            name, 
            phone, 
            address, 
            title, 
            message
        })
    })
    .then(res=>res.json())
    .then(data => {0
        console.log(data)
    }).catch(err => {
        console.log(err)
    })  
    navigation.navigate('SuccessNotification')
}

const navigation = useNavigation();
const [text, setText] = useState('');

    return (
        <ScrollView style={{backgroundColor: '#10047c', flex: 1,}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 150}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, marginTop: 25, marginBottom: 10, textAlign: 'center'}}>Select Payment Method</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: 45}}>
        <Text style={{fontSize: 15, marginTop: 10, textAlign: 'center', fontWeight: 'bold', padding: 10, marginTop: 50}}>Please select the payment method</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PaymentSystem2')}>
         <Image source={require('../../src/assets/stripe.png')} style={{width: 100, height: 50, marginTop: 20}} />
        {/* <Text onPress = {() => {navigation.navigate('PaymentSystem2')}} style={{marginTop: 20, textAlign: 'center'}}>Account details {'\n'}Name: Rizwan Ahmed, No: 03138865378</Text> */}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => insertServiceRecords()}>
        <Image source={require('../../src/assets/COD.jpg')} style={{width: 100, height: 50, marginTop: 80, marginBottom: 100}}/>
        </TouchableOpacity>
          
            
        </View>           
  </ScrollView>
        
    )
}

