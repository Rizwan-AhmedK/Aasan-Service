import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView} from 'react-native'
import { Avatar, IconButton, List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { Rating } from 'react-native-ratings';



export default function Services({route}) {
    console.log(route.params.Id)
    console.log(route.params.Field)
    console.log(route.params.ProblemStatement)
    console.log(route.params.latitude)
    console.log(route.params.longitude)
const navigation = useNavigation();

const [data, setData] = useState([])

useEffect(()=>{
    fetch("http://10.0.2.2:3000/ustaadlist")
    .then((res) => res.json())
    .then((data) => {
        setData(data)

}).catch(err => {
    console.log(err)
})
},[])


    return (
        <ScrollView  style={{backgroundColor: '#10047c',flex: 1, flexDirection: 'column'}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, paddingTop: 15}}>Select Ustaad</Text>

        </View>

        <View style={{backgroundColor: 'white', flex: 2.5}}>
        <View style={{ flexDirection: 'column'}}>
     
                <View style={{flex: 1, flexDirection: 'row'}}>
                     <Avatar.Image  size={50} style={{margin: 10}} source={require('../../src/assets/Login.png')} />
                     <Text style={{marginTop: 15}}>rizwan{'\n'}</Text>
                     <Rating showRating={false} readonly={true} ratingCount={5} onFinishRating={(rating) => {console.log("ratting is" + rating)}}  imageSize={15} style={{ paddingVertical: 1 }}/>
                </View>

                {/* <View style={{alignItems: 'center', margin: 8, marginRight: 25, alignContent: 'center', padding: 25, borderRadius: 10}}>
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
                    </View>*/}
            </View>
        </View>           
        </ScrollView>
        
    )

}
