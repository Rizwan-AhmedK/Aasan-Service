import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, Alert} from 'react-native'
import { TextInput, Button, Avatar, IconButton, Colors, Title  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Logout } from '../../src/store/actions';


export default function AcceptAndRejectScreen({route, navigation}) {


    const Title = route.params.Title;
    const by = route.params.by;
    const fors = route.params.for;
    const workDetails = route.params.deatils;
    const Message = route.params.message;
    const workAmount = route.params.amount;
    const id = route.params.id;
    console.log(Title);

    const showAlert = () => {
        Alert.alert(
          "You Accepted Extra Work Request, view more details at View Extra Work Details page ",
          "",
          [
            { text: "OK", onPress: () =>  {
                
                console.log('pressed')
                fetch(`http://localhost:3000/deleteRequestfromNoti/${id}`,{
                    method: "delete",
                    headers: {
                        'Content-Type': "application/json",
                    }
                })
                .then(
                    navigation.navigate("UserMainScreen")
                )


            }}
          ]
        )
      }


      const Reject = () => {
        Alert.alert(
          "You rejected Extra Work Request",
          "",
          [
            { text: "OK", onPress: () =>  {
                
                console.log('pressed')
                fetch(`http://localhost:3000/deleteRequestfromNoti/${id}`,{
                    method: "delete",
                    headers: {
                        'Content-Type': "application/json",
                    }
                })
                .then(
                    navigation.navigate("UserMainScreen")
                )


            }}
          ]
        )
      }

    const Aceept = () => {
        if (Title == "Extra Work Request"){
            fetch("http://localhost:3000/addmorework", {
                method : "post",
                headers:{
                    'Content-Type': 'application/json' 
                },
                body:JSON.stringify({
                    by,
                    fors,
                    workDetails,
                    workAmount
                })
            })
            
            .then(res=>res.json())
            .then(data => {
                Alert.alert("Extra Request is accepted")
            }).catch(err => {
                console.log(err)
            })
            showAlert()
        }else{
            Alert.alert("its ratting")
        }
    }

      
   return (
        <ScrollView>

        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10}}> 
        <Text style={{color: "white", fontSize: 25, marginTop: 20, marginBottom: 20, textAlign: 'center'}}>Project Details</Text>

        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <Text  style={{color: "#10047c",fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 20, textAlign: 'center'}}>{Title}</Text>
        <Text  style={{color: "#10047c",fontSize: 20, fontWeight: 'bold', marginTop: 60, marginBottom: 20, textAlign: 'center'}}>Details</Text>
        <Text  style={{color: "#10047c",fontSize: 25, marginTop: 2, marginBottom: 20, textAlign: 'center'}}> {workDetails}</Text>

        <Text  style={{color: "#10047c",fontSize: 20, fontWeight: 'bold', marginTop: 60, marginBottom: 20, textAlign: 'center'}}>Work Amount</Text>
        <Text  style={{color: "#10047c",fontSize: 25, marginTop: 2, marginBottom: 20, textAlign: 'center'}}> {workAmount} </Text>

        <Button style={{marginTop: 50, backgroundColor: 'green', paddingLeft: 5, paddingRight: 5}} mode="contained" onPress={Aceept}>
             Accept request
            </Button>

        <Button style={{marginTop: 20, backgroundColor: 'red', paddingLeft: 5, paddingRight: 5, marginBottom: 100}} mode="contained" onPress={Reject}>
             Reject Request
            </Button> 
        </View>        
  </View>
        </ScrollView>
        
    )
}

