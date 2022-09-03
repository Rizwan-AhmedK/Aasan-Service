import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, Alert} from 'react-native'
import { TextInput, Button, Avatar, IconButton, Colors, Title  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Logout } from '../../src/store/actions';
import { List } from 'react-native-paper';


export default function ExtraWorkDetails({route, navigation}) {


    // const Title = route.params.Title;
    // const by = route.params.by;
    // const fors = route.params.for;
    // const workDetails = route.params.deatils;
    // const Message = route.params.message;
    // const workAmount = route.params.amount;
    // const id = route.params.id;
    // console.log(Title);

    // const showAlert = () => {
    //     Alert.alert(
    //       "Your Account creation application is submited",
    //       "",
    //       [
    //         { text: "OK", onPress: () =>  {
                
    //             console.log('pressed')
    //             fetch(`http://localhost:3000/deleteRequestfromNoti/${id}`,{
    //                 method: "delete",
    //                 headers: {
    //                     'Content-Type': "application/json",
    //                 }
    //             })
    //             .then(
    //                 navigation.navigate("UserMainScreen")
    //             )


    //         }}
    //       ]
    //     )
    //   }


    // const Aceept = () => {
    //     if (Title == "Extra Work Request"){
    //         fetch("http://localhost:3000/addmorework", {
    //             method : "post",
    //             headers:{
    //                 'Content-Type': 'application/json' 
    //             },
    //             body:JSON.stringify({
    //                 by,
    //                 fors,
    //                 workDetails,
    //                 workAmount
    //             })
    //         })
            
    //         .then(res=>res.json())
    //         .then(data => {
    //             Alert.alert("Extra Request is accepted")
    //         }).catch(err => {
    //             console.log(err)
    //         })
    //         showAlert()
    //     }else{
    //         Alert.alert("its ratting")
    //     }
    // }

      
   return (
        <ScrollView>

        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10}}> 
        <Text style={{color: "white", fontSize: 25, marginTop: 20, marginBottom: 20, textAlign: 'center'}}>Extra Work Details</Text>

        </View>

        <View style={{backgroundColor: 'white', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <List.Section>
    <List.Subheader>List of Extra work</List.Subheader>
    <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
                <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1}} />

  </List.Section>
        </View>        
  </View>
        </ScrollView>
        
    )
}

