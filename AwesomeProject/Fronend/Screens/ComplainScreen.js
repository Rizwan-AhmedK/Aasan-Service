import React,{useState, useEffect} from 'react'
import { View, Text, Image, ScrollView} from 'react-native'
import {Button, Avatar, TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



 



export default function ComplainScreen() {
const navigation = useNavigation();
const [text, setText] = useState('');



    return (
        <ScrollView style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, marginTop: 35, marginBottom: 10, textAlign: 'center'}}>Make a Complain</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10}}> 
            

        <Text style={{fontSize: 15, marginTop: 60, textAlign: 'center', fontWeight: 'bold', padding: 10}}>Enter all neccesary details related to the problem</Text>
        <TextInput style={{width: 350, marginTop: 10, height: 200}}
            label="Your complain here"
            mode='outlined'
            multiline
            />


        
            
        <Button style={{backgroundColor: '#10047c', marginTop:60, width: '50%', marginBottom: 35}} mode="contained" onPress={() => navigation.navigate("Home")}>
              Submit
            </Button>   
        
          
            
        </View>  
        </View>         
  </ScrollView>
        
    )
}

