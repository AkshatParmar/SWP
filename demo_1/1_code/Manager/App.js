import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Table } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}> Manager </Text>
      <Button
        title="Tables"
        onPress={() => navigation.navigate('Tables')}
      />
      <Button
        title="Menu"
        onPress={() => navigation.navigate('Menu')}
      />
      <Button
        title="Timesheet"
        onPress={() => navigation.navigate('Timesheet')}
      />
      <Button
        title="Analytics"
        onPress={() => navigation.navigate('Analytics')}
      />
    </View>
  );
}

function TablesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}> View Table Status</Text>

      <Button 
        title="Table1"
        onPress={() => navigation.navigate('Table1')}
      ></Button>
      <Text style={styles.table}> Table 2</Text>
      <Text style={styles.table}> Table 3</Text>
      <Text style={styles.table}> Table 4</Text>
    </View>
  )
}

function Table1Screen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}> Table Status</Text>
      <Text>Reserved</Text>
      <Text>Seats 4</Text>
      <Text>Server: </Text>
      <Button
        title="View Bill"
        onPress={() => viewBill()}
      ></Button>
    </View>

  )
}

/* Trying to create individual screens for each table with multiple options
function tables() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tables Overviews" component={Tables} />
        <Stack.Screen name="Table1" component={Table1} />
        <Stack.Screen name="Table2" component={Table2} />
        <Stack.Screen name="Table3" component={Table3} />
        <Stack.Screen name="Table4" component={Table4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/ 

function MenuScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'baseline' }}>
      <Text style={styles.title}>Breakfast</Text>
      <Text style={styles.menuItem}>Breakfast Burrito</Text>
      <Text>Scrambled Eggs, Ham, Swiss Cheese</Text>
      <Text style={styles.menuItem}>Sausage Egg&Cheese</Text>
      <Text>Turkey Sausage, Over easy eggs, and American Cheese</Text>
      <Text style={styles.title}>Lunch</Text>
      <Text style={styles.menuItem}>Shrimp Tacos</Text>
      <Text>4 Soft shell tacos with your toppings</Text>
      <Text style={styles.menuItem}>Beef Bowl</Text>
      <Text>White rice, sour cream, salsa, queso, with steak</Text>
      <Text style={styles.title}>Dinner</Text>
      <Text style={styles.menuItem}>Fettucini</Text>
      <Text>Pasta in vodka sauce with parmesan</Text>
      <Text style={styles.menuItem}>Rigottoni</Text>
      <Text>Clam chowder</Text>
      <Button
        title="EDIT MENU"
        ></Button>
    </View>
  )
}



function TimesheetScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'baseline' }}>
      <Text style={styles.title}>Employee Check-In</Text>
      <Text style={styles.title}>Today's Check-Ins 7</Text>
      <Text style={styles.menuItem}>James Blake</Text>
      <Text>Bus</Text>
      <Text>Clock in: 8:30AM</Text>
      <Text>Clock out: 4:30PM</Text>
      <Text>Tables 4,9</Text>
      <Text style={styles.menuItem}>George Harrison</Text>
      <Text>Kitchen</Text>
      <Text>Clock in: 10:30AM</Text>
      <Text>Clock out: NULL</Text>
      <Text>Tables NULL</Text>
      <Text style={styles.menuItem}>Ringo Starr</Text>
      <Text>Bus</Text>
      <Text>Clock in: 10:00AM</Text>
      <Text>Clock out: 6:00PM</Text>
      <Text>Tables 2, 5, 6</Text>
      <Text style={styles.menuItem}>John Lennon</Text>
      <Text>Bus</Text>
      <Text>Clock in: 11:00AM</Text>
      <Text>Clock out: NULL</Text>
      <Text>Tables NULL</Text>
      <Text style={styles.menuItem}>Eric Clapton</Text>
      <Text>Kitchen</Text>
      <Text>Clock in: 11:00AM</Text>
      <Text>Clock out: 5:00PM</Text>
      <Text>Tables NULL</Text>
      <Text style={styles.menuItem}>Paul No</Text>
      <Text>Bus</Text>
      <Text>Clock in: 11:00AM</Text>
      <Text>Clock out: 5:00PM</Text>
      <Text>Tables 1, 3, 8</Text>
      <Text style={styles.menuItem}>Chris Paul</Text>
      <Text>Bus</Text>
      <Text>Clock in: 7:00AM</Text>
      <Text>Clock out: NULL</Text>
      <Text>Tables 10</Text>
    </View>

  )
}

function AnalyticsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'baseline' }}>
      <Text style={styles.title}> Choose data to view:</Text>
      <Text style={styles.menuItem}>Employee</Text>
      <Button
        title="Employee Ratings"
        ></Button>
      <Button
        title="Employee Feedbacks"
        ></Button>
      <Text style={styles.menuItem}>Accounting</Text>
      <Button
        title="Efficiency Score"
        ></Button>
      <Button
        title="Net Profit"
        ></Button>
      <Text style={styles.menuItem}>Misc</Text>
      <Button
        title="Most Popluar Menu Item"
        ></Button>
      <Button
        title="Traffic Predicitions"
        ></Button>
      
    </View>
  )
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Manager Account" component={HomeScreen} />
        <Stack.Screen name="Tables" component={TablesScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Timesheet" component={TimesheetScreen} />
        <Stack.Screen name="Analytics" component={AnalyticsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize:30,
    fontWeight: 'bold',
  },
  table: {
    marginTop: 20,
    width: 120,
    height: 120,
    backgroundColor: '#4287f5',
  },
  menuItem:{
    marginTop:10,
    fontSize:20,
  },
});