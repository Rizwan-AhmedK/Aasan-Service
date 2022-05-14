import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import { TextInput, Button, Avatar, IconButton, Colors  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';

export default function UserMainScreen() {
const navigation = useNavigation();

    return (
        <ScrollView>
        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10}}> 
            <Avatar.Image  size={60} source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 20, marginTop: 10, marginBottom: 10, textAlign: 'center'}}>Rizwan Ahmed {'\n'} <Text style={{fontSize: 15}}>Electrician</Text></Text>

        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <Button style={{marginTop: 50, backgroundColor: '#10047c', paddingLeft: 5, paddingRight: 5}} mode="contained" onPress={() => navigation.navigate('EnterDetails')}>
             Hire Now
            </Button>


            <Text style={{fontSize: 20}}>{'\n'}About Me</Text>
            <Text style={{padding: 5}} >Hello, I am Rizwan Ahmed, i am an electrician and i cansolve your home appliences related problems.</Text> 
            <Text style={{fontSize: 15}}>{'\n\n'}Feedback from Previous Clients</Text>

        <View style={{marginLeft: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
            <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
            <Text style={{padding: 8}}>Rizwan Ahmed {'\n'}He was Very craetive! {'\n'}                   
             <Rating showRating={false} readonly={true} ratingCount={5} onFinishRating={(rating) => {console.log("ratting is" + rating)}}  imageSize={15} style={{ paddingVertical: 1 }}/></Text>
        </View>

        <View style={{marginLeft: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
            <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
            <Text style={{padding: 8}}>Rizwan Ahmed {'\n'}He was Very craetive! {'\n'}                   
             <Rating showRating={false} readonly={true} ratingCount={5} onFinishRating={(rating) => {console.log("ratting is" + rating)}}  imageSize={15} style={{ paddingVertical: 1 }}/></Text>
        </View>

        <View style={{marginLeft: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
            <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
            <Text style={{padding: 8}}>Rizwan Ahmed {'\n'}He was Very craetive! {'\n'}                   
             <Rating showRating={false} readonly={true} ratingCount={5} onFinishRating={(rating) => {console.log("ratting is" + rating)}}  imageSize={15} style={{ paddingVertical: 1 }}/></Text>
        </View>

        <View style={{marginLeft: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
            <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
            <Text style={{padding: 8}}>Rizwan Ahmed {'\n'}He was Very craetive! {'\n'}                   
             <Rating showRating={false} readonly={true} ratingCount={5} onFinishRating={(rating) => {console.log("ratting is" + rating)}}  imageSize={15} style={{ paddingVertical: 1 }}/></Text>
        </View>

        </View>           
  </View>
        </ScrollView>
        
    )
}

