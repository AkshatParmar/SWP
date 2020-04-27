import React, { useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Table({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ScrollView>
        <Text style={styles.title}> Table Status</Text>
        <Text style ={styles.tablegreen}>Table 1{"\n"}Reserved{"\n"}Seats:4{"\n"}Server: Sam</Text>
        <Button
          title="View Details"
          onPress={() => navigation.navigate('table1')}
        ></Button>
        <Text style ={styles.tablegreen}>Table 2{"\n"}Reserved{"\n"}Seats:4{"\n"}Server: Sam</Text>
        <Button
          title="View Details"
          onPress={() => navigation.navigate('table2')}
        ></Button>
        <Text style ={styles.tablered}>Table 3{"\n"}Reserved{"\n"}Seats:4{"\n"}Server: Sam</Text>
        <Button
          title="View Details"
          onPress={() => navigation.navigate('table3')}
        ></Button>
        <Text style ={styles.tablered}>Table 4{"\n"}Reserved{"\n"}Seats:6{"\n"}Server: Joe</Text>
        <Button
          title="View Details"
          onPress={() => navigation.navigate('table4')}
        ></Button>    
        <Text style ={styles.tablegreen}>Table 5{"\n"}Reserved{"\n"}Seats:6{"\n"}Server: Joe</Text>
        <Button
          title="View Details"
          onPress={() => navigation.navigate('table5')}
        ></Button>   
        </ScrollView>          
      </View>
  
    )
  }

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize:30,
    fontWeight: 'bold',
  },
  tablegreen: {
    backgroundColor: 'green',
    fontSize: 20
  },
  tablered: {
    backgroundColor: 'red',
    fontSize: 20

  },
  menuItem:{
    marginTop:10,
    fontSize:20,
  },
});