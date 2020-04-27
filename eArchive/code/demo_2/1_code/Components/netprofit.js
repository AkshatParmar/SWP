import React, { useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Component } from 'react';

export default function Menu({navigation}){
    return(
        <ScrollView>
        <View style={{ flex: 1, alignItems: 'center'}}>
        <Text style={styles.title}>Profits
        </Text>
        <Text style={styles.menuItem}>+$234.12</Text>
        <Text style={styles.Text}>
        Restaurant-level profit = (combined revenue) – (cost of goods sold + labor costs + controllable expenses + non-controllable expenses)
        </Text>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
      marginBottom: 20,
      fontSize:30,
      fontWeight: 'bold',
    },
    menuItem:{
      marginTop:10,
      fontSize:20,
    },
  });