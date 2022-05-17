import React,{useState} from 'react'
import { View, Text, Image, ScrollView, Linking, Alert} from 'react-native'
import {Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';



export default function PaymentSystem2() {
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

        
            
        <Button style={{backgroundColor: '#10047c', marginTop:60, width: '50%'}} mode="contained" onPress={() => { Linking.openURL("https://buy.stripe.com/test_aEUaI00Zo9CA0xi288")}}>

              Next
            </Button>   
            {/* https://buy.stripe.com/test_aEUaI00Zo9CA0xi288 
            return(<WebView source={{ uri: 'https://buy.stripe.com/test_aEUaI00Zo9CA0xi288' }} />) */}          
            
        </View>           
  </ScrollView>
        
    )
}

