import React from 'react'
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, ScrollView, Alert} from 'react-native'
import { TextInput, Button, Checkbox } from 'react-native-paper';
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

export default function ServiceDetail() {
const navigation = useNavigation();
const [checked, setChecked] = React.useState(false);

    const [problemDescription, setproblemDescription] = React.useState('');
    console.log(problemDescription)
    return (
        
        <KeyboardAvoidingView  style={{backgroundColor: '#10047c',flex: 1, flexDirection: 'column'}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 25, paddingTop: 20, textAlign: 'center', paddingBottom: 20}}>Please Describe Your Problem in Detail</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
            <TextInput
            value={problemDescription}
            onChangeText={setproblemDescription}  
            style={{width: 350, marginTop: 40, height: 180}}
            multiline={true}
            label="Please Describe Your Problem Here"
            />

        <View style={{flexDirection: 'row', flex: 2, alignContent: 'center', alignItems: 'center', marginTop: 15}}>
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

           
        <Button icon="arrow-right-bold" style={{backgroundColor: '#10047c', marginTop: 20, marginBottom: 20}} mode="contained" onPress={() => {
              if (checked) {
                navigation.navigate('ServiceDetailStep2')}
               else{createTwoButtonAlert()}}}>
              Next
            </Button>
        </View>           
        </KeyboardAvoidingView>
    )
}

