import React, {useState} from "react";
import { View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {useNetInfo} from "@react-native-community/netinfo";
import { useNavigation } from '@react-navigation/native';
import { Alert } from "react-native";
import { TextInput, Button } from 'react-native-paper';

import { useEffect } from "react";
import { IconButton } from "react-native-paper";

const Home = () => {
const navigation = useNavigation();
const netInfo = useNetInfo();

const [internetCheck, setInternetCheck] = useState(0);

useEffect(() => {

}, [internetCheck])

if(!netInfo.isConnected){
    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <IconButton icon="wifi" size={80} color="gray" />
            <Text style={{fontSize: 40}}>You are offline</Text>
            <Text>Please Check Your internet connection</Text>
            <Pressable style={styles.button} >
                        <Text style={styles.buttontext}>Referesh Page</Text>
                    </Pressable>
        </View>
   
    )
}

if(netInfo.isConnected) {
    return(
        <View style={styles.SplashScreen_RootView}>  
       
                <View style={styles.SplashScreen_ChildView}>  
                    <Image source={require('../../src/assets/logo.png')}  
                        style={{width:'35%', height: '35%', resizeMode: 'contain'}} />  
                    <Text style={styles.text}>Aasan Service</Text>
                    <Text>Banade Zindagi Aasan</Text>

                    <View style={{alignItems: "center", marginTop: 200}}>  
                    <Pressable style={styles.button} onPress={() => navigation.navigate('LoginUser', {user: "user"})} >
                        <Text style={styles.buttontext}>Hire an Ustaad</Text>
                    </Pressable>

                    <Pressable style={styles.buttonUstaad} onPress={() => navigation.navigate('LoginUser', {user: "ustaad"})} >
                        <Text style={styles.buttontext}>Be an Ustaad</Text>
                    </Pressable>
                </View> 
                </View> 
        </View> 
          
    )  
}
}

const styles = StyleSheet.create(  
    {  
        SplashScreen_RootView:  
        {  
            justifyContent: 'center',  
            flex:1,  
            position: 'absolute',  
            width: '100%',  
            height: '100%',  
          },  


          button :{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
            paddingHorizontal: 60,
            borderRadius: 6,
            elevation: 3,
            backgroundColor: '#10047c',
            marginTop: 20,
            width: '80%'
          },

          buttonUstaad :{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
            paddingHorizontal: 66,
            borderRadius: 6,
            elevation: 3,
            backgroundColor: '#10047c',
            marginTop: 20,
          },

          buttontext:{
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
          },

        SplashScreen_ChildView:  
          {  
  
              alignItems: 'center',  
              backgroundColor: 'white',  
              flex:1,  
        }, 

        text:
        {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#10047c'
        },

        texts:{
            alignItems: "center",
            justifyContent: "center"
        }
    }); 

export default Home;





