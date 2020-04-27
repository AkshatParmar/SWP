import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Component } from 'react';

export default function Menu({navigation}){
    return(
        <ScrollView>
        <View style={{ flex: 1, alignItems: 'center'}}>
        <Text style={styles.title}> Feedback </Text>
        <TextInput
                style={styles.input}
                placeholder='Employee Name'
            />
        <TextInput
                style={styles.input}
                placeholder='Remark'
            />
            <Button
        title="Submit"
        ></Button>

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