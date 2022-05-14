import React,{useState} from 'react'
import { View, Text, Image} from 'react-native'
import {Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



export default function UstaadRejectionScreen() {
const navigation = useNavigation();
const [text, setText] = useState('');

    return (
        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, marginTop: 65, marginBottom: 10, textAlign: 'center'}}>Request Refused</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <Text style={{fontSize: 15, marginTop: 10, textAlign: 'center', fontWeight: 'bold'}}>Ustaad refused your request kindly choose any other ustaad.<Text style={{color: '#10047c'}}>Policy</Text></Text>


    <Image
      style={{width: '60%', height: '50%', marginTop: 35}}
      source={require('../../src/assets/rejected.png')} />


            
            <Button style={{backgroundColor: '#10047c', marginTop: 30, width: '50%'}} mode="contained" onPress={() => navigation.navigate('Services')}>
             select other ustaad
            </Button>           
            
        </View>           
  </View>
        
    )
}

