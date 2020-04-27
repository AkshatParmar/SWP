import React, { useState} from 'react';
import {StyleSheet, TextInput, View, Button, Image, TouchableOpacity, Animated} from 'react-native';
import {ImageButton} from 'react-native-image-button-text';
import Header from '../Components/header';

export default function Menu({navigation}){
    const [item] = useState('');    // item has 3 properties, sting description and price

    
    return(
        <View style={styles.container}>
             
             <View><Header 
            title='Table Reservation'/></View>
        

 
        <View style = {{flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' ,justifyContent: 'space-evenly',}}>
        <Image style={{marginTop: 20}} 
        width={400} 
        height={300} 
        onPress={() => navigation.navigate('Burgers')}
        text="Burgers"
        fontSize = {20}
        fontWeight = "Bold"
        source={require('../assets/tablemap.png')}/>

        </View>
        
        <TextInput
            style={styles.input}
            placeholder='Reservation Time HH/MM'
        />
        
        <View style={{marginLeft:80, position: 'absolute', marginTop: 635, width: 250}}>
                <Button
                    onPress={() => navigation.navigate('FinalResPage')}
                    title='Reserve Table'
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