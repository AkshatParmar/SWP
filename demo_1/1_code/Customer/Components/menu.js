import React, { useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function Menu(){
    const [item] = useState('');    // item has 3 properties, sting description and price


    return(
        <View style={styles.header}>
            <Text>Menu</Text>
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
});
