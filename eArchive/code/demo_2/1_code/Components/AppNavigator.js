import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import begin from './begin';

import cheflogin from './cheflogin';
import chefregister from './chefregister';
import chefmain from './chefmain';
import chefdetail from './chefdetail';
import chefdone from './chefdone';
import chefcallserver from './chefcallserver'
import chefestimate from './chefestimate'

import managerlogin from './managerlogin';
import managermenu from './managermenu';
import manageranalytics from './manageranalytics'
import emprating from './emprating'
import popularitem from './popularitem'
import traffic from './traffic'
import netprofit from './netprofit'
import remarks from './remarks'
import managerfood from './managerfood'
import managertable from './managertable'
import managertimesheet from './managertimesheet'
import table1 from './tablepage1'
import table2 from './tablepage2'
import table3 from './tablepage3'
import table4 from './tablepage4'
import table5 from './tablepage5'
import editmenu from './editmenu'

import customerlogin from './customerlogin';
import customermain from './customermain';
import ordersummary from './ordersummary';
import CardPayment from './CardPayment';
import Burgers from './Burgers';
import Favorites from './Favorites';
import Reservation from './Reservation';
import TableMap from './TableMap';

const stack = createStackNavigator({
    begin: {screen:begin},
    
    //chef
    cheflogin: {screen: cheflogin},
    chefregister: { screen: chefregister },
    chefmain: { screen: chefmain},
    chefdetail: {screen: chefdetail},
    chefdone: {screen: chefdone},
    chefcallserver: {screen: chefcallserver},
    chefestimate: {screen: chefestimate},

    //manager
    managerlogin: {screen: managerlogin},
    managermenu: {screen: managermenu},
    manageranalytics: {screen: manageranalytics},
    emprating: {screen: emprating},
    popularitem: {screen: popularitem},
    traffic: {screen: traffic},
    netprofit: {screen: netprofit},
    remarks: {screen: remarks},
    managerfood: {screen:managerfood},
    managertable: {screen: managertable},
    managertimesheet: {screen: managertimesheet},
    table1: {screen: table1},
    table2: {screen: table2},
    table3: {screen: table3},
    table4: {screen: table4},
    table5: {screen: table5},
    editmenu: {screen: editmenu},


    //customer
    customerlogin: {screen: customerlogin},
    customermain: {screen: customermain},
    ordersummary: {screen: ordersummary},
    CardPayment: {screen: CardPayment},
    Burgers: {screen: Burgers},
    Favorites: {screen: Favorites},
    Reservation: {screen: Reservation},
    TableMap: {screen: TableMap}
});
 
const AppNavigator = createAppContainer(stack);

export default AppNavigator;