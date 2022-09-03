import React from 'react'
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native'
import { TextInput, Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function Services({route}) {
   const id =  route.params.Id;
   console.log(id)
const navigation = useNavigation();

    return (
        
        <ScrollView  style={{backgroundColor: '#10047c',flex: 1, flexDirection: 'column'}}>
            <IconButton icon="home" color='white' size={25} onPress={() => navigation.navigate("UserMainScreen")} />
       
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, paddingTop: 15}}>Services</Text>
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <View style={{alignItems: 'center', flexDirection: 'row'}} >
                <View style={{alignItems: 'center', margin: 12, marginRight: 45, alignContent: 'center', padding: 25, borderRadius: 10}}>
                    <IconButton icon="transmission-tower" color='#10047c' size={35} onPress={() => navigation.navigate("ServiceDetail", {Field: "electrician", Id: id})} />
                    <Text style={{color: '#10047c', fontSize: 20}}>Electrician</Text>
                </View>

                <View style={{alignItems: 'center', margin: 8, marginRight: 25, alignContent: 'center', padding: 25, borderRadius: 10}}>
                    <IconButton icon="pipe-disconnected" color='#10047c' size={35} onPress={() => navigation.navigate("ServiceDetail", {Field: "plumber", Id: id})} />
                    <Text style={{color: '#10047c', fontSize: 20}}>Plumber</Text>
                </View>
            </View>


            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <View style={{alignItems: 'center', margin: 8, alignContent: 'center', padding: 25, borderRadius: 10}}>
                    <IconButton icon="air-conditioner" color='#10047c' size={35} onPress={() => navigation.navigate("ServiceDetail", {Field: "AcMachenic", Id: id})} />
                    <Text style={{color: '#10047c', fontSize: 20}}>AC Machenic</Text>
                </View>

                <View style={{alignItems: 'center', margin: 8, alignContent: 'center', padding: 25, borderRadius: 10}}>
                    <IconButton icon="car" color='#10047c' size={35} onPress={() => navigation.navigate("ServiceDetail", {Field: "CarMachenic", Id: id})} />
                    <Text style={{color: '#10047c', fontSize: 20}}>Car Machenic</Text>
                </View>
            </View>


            <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: 5}}>
                <View style={{alignItems: 'center', margin: 8, marginRight: 35, alignContent: 'center', padding: 25, borderRadius: 10}}>
                    <IconButton icon="desktop-classic" color='#10047c' size={35} onPress={() => navigation.navigate("ServiceDetail", {Field: "ComputerEnginer", Id: id})} />
                    <Text style={{color: '#10047c', fontSize: 20}}>Pc Machenic</Text>
                </View>

                <View style={{alignItems: 'center', margin: 8, alignContent: 'center', marginRight: 20, padding: 25, borderRadius: 10}}>
                    <IconButton icon="table-furniture" color='#10047c' size={35} onPress={() => navigation.navigate("ServiceDetail", {Field: "Carpenter", Id: id})}/>
                    <Text style={{color: '#10047c', fontSize: 20}}>Carpenter</Text>
                </View>
            </View>

            
        </View>           
        </ScrollView>
        
    )
}
