import React from 'react'
import { View,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import MapScreen from '../screens/MapScreen'
const Stack= createNativeStackNavigator();

const Navigation= () => {
return (
    <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name="SignIn" component={SignInScreen}/>
       <Stack.Screen name="SignUp" component={SignUpScreen}/>
       <Stack.Screen name="Map" component={MapScreen}/>
       </Stack.Navigator>
    </NavigationContainer >
);
};

export default Navigation;