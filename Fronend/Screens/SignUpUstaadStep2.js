import React,{useState} from 'react'
import {Picker} from '@react-native-picker/picker';
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import { TextInput, Button, HelperText } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { lightBlue100 } from 'react-native-paper/lib/typescript/styles/colors';


export default function signUpUstaadStep2() {
const navigation = useNavigation();
const [selectedLanguage, setSelectedLanguage] = useState();
const [text, setText] = useState('');

const onChangeText = text => setText(text);
const isErrors = () => {
    return !text.includes('0' && 'b');
  };

    return (
        <ScrollView>
        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, paddingTop: 15, paddingBottom: 15}}>Let's Get Started</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
            <Text style={{color: '#10047c', fontSize: 35, marginTop: 25, fontWeight: 'bold'}}>Create</Text> 
            <TextInput value={text} maxLength={11} onChangeText={onChangeText} style={{width: 350, marginTop: 10}}
            label="Phone"
            left={<TextInput.Icon name="account" color="#10047c"/>}
            mode='outlined'
            />
             <HelperText type="error" visible={isErrors()}>
        Email address is invalid!
      </HelperText>

            <TextInput style={{width: 350, marginTop: 10}}
            label="City"
            mode='outlined'
            secureTextEntry
            left={<TextInput.Icon name="lock" color="#10047c" />}
            />


            

            <TextInput style={{width: 350, marginTop: 10}}
            label="Re-Enter Password"
            mode='outlined'
            secureTextEntry 
            left={<TextInput.Icon name="lock" color="#10047c" />}
            />

            <Picker label="Enter Your Profession" style={{width: 380, borderWidth: 10}}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Electrician" value="Electrician" />
            <Picker.Item label="Ac Machenic" value="AcMachenic" />
            <Picker.Item label="Computer Enginer" value="ComputerEnginer" />
            <Picker.Item label="Car Mahenic" value="CarMachenic" />
            </Picker>

            
            <Button icon="arrow-right-bold" style={{backgroundColor: '#10047c', marginTop: 25}} mode="contained" onPress={() => navigation.navigate('SignUpUstaadStep3')}>
              Next
            </Button>

            <Text style={{paddingTop: 10}}>I already have an Account? SignIn</Text>
           
            
        </View>           
  </View>
        </ScrollView>
        
    )
}

