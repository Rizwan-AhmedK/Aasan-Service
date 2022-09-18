import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useEffect, useState} from "react";
import { Alert } from "react-native";

export const Init = () => {


  return async dispatch => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
      console.log('token fetched');
      dispatch({
        type: 'LOGIN',
        payload: token,
      })
    }
  }
}


// let email = "" ,pass="";
let status=false;

export const Login = (username, password) => {
  fetch("http://localhost:3000/login", {
    method : "post",
    headers:{
        'Content-Type': 'application/json' 
    },
    body:JSON.stringify({
        email: username,
        pass: password, 
    })
})

.then( res => {

  if(res.status === 404) {
    Alert.alert("User Not Found")
  }

  else if(res.status === 401) {
    Alert.alert("Invalid Credentials")
  }

  else if(res.status === 200){
    res.json()
    .then(async (data) => {
console.log(data)
  await AsyncStorage.setItem('user', JSON.stringify(data));
  // email = data.data.email;
  // pass = data.data.pass;
  status = data.success
  
}).catch(err => {
    console.log(err)
})

  }
}
)

  
  // if(res.status === 404){
  //   Alert.alert("user not found please check your email is correct?")
  // }

  // if(res.status === 401){
  //   Alert.alert("Password is not matched corrosponding to entered email ")
  // }



  return async dispatch => {
    
    let token = null;

    if (status) {
      token = username;
      // here we can use login api to get token and then store it
      await AsyncStorage.setItem('token', token);
      console.log('token stored');

      dispatch({
        type: 'LOGIN',
        payload: token,
      })
    }
    
  }
}


export const Logout = () => {
  return async dispatch => {
    await AsyncStorage.clear();
    dispatch({
      type: 'LOGOUT'
    })
  }
}