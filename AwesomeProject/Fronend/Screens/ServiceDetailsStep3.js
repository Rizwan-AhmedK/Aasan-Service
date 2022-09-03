import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, ActivityIndicator} from 'react-native'
import { Avatar, Button, IconButton, List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { Rating } from 'react-native-ratings';

export default function Services({route}) {
    
    const id = route.params.Id
    const field = route.params.Field
    const problemStatement = route.params.ProblemStatement
    const Latitude = route.params.latitude
    const Longitude = route.params.longitude
const navigation = useNavigation();

const [data, setData] = useState([])
const [loading, setloading] = useState(false)

useEffect(()=>{
    fetch(`http://localhost:3000/ustaadlist/${field}`)
    .then((res) => res.json())
    .then((data) => {
        setData(data)
        setloading(true)
        console.log("hello")

}).catch(err => {
    console.log(err)
})
},[])


if(data.length==0){
        return(
            <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                 <Text style={{color: 'blue'}}>No Results Found</Text>
                 <Button color='white' style={{backgroundColor: '#10047c'}} onPress={()=> navigation.navigate("UserMainScreen")}>Back to Dashboard</Button>
            </View>
)}


else{
    return (
        <ScrollView  style={{backgroundColor: '#10047c',flex: 1, flexDirection: 'column'}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('../../src/assets/Login.png')} />
        <Text style={{color: "white", fontSize: 30, marginTop: 25, marginBottom: 20}}>Select Ustaad</Text>

        </View>

        <View style={{backgroundColor: 'white', flex: 2.5}}>
        <View style={{ flexDirection: 'column'}}>
            {data.map((value, indx) => {

                return(
                    <>
                <View style={{flex: 1, flexDirection: 'row', padding: 10}} key={indx}>
                     <Avatar.Image  size={50} style={{margin: 10}} source={require('../../src/assets/Login.png')} />
                     <Text style={{marginTop: 10, fontWeight: 'bold', color: '#10047c'}}>{value.name}{'\n'} 
                     <Text style={{color: 'gray'}}>{value.field}{'\n'}</Text>
                     <Rating showRating={false} rating={5} maxStars={5} starCount={3} onFinishRating={(ratings) => {console.log("ratting is" + ratings)}}  imageSize={15} style={{ paddingVertical: 1 }}/></Text>
                    <IconButton style={{marginTop: 25, position: 'absolute', right: 50}} icon="arrow-right-circle" color='#10047c' size={30} onPress={() => navigation.navigate("SeeUstaadProfile",  {
                        Ustaaddata: {value},
                        userid: id,
                        ustaadId: value._id,
                        field: field,
                        ProblemStatement: problemStatement,
                        latitude: Latitude,
                        logitude: Longitude
                        })}  /> 
                    <IconButton style={{marginTop: 25, position: 'absolute', right: 10}} icon="account" color='#10047c' size={30} onPress={() => navigation.navigate("EnterDetails",  {
                        userid: id,
                        field: field,
                        ProblemStatement: problemStatement,
                        latitude: Latitude,
                        logitude: Longitude,
                        ustaadId: value._id,
                    })} />
                </View>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1}} />
                    </>
                )})}
            </View>
        </View>           
        </ScrollView>       
    )
}
}



