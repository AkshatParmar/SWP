import React, { useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Menu({navigation}){

  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center'}}>
      <Text style={styles.title}>Bill</Text>
      <Text style={styles.menuItem}> Hamburger: $12.00</Text>
      <Text style={styles.menuItem}> Sandwich: $10.00</Text>
      <Text style={styles.menuItem}> Fries: $4.00</Text>
      <Text style={styles.menuItem}> Onion Rings: $4.00</Text>
      <Text style={styles.title}>Log</Text>
      <Text stlyle={styles.menuItem}>Waiter Sam served order</Text>
      <Text stlyle={styles.menuItem}>Server Sam delivering order</Text>
      <Text stlyle={styles.menuItem}>Server Sam recieved order</Text>
      <Text stlyle={styles.menuItem}>Guests order sent to chefs</Text>
      <Text stlyle={styles.menuItem}>Guests order placed</Text>
      <Text stlyle={styles.menuItem}>Guests sat by server</Text>
      <Text stlyle={styles.menuItem}>Waiter Sam served order</Text>
      <Text stlyle={styles.menuItem}>Server Sam delivering order</Text>
      <Text stlyle={styles.menuItem}>Server Sam recieved order</Text>
      <Text stlyle={styles.menuItem}>Guests order sent to chefs</Text>
      <Text stlyle={styles.menuItem}>Guests order placed</Text>
      <Text stlyle={styles.menuItem}>4 Guests sat by server</Text>
      <Text style={styles.title}>Data</Text>
      <Text stlyle={styles.menuItem}>Average server time: 5:32</Text>
      <Button
        title="Refresh"
        onPress={() => console.log("refreshing statistic") }
      ></Button>
      <Text stlyle={styles.menuItem}>Average wait time: 3:32</Text>
      <Button
        title="Refresh"
        onPress={() => console.log("refreshing statistic") }
      ></Button>
      <Text stlyle={styles.menuItem}>Average number of guests: 3</Text>
      <Button
        title="Refresh"
        onPress={() => console.log("refreshing statistic") }
      ></Button>
      <Text stlyle={styles.menuItem}>Percent Time Occupied: 45%</Text>
      <Button
        title="Refresh"
        onPress={() => console.log("refreshing statistic") }
      ></Button>
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