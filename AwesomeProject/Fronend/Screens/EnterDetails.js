import React,{useState} from 'react'
import { View, Text, Image, ScrollView} from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';



export default function EnterDetails() {
const navigation = useNavigation();
const [date, setDate] = useState(new Date())
const [open, setOpen] = useState(false)
const [serviceDetailsEmail, setServiceDetailsEmail] = useState('')
const [serviceDetailsName, setServiceDetailsName] = useState('')
const [serviceDetailsPhone, setServiceDetailsPhone] = useState('')
const [serviceDetailsAddress, setServiceDetailsAddress] = useState('')

console.log(serviceDetailsAddress)

    return (
        <ScrollView>
        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, paddingTop: 15, paddingBottom: 15}}>Enter Details</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
            <TextInput
            value={serviceDetailsEmail}
            onChangeText={setServiceDetailsEmail}
            style={{width: 350, marginTop: 30}}
            label="Email"
            left={<TextInput.Icon name="account" color="#10047c"/>}
            mode='outlined'
            />

            <TextInput
            value={serviceDetailsName}
            onChangeText={setServiceDetailsName} 
            style={{width: 350, marginTop: 10}}
            label="Name"
            mode='outlined'
            secureTextEntry
            left={<TextInput.Icon name="lock" color="#10047c" />}
            />

            <TextInput
            value={serviceDetailsPhone}
            onChangeText={setServiceDetailsPhone} 
            style={{width: 350, marginTop: 10}}
            label="Phone"
            mode='outlined'
            left={<TextInput.Icon name="lock" color="#10047c" />}
            />


            <TextInput 
            value={serviceDetailsAddress}
            onChangeText={setServiceDetailsAddress}
            style={{width: 350, marginTop: 10}}
            multiline
            label="complete address"
            mode='outlined'
            left={<TextInput.Icon name="lock" color="#10047c" />}
            />


<Text style={{marginTop: 20, fontWeight: 'bold'}} >Please select Date and Time</Text>


    <Button 
        title="SELECT DATE AND TIME" 
        onPress={() => setOpen(true)} 
        style={{marginTop: 5}} mode="contained"/>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {setOpen(false) 
            setDate(date) 
            console.log(date) }}
        onCancel={() => {
          setOpen(false)
        }}

       
      />    

            <Button icon="arrow-right-bold" style={{backgroundColor: '#10047c', marginTop: 25}} mode="contained" onPress={() => navigation.navigate('ShowInspectionPrice')}>
              Next
            </Button>

           
            
        </View>           
  </View>
        </ScrollView>
        
    )
}

