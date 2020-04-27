import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function Menu({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
        <Text style={styles.title}> Add Menu Item</Text>
        <TextInput
                style={styles.input}
                placeholder='Menu Item'
            />
        <TextInput
                style={styles.input}
                placeholder='Item Price'
            />
      <Button
        title="Add"
        ></Button>

    <Text style={styles.title}> Remove Menu Item</Text>
        <TextInput
                style={styles.input}
                placeholder='Menu Item'
            />
      <Button
        title="Add"
        ></Button>

        <Text style={styles.title}> Change Menu Price</Text>
        <TextInput
                style={styles.input}
                placeholder='Menu Item'
            />
        <TextInput
                style={styles.input}
                placeholder='New Price'
            />
      <Button
        title="Add"
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
  input: {
    color: '#fff',
    marginTop: 20,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: 'gray',
    width: 200
},
});