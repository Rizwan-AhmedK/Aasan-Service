import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import { TextInput, Button, Avatar, IconButton, Colors  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



export default function UserNotification({route}) {
    console.log(route.params.Id);
const navigation = useNavigation();


    return (
        <ScrollView>
        <View style={{backgroundColor: '#10047c', flex: 1}}>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 1}}>


            <Text style={{color: '#10047c', fontSize: 35, marginTop: 35, fontWeight: 'bold'}}>Notification</Text> 

        {/* <View style={{marginLeft: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
            <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
            <Text style={{padding: 8}}>Hello, Rizwan  {'\n'}Pakistan, <Text style={{color: '#10047c', fontWeight: 'bold'}}>View Details</Text></Text>
        </View>

        <View style={{marginLeft: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
            <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
            <Text style={{padding: 8}}>Hello, Rizwan  {'\n'}Pakistan, <Text style={{color: '#10047c', fontWeight: 'bold'}}>View Details</Text></Text>
        </View> 

        <View style={{marginLeft: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
            <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
            <Text style={{padding: 8}}>Hello, Rizwan  {'\n'}Pakistan, <Text style={{color: '#10047c', fontWeight: 'bold'}}>View Details</Text></Text>
        </View>

        <View style={{marginLeft: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
            <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
            <Text style={{padding: 8}}>Hello, Rizwan  {'\n'}Pakistan, <Text onPress={() => navigation.navigate("ViewDetailsUser")} style={{color: '#10047c', fontWeight: 'bold'}}>View Details</Text></Text>
        </View> */}

        </View>           
  </View>
        </ScrollView>
        
    )
}

