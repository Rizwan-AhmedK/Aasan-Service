import React,{useEffect, useState} from 'react'
import { View, Text, Image, ScrollView, Alert, MaskedViewComponent} from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';



export default function EnterDetails({route}) {
  const [data, setData] = useState([])

const id = route.params.userid;
const ustaadId = route.params.ustaadId;
const field = route.params.field;
const ProblemStatement = route.params.ProblemStatement;
const latitude = route.params.latitude;
const longitude = route.params.logitude;

console.log(id, field, ProblemStatement, latitude, longitude, ustaadId)


useEffect(() => {
  fetch(`http://localhost:3000/user-recodrs/${id}`)
  .then((res) => res.json())
  .then (data => {
    setData(data)
  })
},[])



const navigation = useNavigation();
const [date, setDate] = useState(new Date())
const [open, setOpen] = useState(false)
const [serviceDetailsEmail, setServiceDetailsEmail] = useState('')
const [serviceDetailsName, setServiceDetailsName] = useState('')
const [serviceDetailsPhone, setServiceDetailsPhone] = useState('')
const [serviceDetailsAddress, setServiceDetailsAddress] = useState('')

console.log(data.email)

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
        title="open" 
        onPress={() => setOpen(true)} 
        style={{marginTop: 5, backgroundColor: '#10047c'}} mode="contained">Select Date and Time</Button>
  
      <DatePicker
        modal
        open={open}
        date={date}
        setHours={8}
        minimumDate={new Date(date)}
        maximumDate={new Date("2022-12-31")}
        textColor="#10047c"
        minuteInterval={10}
        
        onConfirm={(date) => {setOpen(false) 
            setDate(date) 
            console.log(date) }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      

  

            <Button icon="arrow-right-bold" style={{backgroundColor: '#10047c', marginTop: 25}} mode="contained" onPress={() => {
              if(!date){Alert.alert("Plaese enter date")}
              else if(!serviceDetailsEmail.trim()) {Alert.alert("Please enter email")}
              else if(!serviceDetailsName.trim()) {Alert.alert("Plaese enetr the name")}
              else if(!serviceDetailsPhone.trim()) {Alert.alert("Please enter phone number")}
              else if(!serviceDetailsAddress.trim()) {Alert.alert("Please Enter complete address")}
              else{navigation.navigate('ShowInspectionPrice', {
                UserId: id, 
                Field: field, 
                problemStatement: ProblemStatement, 
                Latitude: latitude, 
                Longititude: longitude,
                UstaadId:ustaadId,
                Date:date,
                Email: serviceDetailsEmail,
                Name: serviceDetailsName,
                Phone: serviceDetailsPhone,
                Address: serviceDetailsAddress
              })}
            }}>

              Next
            </Button>   
        </View>           
  </View>
        </ScrollView>
    )
}

