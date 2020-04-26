import React, { useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function Menu({navigation}){
    const [item] = useState('');    // item has 3 properties, sting description and price


    return(
        <View>
        <View style={styles.header}>
            <Text>Menu</Text>
        </View>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('ordersummary')}>
            <Text style={{color: '#f04b48', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20}}>OrderSummary</Text>
            </TouchableOpacity>  
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
});