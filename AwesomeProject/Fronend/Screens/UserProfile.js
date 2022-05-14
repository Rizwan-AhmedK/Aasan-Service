import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import { TextInput, Button, Avatar, IconButton, Colors  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Logout } from '../../src/store/actions';


export default function UserMainScreen() {
const navigation = useNavigation();
const dispatch = useDispatch();
const submit = () => {
  dispatch(Logout())
}

    return (
        <ScrollView>
        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10}}> 
            <Avatar.Image  size={60} source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 20, marginTop: 10, marginBottom: 10, textAlign: 'center'}}>Rizwan Ahmed {'\n'} <Text style={{fontSize: 15}}>Electrician</Text></Text>

        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <Button style={{marginTop: 50, backgroundColor: '#10047c', paddingLeft: 5, paddingRight: 5}} mode="contained" onPress={submit}>
             LogOut
            </Button>


            <Text style={{color: '#10047c', fontSize: 35, marginTop: 35, fontWeight: 'bold'}}>Order(s) Details</Text> 

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

