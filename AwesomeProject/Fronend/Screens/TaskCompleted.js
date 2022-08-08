import React,{useState} from 'react'
import { View, Text, Image, ScrollView, Alert} from 'react-native'
import {Button, Avatar, TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';




export default function UstaadConfirmation({route}) {
    const navigation = useNavigation();
    const Role = route.params.Role;
    let rattingfor, rattingby;
    if(Role == 'user'){
        rattingfor = route.params.ustaadID;
        rattingby = route.params.userID;}
    else{
        rattingby = route.params.ustaadID;
        rattingfor = route.params.userID;
    }
    
    const [ratting, setRatting] = useState(0);
    const [rattingComment, setrattingComment] = useState('');


const showAlert = () => {
    Alert.alert(
      "Your ratting has been rocorded. ",
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
fetch("http://10.0.2.2:3000/ratting", {
    method : "post",
    headers:{
        'Content-Type': 'application/json' 
    },
    body:JSON.stringify({
        rattingby,
        rattingfor,
        ratting,
        rattingComment

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

    return (
        <ScrollView style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, marginTop: 35, marginBottom: 10, textAlign: 'center'}}>Task Completed</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10}}> 
            
       
        <Text style={{fontSize: 15, marginTop: 20, textAlign: 'center', fontWeight: 'bold', padding: 10}}>Rate the user</Text>
        <Rating showRating ratingCount={5} onFinishRating={(ratting) => {setRatting(ratting)}}  imageSize={25} style={{ paddingVertical: 1 }}/>
        {console.log(ratting)}

        <Text style={{fontSize: 15, marginTop: 60, textAlign: 'center', fontWeight: 'bold', padding: 10}}>Add any comment</Text>
        <TextInput style={{width: 350, marginTop: 10}}
            value={rattingComment}
            onChangeText={setrattingComment}
            label="Your comment here"
            mode='outlined'
            />


        
            
        <Button style={{backgroundColor: '#10047c', marginTop:60, width: '50%', marginBottom: 35}} mode="contained" onPress={submitData}>
              Submit
            </Button>   
        
          
            
        </View>  
        </View>         
  </ScrollView>
        
    )
}

