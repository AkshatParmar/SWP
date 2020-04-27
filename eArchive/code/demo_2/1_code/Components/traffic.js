import React, { useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Component } from 'react';

export default function Menu({navigation}){
    return(
        

        <ScrollView>
        <View style={{ flex: 1, alignItems: 'center'}}>
        <Text style={styles.title}>Busiest (updates every week)
        </Text>
        <Text style={styles.menuItem}>Friday</Text>
        <Text style={styles.Menu}>4:00PM - 9:00PM</Text>
        <Text style={styles.menuItem}>Saturday</Text>
        <Text style={styles.Menu}>5:00PM - 11:00PM</Text>
        <Text style={styles.title}>Today </Text>
        <Text style={styles.menuItem}>Takeout Traffic</Text>
        <Text style={styles.menuItem}>Orders: 6</Text>
        <Text style={styles.menuItem}>In-house Traffic</Text>
        <Text style={styles.menuItem}>Served: 11</Text>
        <Text style={styles.title}>This Week </Text>
        <Text style={styles.menuItem}>Takeout Traffic</Text>
        <Text style={styles.menuItem}>Orders: 34</Text>
        <Text style={styles.menuItem}>In-house Traffic</Text>
        <Text style={styles.menuItem}>Served: 38</Text>
        <Text style={styles.title}>This Month </Text>
        <Text style={styles.menuItem}>Takeout Traffic</Text>
        <Text style={styles.menuItem}>Orders: 71</Text>
        <Text style={styles.menuItem}>In-house Traffic</Text>
        <Text style={styles.menuItem}>Served: 66</Text>

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