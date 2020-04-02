import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
import Header from '../Components/header';
import Footer from '../Components/footer';

export default function OrderSummary({navigation}){
    const [items, setitems] = useState([
        {name: 'Grilled Chicken Sandwich', qty: 3, price: 4.25},
        {name: 'Honey Chilli Potatoes', qty: 6, price: 1.49},
        {name: 'Fried Noodles', qty: 2, price: 2.59}
    ]);
    const subTotal = items.reduce((sum, item)=>(sum+item.price*item.qty), 0);
    const tax = subTotal*0.15; // 15% sales tax
    const totalCharge = subTotal+tax;

    return (
        <View style={styles.container}>
            <View><Header title='Order Summary'/></View>
            <View style={{flex: 1, padding: 15}}>
                <FlatList 
                    data={items}
                    renderItem={({ item })=>(
                        <View style={{borderBottomWidth: 1, padding: 5}}>
                            <Text>{item.name}</Text>
                            <Text>{item.qty} @ ${item.price}</Text>
                            <Text>${item.qty*item.price}</Text>
                        </View>
                    )}
                />
                <Text>Sub Total: ${subTotal.toFixed(2)}</Text>
                <Text>Sales Tax: ${tax.toFixed(2)}</Text>
                <Text>Total Charges: ${totalCharge.toFixed(2)}</Text>
            </View>
            <View><Footer title='Confirm Order'/></View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('CardPayment')}>
                <Text style={{color: '#f04b48', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20}}>Go to payment</Text>
                </TouchableOpacity> 
            </View>
        </View>
    );
}
  
  const styles = StyleSheet.create({
      container: {
          flex: 1
        },
  });