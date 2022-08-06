import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import { TextInput, Button, Avatar, IconButton, Colors, ActivityIndicator  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAB } from 'react-native-paper';



export default function UserMainScreen({route}) {
    // console.log(route.params.hello)
const navigation = useNavigation();
const [data, setData] = useState([])
const [serviceData, setServiceData] = useState([])
const [newData, setNewData] = useState([])
const [loading, setLoading] = useState(true)


// function timeFunction() {
//     setTimeout(function(){ 
//         let userId = "65654655155151656"; 
//         fetch(`http://10.0.2.2:3000/service-recodes/${userId}`)
//     .then((res) => res.json())
//     .then (serviceData => {
//         console.log(serviceData)
//     setServiceData(serviceData)
// })}, 5000);
// }

    

async function fun () {
    let user = await AsyncStorage.getItem('user');
    let unique = null;
    setData(JSON.parse(user))

    
    let hello = JSON.parse(user)
    let userId = hello.data._id;
    let role = hello.data.role;
    let ustaadId = '';

    fetch(`http://10.0.2.2:3000/service-recodes/${userId}`)
            .then((res) => res.json())
            .then (serviceData => {
            setServiceData(serviceData)
            // serviceData.map((i, n) =>(
            //     console.log(i.ustaadId)
            // ))
        }) 
    }


     
        //     const ustaadId = [...new Set(serviceData.map(item => item.ustaadId))];
        //     console.log(ustaadId)
        //     fetch(`http://10.0.2.2:3000/user-recodrs/${ustaadId}`)
        //     .then((res) => res.json())
        //     .then (newData => {
        //         let pak = JSON.parse(newData)
        //     setNewData(pak)
        //  })
    
    

useEffect(() => {     
    fun()
        if(data.length > 0){
            setLoading(false)
            console.log(data)
            }
},[])



// console.log(data.email)
    if(data.length == 0){   
        return(
            <ActivityIndicator
               animating = {loading}
               color = '#bc2b78'
               size = "large"
               />
        )
    }
    else{
        id = data.data._id;
     

    return (
        <ScrollView>
        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10}}> 
            <Avatar.Image  size={60} source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 20, marginTop: 10, marginBottom: 10, textAlign: 'center'}}>{data.data.name}{'\n'} <Text style={{fontSize: 15}}>User</Text></Text>

        <View style={{flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
            <IconButton icon="cog" color='white' size={20} onPress={()=>navigation.navigate("UserSettings",{Id:id})} />
            <IconButton icon="bell" color='white' size={20} onPress={()=>navigation.navigate("UserNotification",{Id:id})}/>
            <IconButton icon="account" color='white' size={20} onPress={()=> navigation.navigate("UserProfile",{Id:id})} />
        </View>
        </View>
        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <Button style={{marginTop: 50, backgroundColor: '#10047c', paddingLeft: 5, paddingRight: 5}} mode="contained" onPress={() => navigation.navigate('Services',{Id:id})}>
    
             Services
            </Button>
            <Text style={{color: '#10047c', fontSize: 35, marginTop: 35, fontWeight: 'bold'}}>Order(s) Details</Text>    
              {serviceData.map((item, ndx)=>(

                <View key={ndx} style={{marginLeft: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
                    <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
                    <Text style={{padding: 8}}>Hello, {item._id}  {'\n'}{item.ustaadId}, <Text onPress={() => navigation.navigate("SeeServiceDetails", {Id: item._id})} style={{color: '#10047c', fontWeight: 'bold'}}>View Details</Text></Text>
                </View>
            ))}
        </View>
        <FAB
    icon="plus"
    style={{position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,}}
    onPress={() => console.log('Pressed')}
  />           
  </View>
        </ScrollView>
        
    )}
}


