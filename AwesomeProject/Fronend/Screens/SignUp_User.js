import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, Alert} from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function signUpUser({route}) {
const navigation = useNavigation();
// console.log(route.params.Username)

const [email, setEmail] = React.useState('');
const [name, setName] = React.useState('');
const [pass, setPass] = React.useState('');
const [repass, setrePass] = React.useState('');
const role = 'User';

const submitData = () => {
    navigation.navigate("signUp_User_Step_2", {Name: name, Email: email, Pass: pass, Repass: repass, Role: role})
}

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
            value={email}
            onChangeText={setEmail}
            left={<TextInput.Icon name="email" color="#10047c"/>}
            mode='outlined'
            />

            <TextInput style={{width: 350, marginTop: 10}}
            label="Name"
            mode='outlined'
            value={name}
            onChangeText={setName}
            left={<TextInput.Icon name="account" color="#10047c" />}
            />

            <TextInput style={{width: 350, marginTop: 10}}
            label="Password"
            mode='outlined'
            value={pass}
            onChangeText={setPass}
            secureTextEntry 
            left={<TextInput.Icon name="lock" color="#10047c" />}
            />

            <TextInput style={{width: 350, marginTop: 10}}
            label="Re-Enter Password"
            mode='outlined'
            value={repass}
            onChangeText={setrePass}
            secureTextEntry 
            left={<TextInput.Icon name="lock" color="#10047c" />}
            />

            
            <Button icon="arrow-right-bold" style={{backgroundColor: '#10047c', marginTop: 35}} mode="contained"
             onPress={() => {if(pass !== repass){Alert.alert("Your password does not matched")}
             else if(!pass.trim()){Alert.alert("Please enter your password")}
             else if(!email.trim()){Alert.alert("Plaese enter your email")}
             else if(!name.trim()){Alert.alert("please enter your name")} else{submitData()}}
             }>
              Next
            </Button>

            <Text style={{paddingTop: 10}}>I already have an Account?<Text style={{fontWeight: 'bold', color: "#10047c"}}  onPress={() => navigation.navigate('LoginUser')}>Login</Text></Text>
           
            
        </View>           
  </View>
        </ScrollView>
        
    )
}

