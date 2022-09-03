import React,{useState, useEffect} from 'react';
import { View, Text, Image, ScrollView, Alert} from 'react-native';
import {Button, Avatar, TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



 



export default function ComplainScreen({route}) {
    const navigation = useNavigation();
    let complainfor, complainby;
    const Role = route.params.Role;
    if(Role == 'user'){
        complainfor = route.params.ustaadID;
        complainby = route.params.userID;}
    else{
        complainby = route.params.ustaadID;
        complainfor = route.params.userID;
    }
    const [complain, setComplain] = useState('');

    const showAlert = () => {
        Alert.alert(
          "Your Complain has been registered. our team will contact you soon.",
          "",
          [
            { text: "OK", onPress: () => {
                if(Role == 'user'){
                    navigation.navigate("UserMainScreen")}
                else{navigation.navigate("UstaadMainScreen")}
            }  
        }
          ] ) }

const submitData = () => {
    fetch("http://localhost:3000/complain", {
        method : "post",
        headers:{
            'Content-Type': 'application/json' 
        },
        body:JSON.stringify({
            complainfor,
            complainby,
            complain,
        })
    })
    
    .then(res=>res.json())
    .then(data => {
      console.log(data)
        
    }).catch(err => {
        console.log(err)
    })
  
    showAlert()
   
  }



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
            value = {complain}
            onChangeText = {setComplain}
            label="Your complain here"
            mode='outlined'
            multiline
            />


        
            
        <Button style={{backgroundColor: '#10047c', marginTop:60, width: '50%', marginBottom: 35}} mode="contained" onPress={submitData}>
              Submit
            </Button>   
        
          
            
        </View>  
        </View>         
  </ScrollView>
        
    )
}

