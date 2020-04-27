import React, { useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Component } from 'react';


export default function Menu({navigation}){
    function getAvg(ratings) {
        const total = ratings.reduce((acc, c) => acc + c, 0);
        return total / ratings.length;
        }
    const ratings1 = [5, 5, 5, 3, 4, 5, 5, 5, 5, 4, 4, 4, 3, 4, 4, 5, 4, 3, 3, 3, 3, 5, 4, 3, 4, 4, 3, 4, 5, 5];
    const average1 = getAvg(ratings1);

    const ratings2 = [4, 5, 3, 5, 5, 5, 5, 4, 4, 3, 3, 4, 4, 5, 4, 3, 3, 5, 3, 3, 4, 4, 3, 4, 5, 5, 3, 3, 4, 4];
    const average2 = getAvg(ratings2);

    const ratings3 = [5, 3, 3, 5, 4, 5, 3, 5, 3, 4, 4, 4, 5, 4, 3, 5, 3, 5, 5, 4, 4, 5, 5, 5, 4, 3, 3, 4, 4, 3];
    const average3 = getAvg(ratings3);

    const ratings4 = [3, 3, 4, 4, 3, 3, 4, 5, 4, 3, 4, 4, 4, 3, 5, 5, 4, 3, 5, 3, 3, 4, 4, 5, 3, 3, 5, 4, 4, 4];
    const average4 = getAvg(ratings4);

    const ratings5 = [4, 3, 5, 5, 5, 3, 3, 5, 4, 4, 5, 5, 3, 5, 5, 4, 5, 5, 3, 4, 3, 5, 4, 3, 5, 4, 4, 4, 5, 4];
    const average5 = getAvg(ratings5);

    const ratings6 = [4, 5, 4, 5, 4, 3, 5, 4, 5, 3, 5, 3, 3, 4, 4, 5, 5, 4, 5, 5, 3, 5, 5, 4, 5, 5, 4, 5, 4, 5];
    const average6 = getAvg(ratings6);

    const ratings7 = [5, 4, 4, 3, 3, 3, 5, 4, 5, 3, 5, 4, 3, 4, 5, 4, 3, 5, 4, 3, 4, 5, 3, 5, 4, 3, 3, 5, 4, 5];
    const average7 = getAvg(ratings7);
    
    console.log('\n\n'+'Ratings:'+'James '+average1 +'\n'+ 'George '+average2+'\n'+'Ringo '+average3+'\n'+'John '+average4+'\n'+'Eric '+average5+'\n'+'Paul '+average6+'\n'+'Chris '+average7);

    
    
 return(
        

        <ScrollView>
        <View style={{ flex: 1, alignItems: 'center'}}>
        <Text style={styles.title}>Current Employee Ratings
        </Text>
        <Text style={styles.Menu}>Values printed in console log</Text>
        <Text style={styles.menuItem}>James 4.1</Text>
        <Text style={styles.menuItem}>George 3.966666666666667</Text>
        <Text style={styles.menuItem}>Ringo 4.066666666666666</Text>
        <Text style={styles.menuItem}>John 3.8333333333333335</Text>
        <Text style={styles.menuItem}>Eric 4.2</Text>
        <Text style={styles.menuItem}>Paul 4.333333333333333</Text>
        <Text style={styles.menuItem}>Chris 4</Text>
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    title: {
      marginBottom: 20,
      fontSize:30,
      fontWeight: 'bold',
    },
    menuItem:{
      marginTop:10,
      fontSize:20,
    },
  });