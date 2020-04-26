import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View
  } from 'react-native';

 
export default function main({navigation}){
      return(
          <View style={styles.container}>
             <Text style={styles.text}>
              burger combo
              <Image
                style={styles.image}
                source={require('../assets/burger1.jpg')}
              />
            </Text>
            <Text style={{fontSize: 20}}>
            order x1
            </Text>
            <Text style={{fontSize: 30}}>
            special instruction:
            </Text>
            <Text style={{fontSize: 20}}>
            add more onions, 
            add more sources,
            with coke
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('chefmain')}>
            <Text style={{color: '#f04b48', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20}}>Back</Text>
            </TouchableOpacity>  
            <TouchableOpacity onPress={() => navigation.navigate('chefdone')}>
            <Text style={{color: '#f04b48', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20}}>Done</Text>
            </TouchableOpacity>  
            <TouchableOpacity onPress={() => navigation.navigate('chefdone')}>
            <Text style={{color: '#f04b48', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20}}>Call Server</Text>
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
      fontSize: 30,
      fontWeight: 'bold',
      backgroundColor: '#dcdcde',
    },
  });