import React, { useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Component } from 'react';

export default function Menu({navigation}){
    console.log('Based on popularity: ')
    return(
        <ScrollView>
        <View style={{ flex: 1, alignItems: 'center'}}>
        <Text style={styles.title}>Today
        </Text> 
        <Text style={styles.menuItem}>
            Breakfast Burrito x 4
        </Text>
        
        <Text style={styles.title}>This Week
        </Text>  
        <Text style={styles.menuItem}>
            Beef Bowl x 14
        </Text>
        <Text style={styles.title}>This Month
        </Text> 
        <Text style={styles.menuItem}>
            Fettucini x 31
        </Text>
        <Text style={styles.title}>Least Popular (discontinue)
        </Text> 
        <Text style={styles.menuItem}>
            Clam Chowder,
            Asparagus Soup,
            Greek Salad
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