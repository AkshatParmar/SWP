import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View
  } from 'react-native';

 
export default function begin({navigation}){

      return(
          <View style={styles.container}>
            <Text style={{color: '#f04b48', fontSize: 40, fontWeight: 'bold', textAlign: 'center', marginBottom: 20}}>Welcome!
            <Image
                style={styles.image}
                source={require('../assets/Logo.png')}
              />
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('customerlogin')}>
            <Text style={styles.text}>
              Customer
            </Text>
            </TouchableOpacity>  
            <TouchableOpacity onPress={() => navigation.navigate('cheflogin')}>
            <Text style={styles.text}>
              Chef
            </Text>
            </TouchableOpacity>  
            <TouchableOpacity onPress={() => navigation.navigate('managerlogin')}>
            <Text style={styles.text}>
              Manager 
            </Text>
            </TouchableOpacity>  
          </View>
          

      );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f6f7f8',
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    textAlign: 'center',  
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#dcdcde',
  },
});