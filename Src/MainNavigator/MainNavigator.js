import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Imports Screens
import Signup from '../Screens/Signup'
import Login from '../Screens/Login'
import SplashScreen from '../Screens/SplashScreen';
import BottomNavigations from './BottomNavigations/Bottom'
import BottomNavigations2 from './BottomNavigations/Bottom2'
import RegisterCourse from '../Screens/RegisterCourse';
const Stack = createNativeStackNavigator();

function MainNavigator() {

 

  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash Screen"
          component={SplashScreen} />


        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login} />



        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={Signup} />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Bottom"
          component={BottomNavigations} />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Bottom2"
          component={BottomNavigations2} />


        <Stack.Screen
          name="Register Couse"
          component={RegisterCourse} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
