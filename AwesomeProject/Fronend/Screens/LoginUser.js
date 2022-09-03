import React, { useEffect, useState } from 'react'
import { View, Text, Image, KeyboardAvoidingView, Alert} from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Login } from '../../src/store/actions';



export default function LoginUser() {
  

const navigation = useNavigation();



const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [passnull, setPassNull] = useState(true);



const [data, setData] = useState([])
const [loading, setLoading] = useState(false)




const dispatch = useDispatch();
const submit = () => {
  if(!username.trim()){Alert.alert("Please Enter the Email")}
  else if(!password.trim()){Alert.alert("Please Enter the Password")}

  else{dispatch(Login(username, password))}
  
 
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
            secureTextEntry={passnull}
            right={<TextInput.Icon name="eye" color="#10047c" onPress={()=> setPassNull(false)}/>}
            left={<TextInput.Icon name="lock" color="#10047c" />}
            value={password}
            onChangeText={(text) => setPassword(text)}
            />


            <Button style={{backgroundColor: '#10047c', marginTop: 50, width: '80%', marginBottom: 30}} mode="contained" onPress={submit}>
              Login
            </Button>

            <Text>________________ OR ________________</Text>

            <Button style={{marginTop: 40, color: "#10047c", width: '80%'}} mode="outlined" onPress={navigate}>
              Create User Account
            </Button>

            <Button style={{marginTop: 20, color: "#10047c", width: '80%'}} mode="outlined" onPress={()=>navigation.navigate("SignUpUstaad")}>
              Create Ustaad Account
            </Button>

            
        </View>           
        </KeyboardAvoidingView>
        
    )
}

