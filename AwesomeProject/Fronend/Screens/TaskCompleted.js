import React,{useState} from 'react'
import { View, Text, Image, ScrollView, Alert} from 'react-native'
import {Button, Avatar, TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';




export default function UstaadConfirmation({route}) {
    const navigation = useNavigation();
    const Role = route.params.Role;
    const id = route.params.Id
    let fors, by;
    if(Role == 'user'){
        fors = route.params.ustaadID;
        console.log(fors, "fors")
        by = route.params.userID;
        console.log(by, 'by')
    }
    else{
        by = route.params.ustaadID;
        fors = route.params.userID;
        console.log(fors, "fors")
        console.log(by, 'by')


    }
    
    const [ratting, setRatting] = useState(0);
    const [rattingComment, setrattingComment] = useState('');
    const title = "Ratting Notification";
    const message = "Ratting is given by " + Role;


const showAlert = () => {
    Alert.alert(
      "Your ratting has been rocorded. ",
      "",
      [
        { text: "OK", onPress: () => {
            fetch(`http://localhost:3000/deleteServiceRecords/${id}`,{
                method: "delete",
                headers: {
                    'Content-Type': "application/json",
                }
            })
            .then(
               Role == "user" ? navigation.navigate("UserMainScreen") : navigation.navigate("UstaadMainScreen")
            )
            

           
        }  
    }
      ]
    )
  }

const submitData = () => {
fetch("http://localhost:3000/ratting", {
    method : "post",
    headers:{
        'Content-Type': 'application/json' 
    },
    body:JSON.stringify({
        by,
        fors,
        ratting,
        rattingComment,
    })
})


fetch("http://localhost:3000/temp", {
    method : "post",
    headers:{
        'Content-Type': 'application/json' 
    },
    body:JSON.stringify({
        title,
        message,
        by,
        fors
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

