import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function signUpUser() {
const navigation = useNavigation();

    return (
        <ScrollView>
        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, paddingTop: 15, paddingBottom: 15}}>Let's Get Started</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
            <Text style={{color: '#10047c', fontSize: 35, marginTop: 25, fontWeight: 'bold'}}>Create</Text> 
            <TextInput style={{width: 350, marginTop: 10}}
            label="Email"
            left={<TextInput.Icon name="account" color="#10047c"/>}
            mode='outlined'
            />

            <TextInput style={{width: 350, marginTop: 10}}
            label="Name"
            mode='outlined'
            secureTextEntry
            left={<TextInput.Icon name="lock" color="#10047c" />}
            />

            <TextInput style={{width: 350, marginTop: 10}}
            label="Password"
            mode='outlined'
            left={<TextInput.Icon name="lock" color="#10047c" />}
            />

            <TextInput style={{width: 350, marginTop: 10}}
            label="Re-Enter Password"
            mode='outlined'
            secureTextEntry 
            left={<TextInput.Icon name="lock" color="#10047c" />}
            />

            
            <Button icon="arrow-right-bold" style={{backgroundColor: '#10047c', marginTop: 35}} mode="contained" onPress={() => navigation.navigate('signUp_User_Step_2')}>
              Next
            </Button>

            <Text style={{paddingTop: 10}}>I already have an Account? SignIn</Text>
           
            
        </View>           
  </View>
        </ScrollView>
        
    )
}

