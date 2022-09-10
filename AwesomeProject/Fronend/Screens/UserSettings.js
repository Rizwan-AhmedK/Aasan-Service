import React,{useEffect, useState} from 'react'
import { View, Text, Image, ScrollView, Alert, MaskedViewComponent} from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';



export default function EnterDetails({route, navigation}) {

    


  const Id = route.params.Id;
  const data = route.params.userData;
  console.log(data)
    let emailText, nametext, phonText, cityText, id;

    data.map((val) => {
        emailText = val.data.email;
        nametext = val.data.name;
        phonText = val.data.phone;
        cityText = val.data.city;
        id = val.data._id;
    })
  
const [email, setEmail] = useState(emailText)
const [name, setName] = useState(nametext)
const [phone, setPhone] = useState(phonText)
const [city, setCity] = useState(cityText)


const Update = async () => {
 
    // if(!email.trim()){Alert.alert("Please Enter Email")}
    // else if(!name.trim()){Alert.alert("Please Enter Name")}
    // else if(!phone.trim()){Alert.alert("Please Enter Phone")}
    // else if(!city.trim()){Alert.alert("Please Enter City")}   
    
    
    const DAT = await fetch(`http://localhost:3000/updateUserRecords/${id}`, {
        method : "PATCH",
        headers : {
            "Content-Type" : "application/json"
        }, 

        body:JSON.stringify({
            email, name, phone, city
        })
    });


    const data2 = await DAT.json()
    console.log(data2)


    if(DAT.status === 422 || !data2){
        Alert.alert("data not found")
    }
    else{
        Alert.alert("data added")
    }
    

}


    return (
        <ScrollView>
        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Text style={{color: "white", fontSize: 30, paddingTop: 15, paddingBottom: 15}}>Settings</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <Text style={{color: "#10047c",fontSize: 17 , paddingTop: 15, margin: 45, textAlign: 'center'}}>Kindly edit your Details and press Update deatils button</Text>

            <TextInput
            style={{width: 350, marginTop: 30}}
            value={email}
            label={emailText}
            onChangeText={setEmail}
            left={<TextInput.Icon name="email" color="#10047c"/>}
            mode='outlined'
            />

            <TextInput
            style={{width: 350, marginTop: 10}}
            value={name}
            label={nametext}
            onChangeText={setName}
            mode='outlined'
            left={<TextInput.Icon name="account" color="#10047c" />}
            />

            <TextInput
            style={{width: 350, marginTop: 10}}
            // keyboardType="phone-pad"
            value={phone}
            label={phonText}
            onChangeText={setPhone}
            mode='outlined'
            left={<TextInput.Icon name="phone" color="#10047c" />}
            />



            <TextInput 
            style={{width: 350, marginTop: 10}}
            value={city}
            label={cityText}
            onChangeText={setCity}
            mode='outlined'
            left={<TextInput.Icon name="navigation" color="#10047c" />}
            />

  

            <Button icon="update" style={{backgroundColor: '#10047c', marginTop: 25, marginBottom: 188}} mode="contained" onPress={Update}>
              Update Details
            </Button>   
        </View>           
  </View>
        </ScrollView>
    )
}








































// export default function UserSettings({route}) {
//     console.log(route.params.Id);
//     const data = route.params.userData;

// const navigation = useNavigation();


//     return (
//         <ScrollView>
//         <View style={{backgroundColor: '#10047c', flex: 1}}>

//         <View style={{backgroundColor: 'white', alignItems: 'center', flex: 1}}>


//             <Text style={{color: '#10047c', fontSize: 35, marginTop: 35, fontWeight: 'bold'}}>Settings</Text> 

//         {/* <View style={{marginLeft: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
//             <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
//             <Text style={{padding: 8}}>Hello, Rizwan  {'\n'}Pakistan, <Text style={{color: '#10047c', fontWeight: 'bold'}}>View Details</Text></Text>
//         </View>

//         <View style={{marginLeft: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
//             <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
//             <Text style={{padding: 8}}>Hello, Rizwan  {'\n'}Pakistan, <Text style={{color: '#10047c', fontWeight: 'bold'}}>View Details</Text></Text>
//         </View> 

//         <View style={{marginLeft: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
//             <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
//             <Text style={{padding: 8}}>Hello, Rizwan  {'\n'}Pakistan, <Text style={{color: '#10047c', fontWeight: 'bold'}}>View Details</Text></Text>
//         </View>

//         <View style={{marginLeft: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
//             <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
//             <Text style={{padding: 8}}>Hello, Rizwan  {'\n'}Pakistan, <Text onPress={() => navigation.navigate("ViewDetailsUser")} style={{color: '#10047c', fontWeight: 'bold'}}>View Details</Text></Text>
//         </View> */}

//         </View>           
//   </View>
//         </ScrollView>
        
//     )
// }

