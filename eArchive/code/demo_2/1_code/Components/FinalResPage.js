import React, { useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, Animated} from 'react-native';
import {ImageButton} from 'react-native-image-button-text';
import Header from '../Components/header';

export default function Menu({navigation}){
    const [item] = useState('');    // item has 3 properties, sting description and price

    
    return(
        <View style={styles.container}>
             
             <View><Header 
            title='Reservation'/></View>

        <View style={{marginLeft:80, position: 'absolute', marginTop: 300,  width: 250}}>
                <Button
                    onPress={() => console.log('Server Called')}
                    title='Call Server'
                    color='#f04b48' 
                />
        </View>       
        
        <View style={{marginLeft:80, position: 'absolute', marginTop: 250,  width: 250}}>
                <Button
                    onPress={() => navigation.navigate('customermenu')}
                    title='Menu'
                    color='#f04b48' 
                />
        </View>   
        <View style={{marginLeft:80, position: 'absolute', marginTop: 200, width: 250}}>
                <Button
                    onPress={() => navigation.navigate('CardPayment')}
                    title='Pay'
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
  
});