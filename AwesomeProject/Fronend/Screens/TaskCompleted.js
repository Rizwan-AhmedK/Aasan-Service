import React,{useState} from 'react'
import { View, Text, Image, ScrollView} from 'react-native'
import {Button, Avatar, TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';




export default function UstaadConfirmation({route}) {
    console.log(route.params.ustaadID);
    console.log(route.params.userID);
const navigation = useNavigation();
const [text, setText] = useState('');

    return (
        <ScrollView style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, marginTop: 35, marginBottom: 10, textAlign: 'center'}}>Task Completed</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10}}> 
            
       
        <Text style={{fontSize: 15, marginTop: 20, textAlign: 'center', fontWeight: 'bold', padding: 10}}>Rate the user</Text>
        <Rating showRating ratingCount={5} onFinishRating={(rating) => {console.log("ratting is" + rating)}}  imageSize={25} style={{ paddingVertical: 1 }}/>


        <Text style={{fontSize: 15, marginTop: 60, textAlign: 'center', fontWeight: 'bold', padding: 10}}>Add any comment</Text>
        <TextInput style={{width: 350, marginTop: 10}}
            label="Your comment here"
            mode='outlined'
            />


        
            
        <Button style={{backgroundColor: '#10047c', marginTop:60, width: '50%', marginBottom: 35}} mode="contained" onPress={() => navigation.navigate('Home')}>
              Submit
            </Button>   
        
          
            
        </View>  
        </View>         
  </ScrollView>
        
    )
}

