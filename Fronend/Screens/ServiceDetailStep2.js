import React from 'react'
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, ScrollView, Alert} from 'react-native'
import { TextInput, Button, Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function ServiceDetail() {
const navigation = useNavigation();
const [checked, setChecked] = React.useState(false);

    const [text, setText] = React.useState('');
    return (
        
        <KeyboardAvoidingView  style={{backgroundColor: '#10047c',flex: 1, flexDirection: 'column'}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 25, paddingTop: 15, textAlign: 'center', paddingBottom: 15}}>Please Describe Your Problem in Detail</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
            <TextInput style={{width: 350, marginTop: 40, height: 180}}
            multiline={true}
            label="hello"
            />
          
        <Button icon="arrow-right-bold" style={{backgroundColor: '#10047c', marginTop: 20, marginBottom: 20}} mode="contained" onPress={() => {
              if (checked) {
                navigation.navigate('SuccessAccountCreation')}
               else{createTwoButtonAlert()}}}>
              Next
            </Button>

            
        </View>           
        </KeyboardAvoidingView>
        
    )
}

