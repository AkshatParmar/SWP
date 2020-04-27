import React, { useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Menu({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center',   }}>
      <ScrollView>
      <Text style={styles.title}>Breakfast</Text>
      <Text style={styles.menuItem}>Breakfast Burrito</Text>
      <Text>Scrambled Eggs, Ham, Swiss Cheese</Text>
      <Text style={styles.menuItem}>Sausage Egg and Cheese</Text>
      <Text>Turkey Sausage, Over easy eggs, and American Cheese</Text>
      <Text style={styles.title}>Lunch</Text>
      <Text style={styles.menuItem}>Shrimp Tacos</Text>
      <Text>4 Soft shell tacos with your toppings</Text>
      <Text style={styles.menuItem}>Beef Bowl</Text>
      <Text>White rice, sour cream, salsa, queso, with steak</Text>
      <Text style={styles.title}>Dinner</Text>
      <Text style={styles.menuItem}>Fettucini</Text>
      <Text>Pasta in vodka sauce with parmesan</Text>
      <Text style={styles.menuItem}>Rigottoni</Text>
      <Text>Clam chowder</Text>
      <Button
        title="EDIT MENU"
        onPress={() => navigation.navigate('editmenu')}
        ></Button>
    </ScrollView>
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