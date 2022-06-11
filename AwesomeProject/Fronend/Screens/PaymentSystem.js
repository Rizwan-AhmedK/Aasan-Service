import React,{useState} from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import {Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



export default function PaymentSystem() {
const navigation = useNavigation();
const [text, setText] = useState('');

    return (
        <ScrollView style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, marginTop: 65, marginBottom: 10, textAlign: 'center'}}>Select Payment Method</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <Text style={{fontSize: 15, marginTop: 10, textAlign: 'center', fontWeight: 'bold', padding: 10}}>Please select the payment method</Text>
        <TouchableOpacity onPress={navigation.navigate('PaymentSystem2')}>
         <Image source={require('../../src/assets/stripe.png')} style={{width: 100, height: 50, marginTop: 50}} />
        {/* <Text onPress = {() => {navigation.navigate('PaymentSystem2')}} style={{marginTop: 20, textAlign: 'center'}}>Account details {'\n'}Name: Rizwan Ahmed, No: 03138865378</Text> */}
        </TouchableOpacity>

        <TouchableOpacity onPress={navigation.navigate('PaymentSystem2')}>
        <Image source={require('../../src/assets/COD.jpg')} style={{width: 100, height: 50, marginTop: 130, marginBottom: 100}}/>
        </TouchableOpacity>
          
            
        </View>           
  </ScrollView>
        
    )
}

