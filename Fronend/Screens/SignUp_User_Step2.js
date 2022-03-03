import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function signUpUserStep2() {
const navigation = useNavigation();

    return (
        <ScrollView>
        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, paddingTop: 15, paddingBottom: 15}}>Let's Get Started</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
            <Text style={{color: '#10047c', fontSize: 35, marginTop: 40, fontWeight: 'bold'}}>Create</Text> 

            <TextInput style={{width: 350, marginTop: 10}}
            label="Phone"
            onFocus={() => setIsEnable(true)}
            mode='outlined'
            left={<TextInput.Icon name="lock" color="#10047c" />}
            />

            <TextInput style={{width: 350, marginTop: 10}}
            label="City"
            onFocus={() => setIsEnable(true)}
            mode='outlined'
            left={<TextInput.Icon name="lock" color="#10047c" />}
            />

            <Text style={{marginTop: 20, fontWeight: 'bold'}}>Upload Your CNIC Card</Text>

            <Button  style={{backgroundColor: '#10047c', marginTop: 20}} mode="contained" >
              Front Side Of CNIC
            </Button>

            <Button style={{marginTop: 10, backgroundColor: '#10047c', paddingLeft: 5, paddingRight: 5}} mode="contained" onPress={() => navigation.navigate('SignUp_User')}>
             Back Side Of CNIC
            </Button>
            
            
            <Button icon="check" style={{backgroundColor: '#10047c', marginTop: 40}} mode="contained" onPress={() => navigation.navigate('SuccessAccountCreation')}>
              Submit
            </Button>


           
            
        </View>           
  </View>
        </ScrollView>
        
    )
}

