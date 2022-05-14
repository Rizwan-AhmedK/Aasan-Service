import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import { TextInput, Button, Avatar, IconButton, Colors  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function ViewDetailsUser() {
const navigation = useNavigation();

    return (
        <ScrollView>
        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10}}> 
            <Avatar.Image  size={60} source={require('../../src/assets/LOGIN1.jpg')} />
        <Text style={{color: "white", fontSize: 20, marginTop: 10, marginBottom: 10, textAlign: 'center'}}>Rizwan Ahmed {'\n'} <Text style={{fontSize: 15}}>Electrician</Text></Text>

        <View style={{flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
        <IconButton icon="cog" color='white' size={20} onPress={() => console.log('Pressed')} />
        <IconButton icon="bell" color='white' size={20} onPress={() => console.log('Pressed')} />
        <IconButton icon="account" color='white' size={20} onPress={() => console.log('Pressed')} />
        </View>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
            <Text style={{color: '#10047c', fontSize: 35, marginTop: 25, fontWeight: 'bold'}}>Issue Details</Text> 
            <Text style={{fontSize: 15, marginTop: 15, fontWeight: 'bold'}}>Hello, i want you to make reparing of my electric wires,
             basically i need new wiring, could you please come and  have  a lok on it.</Text> 


            <Text style={{color: '#10047c', fontSize: 35, marginTop: 65, fontWeight: 'bold'}}>Date and Time</Text> 
            <Text style={{fontSize: 25, marginTop: 15, fontWeight: 'bold'}}>July 2, 2022, 11:00 am</Text>

            <Button style={{backgroundColor: 'green', marginTop: 70}} mode="contained" onPress={() => navigation.navigate("TaskCompleted")}>
              Task Completed
            </Button>

            <Button style={{backgroundColor: 'red', marginTop: 10, paddingLeft: 8, paddingRight: 8, marginBottom: 20}} mode="contained" onPress={() => navigation.navigate("ComplainScreen")}>
              Complain Now
            </Button>
        </View>           
  </View>
        </ScrollView>
        
    )
}

