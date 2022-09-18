import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, ScrollView, Picker, Alert, Modal, ActivityIndicator} from 'react-native'
import { TextInput, Button, Checkbox  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'; 
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
export default function signUpUstaadStep3({route}) {
  console.log(route.params.Field);
const navigation = useNavigation();

const [checked, setChecked] = useState(false);
const [about, setAbout] = useState("");
const [frontCNIC, setFrontCNIC] = useState('')
const [modal, setModal] = useState(false)
const [modalProfile, setModalProfile] = useState(false)
const [profile, setProfile] = useState('')
const [laoding, setLoading] = useState(false)


const name = route.params.Name;
const email = route.params.Email;
const pass = route.params.Pass;
const repass = route.params.RePass;
const phone = route.params.Phone;
const city = route.params.City;
const field = route.params.Field;
const role = route.params.Role;



console.log(name, email, pass, repass, phone, city, field, about, role);

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
  fetch("http://localhost:3000/ustaadsignup", {
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
          about,
          city,
          field,
          frontCNIC,
          profile
      })
  })
  
  .then(res=>res.json())
  .then(data => {
    
      
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

const openCamera2 = async() => {
  const images = await launchCamera(options);
  if (!images.didCancel){
    let newFile = {uri: images.assets[0].uri, type: images.assets[0].type, name : images.assets[0].fileName}
    handleUploadProfile(newFile)
  }
  }
  
  const openGalary2 = async() => {
  const images = await launchImageLibrary(options);
  if (!images.didCancel){
   let newFile = {uri: images.assets[0].uri, type: images.assets[0].type, name : images.assets[0].fileName}
   handleUploadProfile(newFile)
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


const handleUploadProfile = (image) => {
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
    setProfile(data.url)
    setModalProfile(false)
  })
  }

    return (
        <ScrollView>
        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, paddingTop: 15, paddingBottom: 15}}>Let's Get Started</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
            <Text style={{color: '#10047c', fontSize: 45, marginTop: 35, fontWeight: 'bold'}}>Create</Text> 
            <TextInput style={{width: 350, marginTop: 10}}
            label="About Yourself"
            onChangeText={setAbout}
            value={about}
            mode='outlined'
            />


<View style={{flexDirection: 'row', flex: 1, alignContent: 'center', alignItems: 'center', marginTop: 85}}>
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

            <Button icon={frontCNIC==""?"image-area":"check"} style={{backgroundColor: 'green', marginTop: 40, width: '80%'}} mode="contained"  onPress={() => setModal(true)}>
              Upload CNIC
            </Button>

            <Button icon={profile==""?"image-area":"check"} style={{backgroundColor: 'green', marginTop: 10, width: '80%'}} mode="contained"  onPress={() => setModalProfile(true)}>
              Upload Profile
            </Button>

       
            
            <Button style={{backgroundColor: '#10047c', marginTop: 40, marginBottom: 100, width: '80%'}} mode="contained" onPress={() => {
              if (!checked) {Alert.alert("Please Agree to our terms and conditions")}
              else if (!frontCNIC.trim()) {Alert.alert("Plaese Upload CNIC")}
              else if (!about.trim()) {Alert.alert("Plaese write something about yourself", "example: i am an electrian, i can do...")}

               else{submitData()}}}>
              Submit
            </Button>
           
            
        </View>       
        <Modal
          animatedType="slide"
          transparent={false}
          visible={modal}
          style={{backgroundColor: "white", position: 'absolute', top: 2, width: "100%"}}
        >
{/*         
              <ActivityIndicator
               animating = {modal}
               color = '#bc2b78'
               size = "large"
               /> */}

    <View style={{alignContent: 'center', alignItems: 'center', flexDirection: "row", justifyContent: 'space-around', marginTop: 350}}>
    <Button icon={frontCNIC==""?"camera":"check"} style={{backgroundColor: '#10047c'}} mode="contained"  onPress={openCamera}>
        Camera
    </Button>

    <Button icon={frontCNIC==""?"image-area":"check"} style={{backgroundColor: '#10047c'}} mode="contained" onPress={openGalary}>
      Galary
    </Button>
    </View>
     <Button style={{backgroundColor: 'red', marginTop: 20, margin: 40}} mode="contained" onPress={() => setModal(false)}>
      cancel
    </Button>
      
  </Modal>


          <Modal
          animatedType="slide"
          transparent={false}
          visible={modalProfile}
          style={{backgroundColor: "white", position: 'absolute', top: 2, width: "100%"}}
        >

    <View style={{alignContent: 'center', alignItems: 'center', flexDirection: "row", justifyContent: 'space-around', marginTop: 350}}>
    <Button icon={profile==""?"camera":"check"} style={{backgroundColor: '#10047c'}} mode="contained"  onPress={openCamera2}>
        Camera
    </Button>

    <Button icon={profile==""?"image-area":"check"} style={{backgroundColor: '#10047c'}} mode="contained" onPress={openGalary2}>
      Galary
    </Button>
    </View>
     <Button style={{backgroundColor: 'red', marginTop: 20, margin: 40}} mode="contained" onPress={() => setModalProfile(false)}>
      cancel
    </Button>
      
  </Modal>       
  </View>
  
        </ScrollView>
        
    )
}

