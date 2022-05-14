import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';


const SplashScreen = () => {
    return(
        <View style={styles.SplashScreen_RootView}>  
                 <View style={styles.SplashScreen_ChildView}>  
                 <Image source={require('../src/assets/logo.png')}  
                    style={{width:'40%', height: '40%', resizeMode: 'contain'}} />  
                <Text style={styles.text}>Aasan Service</Text>
                <Text>Banade Zindagi Aasan</Text>

                </View>  
             </View> )  
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

        SplashScreen_ChildView:  
          {  
              justifyContent: 'center',  
              alignItems: 'center',  
              backgroundColor: 'white',  
              flex:1,  
        }, 

        text:
        {
            fontSize: 30,
            fontWeight: 'bold',
            color: '#10047c'
        },
    }); 

export default SplashScreen;





