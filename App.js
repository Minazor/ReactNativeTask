import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,placeholder } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <SignInScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDEDEC',
    flex: 1,
  },
  placeholder:{
    color: '#FFFF03',
  },
});


