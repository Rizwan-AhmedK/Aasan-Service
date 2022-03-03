import React from 'react'
import { View, Text, Image, KeyboardAvoidingView} from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function LoginUstaad() {
const navigation = useNavigation();

    const [text, setText] = React.useState('');
    return (

        <KeyboardAvoidingView  style={{backgroundColor: '#10047c',flex: 1, flexDirection: 'column'}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, paddingTop: 15}}>Welcome Back!</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
            <Text style={{color: '#10047c', fontSize: 35, paddingTop: 40, fontWeight: 'bold'}}>Login Now</Text> 
            <TextInput style={{width: 350, marginTop: 40}}
            label="CNIC/Email"
            secureTextEntry
            left={<TextInput.Icon name="account" color="#10047c"/>}
            />

            <TextInput style={{width: 350, marginTop: 20}}
            label="Password"
            secureTextEntry
            left={<TextInput.Icon name="lock" color="#10047c" />}
            />
            <Text onPress={() => navigation.navigate("ForgetPassword")}>Forgot Password?</Text>

            <Button style={{backgroundColor: '#10047c', marginTop: 40}} mode="contained" onPress={() => navigation.navigate("UstaadMainScreen")}>
              Login
            </Button>

            <Button style={{marginTop: 20, color: "#10047c"}} mode="outlined" onPress={() => navigation.navigate("SignUpUstaad")}>
              Create Account
            </Button>            
        </View>           
        </KeyboardAvoidingView>
        
    )
}
