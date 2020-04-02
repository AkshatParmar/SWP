import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


export default function Footer({ title }){
    return(
        <View style={styles.footer}>
            <Button 
                title={title}
                color='#f04b48'
                onPress={()=>console.log(`${title} is invoked.`)} 
            />      
        </View>
    );
}

const styles = StyleSheet.create({
    footer:{
        justifyContent: 'center',
        backgroundColor: '#292727',
        height: 80,
        paddingHorizontal: 60
    },
});