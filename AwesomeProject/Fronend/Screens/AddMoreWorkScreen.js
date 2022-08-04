import React from 'react'
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native'
import { TextInput, Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function AddMoreWorkScreen({route}) {
    console.log(route.params.ustaadID);
    console.log(route.params.userID);
const navigation = useNavigation();

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
                label="Enter Task Details"/>


            <Text style={{marginTop: 70}}>Amount for your Servies</Text>

            <TextInput style={{width: 350, marginTop: 20}}
                label="Amount"
                keyboardType = 'numeric'
                />

            
            <Button style={{backgroundColor: 'green', marginTop: 80}} mode="contained" onPress={() => navigation.navigate("SuccessNotification")}>
              Submit Request
            </Button>

  
        </View>           
        </KeyboardAvoidingView>
        
    )
}

