import React,{useState} from 'react'
import {Picker} from '@react-native-picker/picker';
import { View, Text, Image, StyleSheet, ScrollView, Alert} from 'react-native'
import { TextInput, Button, HelperText } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { black } from 'react-native-paper/lib/typescript/styles/colors';


function signUpUstaadStep2({ navigation, route }) {
const name = route.params.Name;
const email = route.params.Email;
const pass = route.params.Pass;
const rePass = route.params.RePass;
const role = route.params.Role;
  


const [selectedLanguage, setSelectedLanguage] = useState("Electrician");
const [city, setCity] = useState("");
const [phone, setPhone] = useState("");



    return (
        <ScrollView>
        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, paddingTop: 15, paddingBottom: 15}}>Let's Get Started</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
            <Text style={{color: '#10047c', fontSize: 35, marginTop: 35, fontWeight: 'bold'}}>Create</Text> 
            <TextInput maxLength={11} style={{width: 350, marginTop: 10}}
            keyboardType= "numeric"
            label="Phone"
            onChangeText={setPhone}
            value={phone}
            left={<TextInput.Icon name="phone" color="#10047c"/>}
            mode='outlined'
            />

            <TextInput style={{width: 350, marginTop: 15}}
            label="City"
            mode='outlined'
            onChangeText={setCity}
            value={city}
            left={<TextInput.Icon name="navigation" color="#10047c" />}
            />

          <Text style={{marginTop: 55, fontWeight: 'bold'}}>Please Choose Your Field of Work</Text>
            <Picker label="Enter Your Profession" 
            style={{width: 350, borderWidth: 10, marginTop: 25, backgroundColor: "#10047c", color: "white"}}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)}>
            <Picker.Item label="Electrician" value="electrician" />
            <Picker.Item label="Ac Machenic" value="AcMachenic" />
            <Picker.Item label="Computer Mechanic" value="ComputerEnginer" />
            <Picker.Item label="Plumber" value="plumber" />
            <Picker.Item label="Car Mahenic" value="CarMachenic" />
            <Picker.Item label="Carpenter" value="Carpenter" />
            </Picker>
          
            <Button icon="arrow-right-bold" style={{backgroundColor: '#10047c', marginTop: 55, width: '80%'}} mode="contained" 
            onPress={() => {
            if(!city.trim()){Alert.alert("Please enter your city name")}
            else if(!selectedLanguage.trim()){Alert.alert("Please select a field")}
            else if(!phone.trim()){Alert.alert("Plaese enter your phone number")}
            else{
              navigation.navigate('SignUpUstaadStep3',  {
              Name: name,
              Email: email,
              Pass: pass,
              RePass: rePass, 
              Field: selectedLanguage, 
              Phone: phone, 
              City: city,
              Role: role}
              )}}}>
            Next</Button>

            <Text style={{paddingTop: 10, marginBottom: 78}}>I already have an Account?<Text style={{fontWeight: 'bold', color: "#10047c"}} 
             onPress={() => navigation.navigate('LoginUser', {user: "Ustaad"})}>Login</Text></Text>
            
           
            
        </View>           
      </View>
    </ScrollView>
        
    )
}

export default signUpUstaadStep2;