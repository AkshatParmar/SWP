import React from 'react';
import { StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import OrderSummary from './Screens/OrderSummary';

import CardPayment from './Components/cardPayment';

export default function App() {
  return (
    <View style={styles.container}>
      <OrderSummary/>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
