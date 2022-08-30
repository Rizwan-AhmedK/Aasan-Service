import React,{useState} from 'react'
import { View, Text, Image} from 'react-native'
import {Button} from 'react-native-paper';
// -+import { useNavigation } from '@react-navigation/native';



export default function ShowInspectionPrice( { navigation, route } ) {

  const {
    UserId, 
    Field, 
    problemStatement, 
    Latitude, 
    Longititude, 
    UstaadId, 
    Date, 
    Email, 
    Name, 
    Phone, 
    Address } = route.params;

    console.log(UserId, 
      Field, 
      problemStatement, 
      Latitude, 
      Longititude, 
      UstaadId, 
      Date, 
      Email,
      Name, 
      Phone, 
      Address)
  

    return (
        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, marginTop: 65, marginBottom: 10, textAlign: 'center'}}>Total Amount</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <Text style={{fontSize: 15, marginTop: 10, textAlign: 'center', fontWeight: 'bold', padding: 10}}>Hello, here is the total inspection charges of our services. it only apply for inspection.<Text style={{color: '#10047c'}}>Terms and Conditions</Text></Text>




          
   <Text style={{fontSize: 30,  marginTop: 50, textAlign: 'center', fontWeight: 'bold', }}>Rs. 500</Text>


            
            <Button style={{backgroundColor: '#10047c', marginTop:60, width: '50%'}} mode="contained" onPress={() => navigation.navigate('PaymentSystem', {
              userId:UserId, 
              field:Field, 
              problemStatement:problemStatement, 
              latitude:Latitude, 
              longititude:Longititude, 
              ustaadId:UstaadId, 
              date:Date, 
              email:Email, 
              name:Name, 
              phone:Phone, 
              address:Address 
            })}>
              Next
            </Button>           
            
        </View>           
  </View>
        
    )
}

