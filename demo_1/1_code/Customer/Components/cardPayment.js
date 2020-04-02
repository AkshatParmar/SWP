import React from 'react';
import { StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View, TextInput } from 'react-native';
import SwipeButton from 'rn-swipe-button';

export default function CardPayment() {
    return (
      <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder='Cardholder Name'
        />
        <TextInput
            style={styles.input}
            placeholder='Card Number'
        />
        <TextInput
            style={styles.input}
            placeholder='Expiry Date (MM/YYYY)'
        />
        <TextInput
            style={styles.input}
            placeholder='CVV'
            secureTextEntry={true}
        />
        <TextInput
            style={styles.input}
            placeholder='Zip'
        />
        <SwipeButton height={25} title='Swipe Your Card' onSwipeSuccess={() => console.log('Swiped Successfully')} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 40,
    },
    input: {
        margin: 10,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: 'gray',
        width: 250,
        alignSelf: 'center'
    },
  });
  