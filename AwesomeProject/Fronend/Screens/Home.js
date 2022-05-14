import React from "react";
import { View, Text, Image, StyleSheet, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
const navigation = useNavigation();
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

const styles = StyleSheet.create(  
    {  
        SplashScreen_RootView:  
        {  
            justifyContent: 'center',  
            flex:1,  
            margin: 10,  
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
            marginTop: 20
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





