import React, { useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function Analytics({navigation}){
  return (
    <View>
      <Text style={styles.title}> Choose data to view:</Text>
      <Text style={styles.menuItem}>Employee</Text>
      <Button
        title="Employee Ratings"
        onPress={() => navigation.navigate('emprating')}
        ></Button>
      <Button
        title="Employee Remarks"
        onPress={() => navigation.navigate('remarks')}
        ></Button>
      <Text style={styles.menuItem}>Accounting</Text>
      
      <Button
        title="Net Profit"
        onPress={() => navigation.navigate('netprofit')}
        ></Button>
      <Text style={styles.menuItem}>Misc</Text>
      <Button
        title="Most Popluar Menu Item"
        onPress={() => navigation.navigate('popularitem')}
        ></Button>
      <Button
        title="Traffic Predicitions"
        onPress={() => navigation.navigate('traffic')}
        ></Button>
    </View>
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