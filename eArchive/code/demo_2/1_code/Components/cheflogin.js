import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';

export default function Login({navigation}) {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View style={styles.container}>
            <Image source={require('../assets/Logo.png')} style={styles.logo} />
            <Text style={{color: '#f04b48', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20}}>Chef Login</Text>
            <TextInput
                style={styles.input}
                placeholder='Email'
                onChangeText={(text)=>setEmail(text)}
                value={email} 
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={(text)=>setPassword(text)}
                value={password} 
            />
            <View style={{marginTop: 40, width: 160}}>
                <Button
                    title="Log in"
                    onPress={() =>
                        navigation.navigate('chefmain')
                    }
                />
            </View>
           
            <TouchableOpacity onPress={() => navigation.navigate('chefregister')}>
                <Text style={{color: '#f04b48'}}> New User? Register!</Text>
            </TouchableOpacity>  
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
    logo: {
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
