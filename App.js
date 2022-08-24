import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,placeholder } from 'react-native';

import Navigation from './src/navigation'


export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9D7F1',
    flex: 1,
    justifyContent:'center',
  },

});


