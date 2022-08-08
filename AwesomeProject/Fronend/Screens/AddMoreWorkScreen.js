import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, ScrollView, Alert} from 'react-native'
import { TextInput, Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function AddMoreWorkScreen({route}) {
const navigation = useNavigation();

let workaddedby, workaddedfor;
    const Role = route.params.Role;
    if(Role == 'user'){
        workaddedfor = route.params.ustaadID;
        workaddedby = route.params.userID;}
    else{
        workaddedby = route.params.ustaadID;
        workaddedfor = route.params.userID;
    }
    const [workDetails, setWorkDetails] = useState('');
    const [workAmount, setWorkAmount] = useState(0);
    console.log(workDetails)
    console.log(workAmount)


    const showAlert = () => {
        Alert.alert(
          "Your extra work request has been sent",
          "",
          [
            { text: "OK", onPress: () => {
                if(Role == 'user'){
                    navigation.navigate("UserMainScreen")}
                else{navigation.navigate("UstaadMainScreen")}
            }  
        }
          ]
        )
      }

const submitData = () => {
    fetch("http://10.0.2.2:3000/addmorework", {
        method : "post",
        headers:{
            'Content-Type': 'application/json' 
        },
        body:JSON.stringify({
            workaddedby, 
            workaddedfor,
            workDetails,
            workAmount

        })
    })
    
    .then(res=>res.json())
    .then(data => {
      console.log(data)
        
    }).catch(err => {
        console.log(err)
    })
  
    showAlert()
   
  }

    const [text, setText] = React.useState('');
    return (
        
        <KeyboardAvoidingView  style={{backgroundColor: '#10047c',flex: 1, flexDirection: 'column'}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, paddingTop: 15}}>Add more work</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
           <Text style={{marginTop: 20}}>Task Details</Text>

           <TextInput style={{width: 350, marginTop: 20}}
                value={workDetails}
                onChangeText={setWorkDetails}
                label="Enter Task Details"/>


            <Text style={{marginTop: 70}}>Amount for your Servies</Text>

            <TextInput style={{width: 350, marginTop: 20}}
                value={workAmount}
                onChangeText={setWorkAmount}
                label="Amount"
                keyboardType = 'numeric'
                />

            
            <Button style={{backgroundColor: 'green', marginTop: 80}} mode="contained" onPress={submitData}>
              Submit Request
            </Button>

  
        </View>           
        </KeyboardAvoidingView>
        
    )
}

