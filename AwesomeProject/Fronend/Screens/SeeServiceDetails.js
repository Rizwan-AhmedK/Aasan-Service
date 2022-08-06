import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import { TextInput, Button, Avatar, IconButton, Colors  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';

export default function UserMainScreen({route}) {
const navigation = useNavigation();
const [servicedata, setServiceData] = useState([])
const [ustaaddata, setUstaadData] = useState([])
const userId = route.params.Id;
let Id = '';


useEffect(() => {
    const fetchFirst = async () => {
        const data = await fetch(`http://10.0.2.2:3000/service-recod/${userId}`)
        // setting the new found data in a useState
        const jsonData = await data.json()
        setServiceData(jsonData);
        console.log(jsonData, "servicedata")
        return jsonData //--> return data value
    }
    const fetchSecond = async (data1) => {
        console.log(data1, "data1")
        const Id = data1.ustaadId;
        console.log(Id,"id")
       const data = await fetch(`http://10.0.2.2:3000/service-recod-ustaad/${Id}`)
       const jsonData = await data.json()
       console.log(jsonData, "data")
        // setting the new found data in a useState
        setUstaadData(jsonData)
    }
    fetchFirst().then(data => fetchSecond(data));
    
}, []);












// useEffect(() => {

//     fetch(`http://10.0.2.2:3000/service-recod/${userId}`)
//     .then((res) => res.json())
//     .then (serviceData => {
//     setServiceData(serviceData)

    
// });

//     Id = servicedata.ustaadId;
//     console.log(Id)

//     fetch(`http://10.0.2.2:3000/service-recod-ustaad/${Id}`)
//     .then((res) => res.json())
//     .then (ustaadData => {
//     setUstaadData(ustaadData)
// }) 
// })

console.log(ustaaddata, "pakistan")

    return (
        <ScrollView>
        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10}}> 
            <Avatar.Image  size={60} source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 20, marginTop: 10, marginBottom: 10, textAlign: 'center'}}>{'\n'} <Text style={{fontSize: 15}}></Text>{ustaaddata.name} {'\n'} {ustaaddata.field}{'\n'}{ustaaddata.phone}</Text>

        </View>

       

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <Text style={{textAlign: "center", marginTop: 30, fontSize: 25}}>Your Ustaad will be there by {'\n'}<Text style={{marginTop: 40}}>Date and Time{'\n\n\n\n'}<Text style={{fontSize: 25, fontWeight: 'bold'}}>{servicedata.date}</Text></Text></Text>
        
        <Button style={{marginTop: 70, backgroundColor: 'green', paddingLeft: 5, paddingRight: 5}} mode="contained" onPress={() => navigation.navigate('TaskCompleted', {userID: servicedata.userId, ustaadID: servicedata.ustaadId})}>
            Work completed
        </Button>

        {/* <Button style={{marginTop: 20, backgroundColor: '#10047c', paddingLeft: 5, paddingRight: 5}} mode="contained" onPress={() => navigation.navigate('AddMoreWorkScreen', {userID: servicedata.userId, ustaadID: servicedata.ustaadId})}>
            Add More Work
        </Button> */}

        <Button style={{marginTop: 20, marginBottom: 95, backgroundColor: 'red', paddingLeft: 9, paddingRight: 9}} mode="contained" onPress={() => navigation.navigate('ComplainScreen', {userID: servicedata.userId, ustaadID: servicedata.ustaadId})}>
            File a Complain 
        </Button>


            {/* <Text style={{fontSize: 20}}>{'\n'}About Me</Text>
            <Text style={{padding: 5}} >{UstaadData.value.about}</Text> 
            <Text style={{fontSize: 15}}>{'\n\n'}Feedback from Previous Clients</Text>

        <View style={{marginLeft: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
            <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
            <Text style={{padding: 8}}>Rizwan Ahmed {'\n'}He was Very craetive! {'\n'}                   
             <Rating showRating={false} readonly={true} ratingCount={5} onFinishRating={(rating) => {console.log("ratting is" + rating)}}  imageSize={15} style={{ paddingVertical: 1 }}/></Text>
        </View>

        <View style={{marginLeft: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
            <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
            <Text style={{padding: 8}}>Rizwan Ahmed {'\n'}He was Very craetive! {'\n'}                   
             <Rating showRating={false} readonly={true} ratingCount={5} onFinishRating={(rating) => {console.log("ratting is" + rating)}}  imageSize={15} style={{ paddingVertical: 1 }}/></Text>
        </View>

        <View style={{marginLeft: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
            <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
            <Text style={{padding: 8}}>Rizwan Ahmed {'\n'}He was Very craetive! {'\n'}                   
             <Rating showRating={false} readonly={true} ratingCount={5} onFinishRating={(rating) => {console.log("ratting is" + rating)}}  imageSize={15} style={{ paddingVertical: 1 }}/></Text>
        </View>

        <View style={{marginLeft: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
            <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
            <Text style={{padding: 8}}>Rizwan Ahmed {'\n'}He was Very craetive! {'\n'}                   
             <Rating showRating={false} readonly={true} ratingCount={5} onFinishRating={(rating) => {console.log("ratting is" + rating)}}  imageSize={15} style={{ paddingVertical: 1 }}/></Text>
        </View> */}

        </View>           
  </View>
        </ScrollView>
        
    )
}

