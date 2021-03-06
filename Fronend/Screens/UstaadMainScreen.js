import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import { TextInput, Button, Avatar, IconButton, Colors  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function UstaadMainScreen() {
const navigation = useNavigation();

    return (
        <ScrollView>
        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10}}> 
            <Avatar.Image  size={60} source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 20, marginTop: 10, marginBottom: 10, textAlign: 'center'}}>Rizwan Ahmed {'\n'} <Text style={{fontSize: 15}}>Electrician</Text></Text>

        <View style={{flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
        <IconButton icon="cog" color='white' size={20} onPress={() => console.log('Pressed')} />
        <IconButton icon="bell" color='white' size={20} onPress={() => console.log('Pressed')} />
        <IconButton icon="account" color='white' size={20} onPress={() => console.log('Pressed')} />
        </View>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
            <Text style={{color: '#10047c', fontSize: 35, marginTop: 25, fontWeight: 'bold'}}>Total Earning</Text> 
            <Text style={{color: '#10047c', fontSize: 25, marginTop: 15, fontWeight: 'bold'}}>Rs. 1000</Text> 


            <Text style={{color: '#10047c', fontSize: 35, marginTop: 35, fontWeight: 'bold'}}>Order(s) Details</Text> 

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
            <Text style={{padding: 8}}>Hello, Rizwan  {'\n'}Pakistan, <Text style={{color: '#10047c', fontWeight: 'bold'}}>View Details</Text></Text>
        </View>

        <View style={{marginLeft: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
            <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
            <Text style={{padding: 8}}>Hello, Rizwan  {'\n'}Pakistan, <Text onPress={() => navigation.navigate("ViewDetailsUstaad")} style={{color: '#10047c', fontWeight: 'bold'}}>View Details</Text></Text>
        </View>
        
            
        </View>           
  </View>
        </ScrollView>
        
    )
}

