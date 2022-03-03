import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import index from "./Fronend/Navigation/Routes/index";
import LoginUser from './Fronend/Screens/LoginUser';
import LoginUstaad from "./Fronend/Screens/LoginUstaad"
import SignUp_User from "./Fronend/Screens/SignUp_User";
import signUp_User_Step_2 from './Fronend/Screens/SignUp_User_Step2';
import SignUpUstaad from "./Fronend/Screens/SignUpUstaad"
import signUpUstaadStep2 from './Fronend/Screens/SignUpUstaadStep2';
import SignUpUstaadStep3 from "./Fronend/Screens/SignUpUstaadStep3";
import ForgetPassword from "./Fronend/Screens/ForgetPasswod";
import SuccessAccountCreation from "./Fronend/Screens/SuccessAccountCreation";
import UserMainScreen from "./Fronend/Screens/UserMianScreen";
import UstaadMainScreen from "./Fronend/Screens/UstaadMainScreen";
import Services from './Fronend/Screens/Services';
import ViewDetailsUser from './Fronend/Screens/ViewDetailsUser';
import ViewDetailsUstaad from './Fronend/Screens/VieDetailsUstaad';
import ServiceDetail from './Fronend/Screens/ServiceDetails';


const Stack = createNativeStackNavigator();
const Main = () => {
    return(
<NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions= { {headerShown: false} }>

        <Stack.Screen name="Home"  component={index} />
        <Stack.Screen name="LoginUser" component={LoginUser} />
        <Stack.Screen name="SignUp_User" component={SignUp_User} />
        <Stack.Screen name="signUp_User_Step_2" component={signUp_User_Step_2} />

        <Stack.Screen name="LoginUstaad" component={LoginUstaad} />
        <Stack.Screen name="SignUpUstaad" component={SignUpUstaad} />
        <Stack.Screen name="SignUpUstaadStep2" component={signUpUstaadStep2} />
        <Stack.Screen name="SignUpUstaadStep3" component={SignUpUstaadStep3} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="SuccessAccountCreation" component={SuccessAccountCreation} />

        <Stack.Screen name="UserMainScreen" component={UserMainScreen} />
        <Stack.Screen name="UstaadMainScreen" component={UstaadMainScreen} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="ViewDetailsUser" component={ViewDetailsUser} />
        <Stack.Screen name="ViewDetailsUstaad" component={ViewDetailsUstaad} />
        <Stack.Screen name="ServiceDetail" component={ServiceDetail} />

    </Stack.Navigator>
</NavigationContainer>
    )
}

export default Main;