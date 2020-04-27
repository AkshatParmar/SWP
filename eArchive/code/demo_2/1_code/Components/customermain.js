import React, { useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, Animated} from 'react-native';
import {ImageButton} from 'react-native-image-button-text';
import Header from '../Components/header';

export default function Menu({navigation}){
    const [item] = useState('');    // item has 3 properties, sting description and price

    
    return(
        <View style={styles.container}>
             
             <View><Header 
            title='Main Page'/></View>
        
        <View style = {{flexDirection: 'row',justifyContent: 'space-evenly',}}>
       
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Text style={{ color: '#f04b48', fontSize: 18, fontWeight: 'bold'}}>Menu</Text>
            </TouchableOpacity>  
        </View>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
            <Text style={{color: '#f04b48', fontSize: 18, fontWeight: 'bold'}}>Favorites</Text>
            </TouchableOpacity>  
        </View>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('ordersummary')}>
            <Text style={{color: '#f04b48', fontSize: 18, fontWeight: 'bold'}}>My Orders</Text>
            </TouchableOpacity>  
        </View>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('ordersummary')}>
            <Text style={{color: '#f04b48', fontSize: 18, fontWeight: 'bold'}}>IMRewards</Text>
            </TouchableOpacity>  
        </View>
        </View>

 
        <View style = {{flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', marginLeft: 20 ,justifyContent: 'space-evenly',}}>
        <ImageButton style={{marginTop: 20}} 
        width={120} 
        height={120} 
        onPress={() => navigation.navigate('Burgers')}
        text="Burgers"
        fontSize = {20}
        fontWeight = "Bold"
        source={require('../assets/burger.png')}/>

            
        <ImageButton style={{marginTop: 20}} 
        width={120} 
        height={120} 
        onPress={() => navigation.navigate('CardPayment')}
        text="Pizzas"
        fontSize = {20}
        fontWeight = "Bold"
        source={require('../assets/pizza.jpg')}/>

        <ImageButton style={{marginTop: 20}} 
        width={120} 
        height={120} 
        onPress={() => navigation.navigate('CardPayment')}
        text="Drinks"
        fontSize = {20}
        fontWeight = "Bold"
        source={require('../assets/drinks.png')}/>

        <ImageButton style={{marginTop: 20}} 
        width={120} 
        height={120} 
        onPress={() => navigation.navigate('CardPayment')}
        text="Icecreams"
        fontSize = {20}
        fontWeight = "Bold"
        source={require('../assets/icecream.jpg')}/>

        </View>

        <View style={{marginLeft:80, position: 'absolute', marginTop: 678,  width: 250}}>
                <Button
                    onPress={() => navigation.navigate('Reservation')}
                    title='Reservation'
                    color='#f04b48' 
                />
        </View>   
        <View style={{marginLeft:80, position: 'absolute', marginTop: 635, width: 250}}>
                <Button
                    onPress={() => navigation.navigate('ordersummary')}
                    title='Take Away'
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