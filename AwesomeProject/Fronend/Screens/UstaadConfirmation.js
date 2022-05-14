import React,{useState} from 'react'
import { View, Text, Image, ScrollView} from 'react-native'
import {Button, Avatar} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



export default function UstaadConfirmation() {
const navigation = useNavigation();
const [text, setText] = useState('');

    return (
        <ScrollView style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, marginTop: 35, marginBottom: 10, textAlign: 'center'}}>Congrats! {'\n'}Ustad is on the way</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        
        <Text style={{fontSize: 15, marginTop: 10, textAlign: 'center', fontWeight: 'bold', padding: 10}}>Ustaad Details</Text>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10}}> 
            <Avatar.Image  size={60} source={require('../../src/assets/Login.png')} />
        <Text style={{color: "#10047c", fontSize: 20, marginTop: 10, marginBottom: 10, textAlign: 'center'}}>Rizwan Ahmed {'\n'} <Text style={{fontSize: 15}}>Electrician</Text></Text>
        <Text style={{fontSize: 15, marginTop: 30, textAlign: 'center', fontWeight: 'bold', padding: 10}}>Date and Time</Text>
        <Text style={{fontSize: 30}}>Mon, 21 March, 2021, 01 PM </Text>

        
            
        <Button style={{backgroundColor: '#10047c', marginTop:60, width: '50%', marginBottom: 20}} mode="contained" onPress={() => navigation.navigate('UserMainScreen')}>
              OK
            </Button>   
        
          
            
        </View>  
        </View>         
  </ScrollView>
        
    )
}

