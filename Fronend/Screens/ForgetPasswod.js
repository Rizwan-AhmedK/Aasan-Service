import React,{useState} from 'react'
import {Picker} from '@react-native-picker/picker';
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { lightBlue100 } from 'react-native-paper/lib/typescript/styles/colors';


export default function ForgetPassword() {
const navigation = useNavigation();
const [selectedLanguage, setSelectedLanguage] = useState();
const [text, setText] = useState('');

const onChangeText = text => setText(text);
const isErrors = () => {
    return !text.includes('@' && '.com');
  };

    return (
        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, paddingTop: 15, paddingBottom: 15}}>Forgot password</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
            <Text style={{color: '#10047c', fontSize: 25, marginTop: 100, fontWeight: 'bold'}}>Enter Your Email Address</Text> 
            <TextInput value={text} onChangeText={onChangeText} style={{width: 350, marginTop: 10}}
            label="Email"
            left={<TextInput.Icon name="email" color="#10047c"/>}
            mode='outlined'
            />
             <HelperText type="error" visible={isErrors()}>
        Email address is invalid!
      </HelperText>

           
            
            <Button icon="arrow-right-bold" style={{backgroundColor: '#10047c', marginTop: 25}} mode="contained" onPress={() => navigation.navigate('SignUpUstaadStep3')}>
              Submit
            </Button>
      
        </View>           
  </View>
        
    )
}

