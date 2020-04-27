import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';

var array = [9, 11, 8, 8, 12];
    

    var sum = array.reduce(function(a, b){
        return a + b;
    }, 0);
    var ave = sum/array.length;

export default function main({navigation}){
    const [time, setTime] = useState('');
    return(
        <View style={styles.container}>
            <Image source={require('../assets/burger1.jpg')} style={styles.image} />
            <Text style={{color: '#f04b48', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20}}>Time Estimated:</Text>
            <TextInput
                style={styles.input}
                placeholder={'Estimated time:'+ ave}
                onChangeText={(text)=>setTime(text)}
                value={time} 
            />
            
            <View style={{marginTop: 40, width: 160}}>
                <TouchableOpacity onPress={() => navigation.navigate('chefdetail')}>
                    <Text style={{color: '#f04b48'}}> Conformed!</Text>
                </TouchableOpacity>  
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 40,
        paddingHorizontal: 60, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginBottom: 10,
        width: 300, 
        height: 175,
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