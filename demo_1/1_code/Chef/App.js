import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './Components/AppNavigator';
import { StyleSheet, Text, View } from 'react-native';


export default function App(){
  
  return (
          <AppNavigator/>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
