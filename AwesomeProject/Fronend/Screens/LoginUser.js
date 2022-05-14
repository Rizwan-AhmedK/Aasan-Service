import React, { useEffect, useState } from 'react'
import { View, Text, Image, KeyboardAvoidingView} from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Login } from '../../src/store/actions';



export default function LoginUser() {
  

const navigation = useNavigation();



const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const [loading, setLoading] = useState(true);
const [data, setData] = useState([]);



const dispatch = useDispatch();
const submit = () => {
  dispatch(Login(username, password))
  // navigation.navigate("UserMainScreen", {hello: "pakistan"})
}

const navigate = () => {
  navigation.navigate("SignUp_User")
}
    return (
        
        <KeyboardAvoidingView  style={{backgroundColor: '#10047c',flex: 1, flexDirection: 'column'}}>
    
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, paddingTop: 15}}>Welcome Back!</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
            <Text style={{color: '#10047c', fontSize: 35, paddingTop: 20, fontWeight: 'bold'}}>Login Now</Text> 
            <TextInput style={{width: 350, marginTop: 20}}
            label="CNIC/Email"
            left={<TextInput.Icon name="account" color="#10047c"/>}
            value={username}
            onChangeText={(text) => setUsername(text)}
            />
            

            <TextInput style={{width: 350, marginTop: 20}}
            label="Password"
            secureTextEntry
            left={<TextInput.Icon name="lock" color="#10047c" />}
            value={password}
            onChangeText={(text) => setPassword(text)}
            />
            <Text onPress={() => navigation.navigate("ForgetPassword")}>Forgot Password?</Text>


            <Button style={{backgroundColor: '#10047c', marginTop: 20}} mode="contained" onPress={submit}>
              Login
            </Button>

            <Button style={{marginTop: 20, color: "#10047c"}} mode="outlined" onPress={navigate}>
              Create User Account
            </Button>

            <Button style={{marginTop: 20, color: "#10047c"}} mode="outlined" onPress={()=>navigation.navigate("SignUpUstaad")}>
              Create Ustaad Account
            </Button>

            
        </View>           
        </KeyboardAvoidingView>
        
    )
}

