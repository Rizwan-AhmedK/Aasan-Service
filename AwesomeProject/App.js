import React, { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/store';
import { ActivityIndicator } from 'react-native-paper';
import { Init } from './src/store/actions';
import {View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, StatusBar } from '@react-navigation/native-stack';
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
import ServiceDetailStep2 from "./Fronend/Screens/ServiceDetailStep2";
import ServiceDetailStep3 from "./Fronend/Screens/ServiceDetailsStep3";
import SeeUstaadProfile from "./Fronend/Screens/SeeUstaadProfile";
import EnterDetails from "./Fronend/Screens/EnterDetails";
import ShowInspectionPrice from "./Fronend/Screens/ShowInspectionPrice";
import PaymentSystem from "./Fronend/Screens/PaymentSystem";
import PaymentSystem2 from "./Fronend/Screens/PaymentSystem2";
import UstaadConfirmation from "./Fronend/Screens/UstaadConfirmation";
import UstaadRejectionScreen from "./Fronend/Screens/UstaadRejectionScreen";
import TaskCompleted from "./Fronend/Screens/TaskCompleted";
import ComplainScreen from "./Fronend/Screens/ComplainScreen";
import AddMoreWorkScreen from "./Fronend/Screens/AddMoreWorkScreen";
import SuccessNotification from "./Fronend/Screens/SuccessNotification";
import Home from "./Fronend/Screens/Home";
import UserProfile from "./Fronend/Screens/UserProfile";
import UserNotification from "./Fronend/Screens/UserNotification";
import SeeServiceDetails from "./Fronend/Screens/SeeServiceDetails";
import UserSettings from "./Fronend/Screens/UserSettings";
const Stack = createNativeStackNavigator();

let user = "user";


const Login = ({route}) => {
user = route.params.user;
console.log(user)
  return(<LoginUser />)
}

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName={user === "user" ? "UserMainScreen":"UstaadMainScreen"} screenOptions= {{headerShown: false}}>
        
        <Stack.Screen name="UserMainScreen" component={UserMainScreen} />
        
        <Stack.Screen name="UstaadMainScreen" component={UstaadMainScreen} />
        
        


        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="UserSettings" component={UserSettings} />
        <Stack.Screen name="ViewDetailsUser" component={ViewDetailsUser} />
        <Stack.Screen name="ViewDetailsUstaad" component={ViewDetailsUstaad} />
        <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
        <Stack.Screen name="ServiceDetailStep2" component={ServiceDetailStep2} />
        <Stack.Screen name="ServiceDetailStep3" component={ServiceDetailStep3} />
        <Stack.Screen name="SeeUstaadProfile" component={SeeUstaadProfile} />
        <Stack.Screen name="EnterDetails" component={EnterDetails} />
        <Stack.Screen name="ShowInspectionPrice" component={ShowInspectionPrice} />
        <Stack.Screen name="PaymentSystem" component={PaymentSystem} />
        <Stack.Screen name="PaymentSystem2" component={PaymentSystem2} />
        <Stack.Screen name="UstaadConfirmation" component={UstaadConfirmation} />
        <Stack.Screen name="UstaadRejectionScreen" component={UstaadRejectionScreen} />
        <Stack.Screen name="TaskCompleted" component={TaskCompleted} />
        <Stack.Screen name="ComplainScreen" component={ComplainScreen} />
        <Stack.Screen name="AddMoreWorkScreen" component={AddMoreWorkScreen} />
        <Stack.Screen name="SuccessNotification" component={SuccessNotification} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="UserNotification" component={UserNotification} />
        <Stack.Screen name="SeeServiceDetails" component={SeeServiceDetails} />
    </Stack.Navigator>
  );
}

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions= { {headerShown: false}}>
        <Stack.Screen name="Home"  component={Home} />
        <Stack.Screen name="LoginUser" component={Login} />
        <Stack.Screen name="LoginUstaad" component={LoginUstaad} />
        <Stack.Screen name="SignUp_User" component={SignUp_User} />
        <Stack.Screen name="SuccessNotification" component={SuccessNotification} />

        <Stack.Screen name="signUp_User_Step_2" component={signUp_User_Step_2} />
        <Stack.Screen name="SuccessAccountCreation" component={SuccessAccountCreation} />
        <Stack.Screen name="SignUpUstaad" component={SignUpUstaad} />
        <Stack.Screen name="SignUpUstaadStep2" component={signUpUstaadStep2} />
        <Stack.Screen name="SignUpUstaadStep3" component={SignUpUstaadStep3} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  )
}


const RootNavigation = () => {
  const token = useSelector(state => state.Reducers.authToken);
  console.log(token);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  }

  useEffect(() => {
    init()
  }, [])

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color='red' />
      </View>
    )
  }
  
  return (
    <NavigationContainer>
      {
        token === null ?
          <AuthStack /> : <MyStack />
      }
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

export default App;
