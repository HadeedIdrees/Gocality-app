import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Splash';
import Intro from '../Intro';
import Login from '../Login';
import ForgotPassword from '../ForgotPassword';
import NewPassword from '../NewPassword';
import Congrats from '../Congrats';
import SignUp from '../SignUp';
import EditProfile from '../EditProfile';
import TabBar from '../TabBar/TabBar';
import ReserveCar from '../ReserveCar';

const Stack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabBar" component={TabBar} />
        <Stack.Screen name="ReserveCar" component={ReserveCar} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Congrats" component={Congrats} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
