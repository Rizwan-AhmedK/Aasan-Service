import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Alert} from 'react-native'
import { Button } from 'react-native-paper';



export default function AcceptAndRejectScreen({route, navigation}) {


    const Title = route.params.Title;
    const by = route.params.by;
    const fors = route.params.for;
    const workDetails = route.params.deatils;
    const Message = route.params.message;
    const workAmount = route.params.amount;
    const id = route.params.id;
    console.log(Title);


    const data = route.params.data;


    const showAlert = () => {
        Alert.alert(
          "You Accepted Extra Work Request, view more details at View Extra Work Details page ",
          "",
          [
            { text: "OK", onPress: () =>  {
                
                console.log('pressed')
                fetch(`http://localhost:3000/deleteRequestfromNoti/${id}`,{
                    method: "delete",
                    headers: {
                        'Content-Type': "application/json",
                    }
                })
                .then(

                    navigation.navigate("UserMainScreen")
                )
            }}
          ]
        )
      }


      const Reject = () => {
        Alert.alert(
          "You rejected Extra Work Request",
          "",
          [
            { text: "OK", onPress: () =>  {
                
                console.log('pressed')
                fetch(`http://localhost:3000/deleteRequestfromNoti/${id}`,{
                    method: "delete",
                    headers: {
                        'Content-Type': "application/json",
                    }
                })
                .then(
                    navigation.navigate("UserMainScreen")
                )


            }}
          ]
        )
      }

    const Aceept = () => {
        if (Title == "Extra Work Request"){
            fetch("http://localhost:3000/addmorework", {
                method : "post",
                headers:{
                    'Content-Type': 'application/json' 
                },
                body:JSON.stringify({
                    by,
                    fors,
                    workDetails,
                    workAmount
                })
            })
            
            .then(res=>res.json())
            .then(data => {
                Alert.alert("Extra Request is accepted")
            }).catch(err => {
                console.log(err)
            })
            showAlert()
        }else{
            Alert.alert("its ratting")
        }
    }



    const AcceptAlert = () => {
        Alert.alert(
            "You accepted new work request",
            "",
            [
              { text: "OK", onPress: () =>  {
                  
                  console.log('pressed')
                  fetch(`http://localhost:3000/deleteRequestfromNoti/${id}`,{
                      method: "delete",
                      headers: {
                          'Content-Type': "application/json",
                      }
                  })
                  .then(
                      navigation.navigate("UstaadMainScreen")
                  )
  
  
              }}
            ]
          )
    }


    const AcceptNewWorkrequest = () => {
        if (Title == "New Work request"){
        data.map((val) => {
            const userId = val.by;
            const field = val.field; 
            const problemStatement = val.problemStatement;
            const latitude = val.latitude;
            const longititude = val.longititude;
            const ustaadId = val.fors;
            const date = val.date; 
            const email = val.email; 
            const name = val._name; 
            const phone = val.phone;
            const address = val.address;
           
            fetch("http://localhost:3000/avail-service", {
                method : "post",
                headers:{
                    'Content-Type': 'application/json' 
                },
                body:JSON.stringify({
                    userId,
                    field, problemStatement, latitude, longititude, ustaadId, date, email, name, phone, address
                  
                })
            })

       
            .then(res=>res.json())
            .then(data => {
                Alert.alert("Extra Request is accepted")
            }).catch(err => {
                console.log(err)
            })
        })
            AcceptAlert()
        }else{
            Alert.alert("its ratting")
        }
    }


    if(Title == "Ratting Notification"){
        return(
        <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
        <Text style={{color: 'blue'}}>Ratting is Given</Text>
        <Button onPress={() => navigation.goBack()}>Back</Button>
        </View>
        )
    }


    if(Title == "New Work request"){
        return(
            <ScrollView>

            <View style={{backgroundColor: '#10047c', flex: 1}}>
            <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10}}> 
            <Text style={{color: "white", fontSize: 25, marginTop: 20, marginBottom: 20, textAlign: 'center'}}>Project Details</Text>
    
            </View>
            {data.map((val) => {
                return(
            <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
            <Text  style={{color: "#10047c",fontSize: 20, fontWeight: 'bold', marginTop: 45, marginBottom: 20, textAlign: 'center'}}>{Title}</Text>
            <Text  style={{color: "#10047c",fontSize: 20, fontWeight: 'bold', marginTop: 30, marginBottom: 3, textAlign: 'center'}}>Details</Text>
            <Text  style={{color: "#10047c",fontSize: 20, marginTop: 10, marginBottom: 30, textAlign: 'center'}}>{val.problemStatement}</Text>


            <Text  style={{color: "#10047c",fontSize: 25, marginTop: 20, fontWeight: 'bold', marginBottom: 3, textAlign: 'center'}}> Location</Text>

            <Text  style={{color: "#10047c",fontSize: 20, marginTop: 5, marginBottom: 20, textAlign: 'center'}}>Address: {val.address} 
            longititude:  {val.longititude} {'\n'} latitude: {val.latitude}</Text>
         

           

    
            <Text  style={{color: "#10047c",fontSize: 20, fontWeight: 'bold', marginTop: 40, marginBottom: 3, textAlign: 'center'}}>Work Amount</Text>
            <Text  style={{color: "#10047c",fontSize: 25, marginTop: 2, marginBottom: 20, textAlign: 'center'}}> 500 </Text>
       
            <Button style={{marginTop: 50, width: '80%' ,backgroundColor: 'green', paddingLeft: 5, paddingRight: 5}} mode="contained" onPress={AcceptNewWorkrequest}>
                 Accept request
                </Button>
    
            <Button style={{marginTop: 13,width: '80%' , backgroundColor: 'red', paddingLeft: 5, paddingRight: 5, marginBottom: 50}} mode="contained" onPress={Reject}>
                 Reject Request
                </Button> 
            </View>   
                 )
                })}     
      </View>
            </ScrollView>
        )
    }


    if(Title == "Extra Work Request"){
      
   return (
        <ScrollView>

        <View style={{backgroundColor: '#10047c', flex: 1}}>
        <View style={{backgroundColor: '#10047c', flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10}}> 
        <Text style={{color: "white", fontSize: 25, marginTop: 20, marginBottom: 20, textAlign: 'center'}}>Project Details</Text>

        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <Text  style={{color: "#10047c",fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 20, textAlign: 'center'}}>{Title}</Text>
        <Text  style={{color: "#10047c",fontSize: 20, fontWeight: 'bold', marginTop: 60, marginBottom: 20, textAlign: 'center'}}>Details</Text>
        <Text  style={{color: "#10047c",fontSize: 25, marginTop: 2, marginBottom: 20, textAlign: 'center'}}> {workDetails}</Text>

        <Text  style={{color: "#10047c",fontSize: 20, fontWeight: 'bold', marginTop: 60, marginBottom: 20, textAlign: 'center'}}>Work Amount</Text>
        <Text  style={{color: "#10047c",fontSize: 25, marginTop: 2, marginBottom: 20, textAlign: 'center'}}> {workAmount} </Text>

        <Button style={{marginTop: 50, width: '80%' , backgroundColor: 'green', paddingLeft: 5, paddingRight: 5}} mode="contained" onPress={Aceept}>
             Accept request
            </Button>

        <Button style={{marginTop: 20, width: '80%' ,backgroundColor: 'red', paddingLeft: 5, paddingRight: 5, marginBottom: 100}} mode="contained" onPress={Reject}>
             Reject Request
            </Button> 
        </View>        
  </View>
        </ScrollView>
        
    )
}

}