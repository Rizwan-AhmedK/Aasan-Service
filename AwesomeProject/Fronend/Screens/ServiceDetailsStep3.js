import React from 'react'
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native'
import { TextInput, Button, Avatar, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { Rating, AirbnbRating } from 'react-native-ratings';



export default function Services() {
const navigation = useNavigation();

    const [text, setText] = React.useState('');

    
    
    return (
        
        
        <ScrollView  style={{backgroundColor: '#10047c',flex: 1, flexDirection: 'column'}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, paddingTop: 15}}>Select Ustaad</Text>

        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <View style={{alignItems: 'center', margin: 12, marginRight: 45, alignContent: 'center', padding: 25, borderRadius: 10}}>
                    <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
                    <Text style={{color: '#10047c', fontSize: 20}}>Electrician</Text>

                    <View style={{flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
                    <Rating showRating={false} ratingCount={5} onFinishRating={(rating) => {console.log("ratting is" + rating)}}  imageSize={15} style={{ paddingVertical: 1 }}/>
                    </View> 

                    <View style={{flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
                        <IconButton icon="account" color='#10047c' size={20} onPress={() => navigation.navigate("SeeUstaadProfile")} />
                        <IconButton icon="arrow-right-circle" color='#10047c' size={20} onPress={() => console.log('Pressed')} />
                    </View>
                </View>

                <View style={{alignItems: 'center', margin: 8, marginRight: 25, alignContent: 'center', padding: 25, borderRadius: 10}}>
                    <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
                    <Text style={{color: '#10047c', fontSize: 20}}>Plumber</Text>

                    <View style={{flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
                    <Rating showRating={false} readonly={true} ratingCount={5} onFinishRating={(rating) => {console.log("ratting is" + rating)}}  imageSize={15} style={{ paddingVertical: 1 }}/>
                    </View> 

                    <View style={{flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
                        <IconButton icon="account" color='#10047c' size={20} onPress={() => console.log('Pressed')} />
                        <IconButton icon="arrow-right-circle" color='#10047c' size={20} onPress={() => console.log('Pressed')} />
                    </View>
                </View>
            </View>


            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <View style={{alignItems: 'center', margin: 8, alignContent: 'center', padding: 25, borderRadius: 10}}>
                     <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
                    <Text style={{color: '#10047c', fontSize: 20}}>AC Machenic</Text>
                    <View style={{flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
                        <IconButton icon="account" color='#10047c' size={20} onPress={() => console.log('Pressed')} />
                        <IconButton icon="arrow-right-circle" color='#10047c' size={20} onPress={() => console.log('Pressed')} />
                    </View>
                </View>

                <View style={{alignItems: 'center', margin: 8, alignContent: 'center', padding: 25, borderRadius: 10}}>
                    <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
                    <Text style={{color: '#10047c', fontSize: 20}}>Car Machenic</Text>
                    <View style={{flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
                        <IconButton icon="account" color='#10047c' size={20} onPress={() => console.log('Pressed')} />
                        <IconButton icon="arrow-right-circle" color='#10047c' size={20} onPress={() => console.log('Pressed')} />
                    </View>
                </View>
            </View>


            <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: 5}}>
                <View style={{alignItems: 'center', margin: 8, marginRight: 35, alignContent: 'center', padding: 25, borderRadius: 10}}>
                    <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />
                    <Text style={{color: '#10047c', fontSize: 20}}>Pc Machenic</Text>
                    <View style={{flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
                        <IconButton icon="account" color='#10047c' size={20} onPress={() => console.log('Pressed')} />
                        <IconButton icon="arrow-right-circle" color='#10047c' size={20} onPress={() => console.log('Pressed')} />
                    </View>
                </View>

                <View style={{alignItems: 'center', margin: 8, alignContent: 'center', marginRight: 20, padding: 25, borderRadius: 10}}>
                    <Avatar.Image  size={50} source={require('../../src/assets/Login.png')} />                   
                    <Text style={{color: '#10047c', fontSize: 20}}>Carpenter</Text>
                    <View style={{flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
                        <IconButton icon="account" color='#10047c' size={20} onPress={() => console.log('Pressed')} />
                        <IconButton icon="arrow-right-circle" color='#10047c' size={20} onPress={() => console.log('Pressed')} />
                    </View>
                </View>
            </View>
        </View>           
        </ScrollView>
        
    )
}
