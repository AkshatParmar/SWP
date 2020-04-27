import React, { useState} from 'react';
import {StyleSheet, TextInput, View, Button, Image, TouchableOpacity, Animated} from 'react-native';
import {ImageButton} from 'react-native-image-button-text';
import Header from '../Components/header';

export default function Menu({navigation}){
    const [item] = useState('');    // item has 3 properties, sting description and price

    
    return(
        <View style={styles.container}>
             
             <View><Header 
            title='RESERVATION'/></View>
        
    
        
        <TextInput
            style={styles.input}
            placeholder='Customer Name'
        />
        <TextInput
            style={styles.input}
            placeholder='Party Size'
        />
        <TextInput
            style={styles.input}
            placeholder='Customer email/phone #'
        />
        
           <View style={{marginLeft:80, position: 'absolute', marginTop: 635, width: 250}}>
         <Button
         onPress={() => navigation.navigate('TableMap')}
         title='NEXT'
         color='#f04b48' 
         />
        </View>  
        </View>   
  
       

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
    header:{
        backgroundColor: '#292727',
        height: 120,
        paddingTop: 30,
        flexDirection: 'row'
    },
    input: {
        marginTop: 50,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: 'gray',
        width: 250,
        alignSelf: 'center'
    },
  
});