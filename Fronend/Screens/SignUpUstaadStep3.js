import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, Picker, Alert} from 'react-native'
import { TextInput, Button, Checkbox  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const createTwoButtonAlert = () =>
Alert.alert(
  "Please Agree With Our Terms And Conditions",
  "",
  [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "OK", onPress: () => console.log("OK Pressed") }
  ]
);
export default function signUpUstaadStep3() {
const navigation = useNavigation();
const [checked, setChecked] = React.useState(false);

    return (
        <ScrollView>
        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, paddingTop: 15, paddingBottom: 15}}>Let's Get Started</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
            <Text style={{color: '#10047c', fontSize: 45, marginTop: 25, fontWeight: 'bold'}}>Create</Text> 
            <TextInput style={{width: 350, marginTop: 10}}
            label="About Yourself"
            left={<TextInput.Icon name="account" color="#10047c"/>}
            mode='outlined'
            />

            <Button  style={{backgroundColor: '#10047c', marginTop: 30}} mode="contained" >
              Front Side Of CNIC
            </Button>

            <Button style={{marginTop: 15, backgroundColor: '#10047c', paddingLeft: 5, paddingRight: 5}} mode="contained" >
             Back Side Of CNIC
            </Button>

            <Button style={{marginTop: 15, backgroundColor: '#10047c'}} mode="contained" >
             Any Field Certificate 
            </Button>
        <View style={{flexDirection: 'row', flex: 1, alignContent: 'center', alignItems: 'center', marginTop: 25}}>
            <Checkbox
              Type='checked'
              color='#10047c'
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text>I agree With All <Text style={{color: '#10047c', fontWeight: 'bold'}}>Terms And Conditions.</Text></Text>
    </View>
            
            <Button icon="check" style={{backgroundColor: '#10047c', marginTop: 20}} mode="contained" onPress={() => {
              if (checked) {
                navigation.navigate('SuccessAccountCreation')}
               else{createTwoButtonAlert()}}}>
              Submit
            </Button>
           
            
        </View>           
  </View>
        </ScrollView>
        
    )
}

