//HERE will be the main page for GUI
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
            <Text style={{color: '#f04b48', fontSize: 40, fontWeight: 'bold', textAlign: 'center', marginBottom: 20}}>Incoming order
            <Image
                style={styles.image}
                source={require('../assets/Logo.png')}
              />
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('detail')}>
            <Text style={styles.text}>
              burger combo
              <Image
                style={styles.image}
                source={require('../assets/burger1.jpg')}
              />
            </Text>
            </TouchableOpacity>  
            <Text style={styles.text}>
              cheessburger
              <Image
                style={styles.image}
                source={require('../assets/chessburger.jpg')}
              />
            </Text>
            <Text style={styles.text}>
              steak burger
              <Image
                style={styles.image}
                source={require('../assets/steakburger.jpg')}
              />
            </Text>
            <Text style={styles.text}>
              chick nugget
              <Image
                style={styles.image}
                source={require('../assets/nugget.jpg')}
              />
            </Text>
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