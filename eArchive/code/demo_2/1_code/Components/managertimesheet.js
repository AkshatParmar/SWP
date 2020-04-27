import React, { useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Menu({navigation}){
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'flex-start',   }}>
    <Text style={styles.title}>Employee Check-In</Text>
    <Text style={styles.title}>Today's Check-Ins 7</Text>
    <Text style={styles.menuItem}>James Blake</Text>
    <Text>Bus</Text>
    <Text>Clock in: 8:30AM</Text>
    <Text>Clock out: 4:30PM</Text>
    <Text>Tables 4,9</Text>
    <Text style={styles.menuItem}>George Harrison</Text>
    <Text>Kitchen</Text>
    <Text>Clock in: 10:30AM</Text>
    <Text>Clock out: NULL</Text>
    <Text>Tables NULL</Text>
    <Text style={styles.menuItem}>Ringo Starr</Text>
    <Text>Bus</Text>
    <Text>Clock in: 10:00AM</Text>
    <Text>Clock out: 6:00PM</Text>
    <Text>Tables 2, 5, 6</Text>
    <Text style={styles.menuItem}>John Lennon</Text>
    <Text>Bus</Text>
    <Text>Clock in: 11:00AM</Text>
    <Text>Clock out: NULL</Text>
    <Text>Tables NULL</Text>
    <Text style={styles.menuItem}>Eric Clapton</Text>
    <Text>Kitchen</Text>
    <Text>Clock in: 11:00AM</Text>
    <Text>Clock out: 5:00PM</Text>
    <Text>Tables NULL</Text>
    <Text style={styles.menuItem}>Paul No</Text>
    <Text>Bus</Text>
    <Text>Clock in: 11:00AM</Text>
    <Text>Clock out: 5:00PM</Text>
    <Text>Tables 1, 3, 8</Text>
    <Text style={styles.menuItem}>Chris Paul</Text>
    <Text>Bus</Text>
    <Text>Clock in: 7:00AM</Text>
    <Text>Clock out: NULL</Text>
    <Text>Tables 10</Text>
  </View>
  </ScrollView>
  );
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