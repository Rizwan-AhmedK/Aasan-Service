import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, Alert} from 'react-native'
import { TextInput, Button, Modal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'; 

export default function signUpUserStep2({route}) {
  const name = route.params.Name;
  const email = route.params.Email;
  const pass = route.params.Pass;
  const repass = route.params.Repass;
  const role = route.params.Role;

  
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [frontCNIC, setFrontCNIC] = useState('')
  const [modal, setModal] = useState(false)


  const showAlert = () => {
    Alert.alert(
      "Your Account creation application is submited",
      "",
      [
        { text: "OK", onPress: () =>  navigation.navigate("SuccessAccountCreation")}
      ]
    )
  }


  const submitData = () => {
    fetch("http://localhost:3000/usersignup", {
        method : "post",
        headers:{
            'Content-Type': 'application/json' 
        },
        body:JSON.stringify({
            email,
            name,
            pass,
            repass,
            role,
            phone,
            city,
            frontCNIC
        })
    })
    
    .then(res=>res.json())
    .then(data => {
        Alert.alert("successfully added")
    }).catch(err => {
        console.log(err)
    })
    showAlert()
    
}
  

  let options={
    title: 'Select Image',
  type: 'library',
  options: {
    maxHeight: 200,
    maxWidth: 200,
    selectionLimit: 1,
    mediaType: 'photo',
    includeBase64: false,
  },
}

const openCamera = async() => {
  const images = await launchCamera(options);
  if (!images.didCancel){
    let newFile = {uri: images.assets[0].uri, type: images.assets[0].type, name : images.assets[0].fileName}
     handleUpload(newFile)
  }
}

const openGalary = async() => {
  const images = await launchImageLibrary(options);
 if (!images.didCancel){
   let newFile = {uri: images.assets[0].uri, type: images.assets[0].type, name : images.assets[0].fileName}
    handleUpload(newFile)
 }
}
 
const handleUpload = (image) => {
  const data = new FormData()
  data.append('file', image)
  data.append('upload_preset', 'usersAsanService')
  data.append('cloud_name', 'react-native-employee')

  fetch("https://api.cloudinary.com/v1_1/react-native-employee/image/upload", {
    method:"post",
    body:data
  }).then(res => res.json()).
  then(data => {
    console.log(data)
    setFrontCNIC(data.url)
    setModal(false)
  })
}



const navigation = useNavigation();

    return (
        <ScrollView>
        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, paddingTop: 15, paddingBottom: 15}}>Let's Get Started</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
            <Text style={{color: '#10047c', fontSize: 35, marginTop: 40, fontWeight: 'bold'}}>Create</Text> 

            <TextInput style={{width: 350, marginTop: 10}}
            label="Phone"
            mode='outlined'
            keyboardType='numeric'
            onChangeText={setPhone}
            value={phone}
            left={<TextInput.Icon name="phone" color="#10047c" />}
            />
      

            <TextInput style={{width: 350, marginTop: 10}}
            label="City"
            onChangeText={setCity}
            value={city}
            mode='outlined'
            left={<TextInput.Icon name="city" color="#10047c" />}
            />

            <Text style={{marginTop: 20, fontWeight: 'bold'}}>Upload Your CNIC Card</Text>
                    
            <Button icon={frontCNIC==""?"image-area":"check"}  style={{backgroundColor: '#10047c', marginTop: 20}} mode="contained" onPress={() => setModal(true)}>
              Upload CNIC
            </Button>

            <Button style={{backgroundColor: '#10047c', marginTop: 40}} mode="contained" 
            onPress={() => {if(!city.trim()){Alert.alert("Please enter your city name")}
            else if(!frontCNIC.trim()){Alert.alert("Please Upload CNIC")}
            else if(!phone.trim()){Alert.alert("Plaese enter your phone number")} else { submitData()}} 
           }>
              Submit
            </Button>
        </View>  
        <Modal
          animatedType="slide"
          transparent={false}
          visible={modal}
          style={{backgroundColor: "white", position: 'absolute', bottom: 2, width: "100%"}}
        >

    <View style={{alignContent: 'center', alignItems: 'center', flexDirection: "row", justifyContent: 'space-around'}}>
    <Button icon={frontCNIC==""?"camera":"check"} style={{backgroundColor: '#10047c'}} mode="contained"  onPress={openCamera}>
        Camera
    </Button>

    <Button icon={frontCNIC==""?"image-area":"check"} style={{backgroundColor: '#10047c'}} mode="contained" onPress={openGalary}>
      Galary
    </Button>
    </View>
     <Button style={{backgroundColor: 'red', marginTop: 20}} mode="contained" onPress={() => setModal(false)}>
      cancel
    </Button>
      
  </Modal>         
  </View>

    </ScrollView>       
    )
}