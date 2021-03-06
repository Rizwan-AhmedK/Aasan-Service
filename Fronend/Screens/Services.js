import React from 'react'
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native'
import { TextInput, Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function Services() {
const navigation = useNavigation();

    const [text, setText] = React.useState('');
    return (
        
        <KeyboardAvoidingView  style={{backgroundColor: '#10047c',flex: 1, flexDirection: 'column'}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, paddingTop: 15}}>Services</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <View style={{alignItems: 'center', margin: 12, marginRight: 45, alignContent: 'center', padding: 25, borderRadius: 10}}>
                    <IconButton icon="transmission-tower" color='#10047c' size={35} onPress={() => navigation.navigate("ServiceDetail")} />
                    <Text style={{color: '#10047c', fontSize: 20}}>Electrician</Text>
                </View>

                <View style={{alignItems: 'center', margin: 8, marginRight: 25, alignContent: 'center', padding: 25, borderRadius: 10}}>
                    <IconButton icon="pipe-disconnected" color='#10047c' size={35} onPress={() => console.log('Pressed')} />
                    <Text style={{color: '#10047c', fontSize: 20}}>Plumber</Text>
                </View>
            </View>


            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <View style={{alignItems: 'center', margin: 8, alignContent: 'center', padding: 25, borderRadius: 10}}>
                    <IconButton icon="air-conditioner" color='#10047c' size={35} onPress={() => console.log('Pressed')} />
                    <Text style={{color: '#10047c', fontSize: 20}}>AC Machenic</Text>
                </View>

                <View style={{alignItems: 'center', margin: 8, alignContent: 'center', padding: 25, borderRadius: 10}}>
                    <IconButton icon="car" color='#10047c' size={35} onPress={() => console.log('Pressed')} />
                    <Text style={{color: '#10047c', fontSize: 20}}>Car Machenic</Text>
                </View>
            </View>


            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <View style={{alignItems: 'center', margin: 8, marginRight: 35, alignContent: 'center', padding: 25, borderRadius: 10}}>
                    <IconButton icon="desktop-classic" color='#10047c' size={35} onPress={() => console.log('Pressed')} />
                    <Text style={{color: '#10047c', fontSize: 20}}>Pc Machenic</Text>
                </View>

                <View style={{alignItems: 'center', margin: 8, alignContent: 'center', marginRight: 20, padding: 25, borderRadius: 10}}>
                    <IconButton icon="table-furniture" color='#10047c' size={35} onPress={() => navigation.navigate('Home')}/>
                    <Text style={{color: '#10047c', fontSize: 20}}>Carpenter</Text>
                </View>
            </View>

            <Button style={{backgroundColor: '#10047c', marginTop: 40}} mode="contained" onPress={() => navigation.navigate('UserMainScreen')}>
              Login
            </Button>

            <Button style={{marginTop: 20, color: "#10047c"}} mode="outlined" onPress={() => navigation.navigate('SignUp_User')}>
              Create Account
            </Button>

            
        </View>           
        </KeyboardAvoidingView>
        
    )
}

const styles = StyleSheet.create(  
    {  
    
          button :{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
            paddingHorizontal: 60,
            borderRadius: 6,
            elevation: 3,
            backgroundColor: '#10047c',
            marginTop: 60
          },

          buttontext:{
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
          },

    }); 
