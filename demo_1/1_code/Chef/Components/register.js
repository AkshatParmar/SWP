import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';


export default function register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    return(
        <View style={styles.container}>
            <Image source={require('../assets/Logo.png')} style={styles.logo} />
            <Text style={{color: '#f04b48', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20}}>Chef account create</Text>
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
            <TextInput
                style={styles.input}
                placeholder='retype-Password'
                secureTextEntry={true}
                onChangeText={(text)=>setPassword2(text)}
                value={password2} 
            />
            <View style={{marginTop: 40, width: 160}}>
                <Button
                    title="Sign up"
                    onPress={() =>
                    this.props.navigation.navigate('login')
                    }
                />
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
