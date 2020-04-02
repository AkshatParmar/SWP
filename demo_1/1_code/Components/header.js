import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Ionicons } from '@expo/vector-icons'

export default function Header({ title }){
    return(
        <View style={styles.header}>
         
            <View style={{flex: 1}}>
                <Image source={require('../assets/BellLogo.png')} style={{width: 85, height: 50, alignSelf: 'center'}} /> 
                <Text style={styles.title}>{title}</Text>      
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#292727',
        height: 120,
        paddingTop: 30,
        flexDirection: 'row'
    },
    title: {
        padding: 5,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    }
});