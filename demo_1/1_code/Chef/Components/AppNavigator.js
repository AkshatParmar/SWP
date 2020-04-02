import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import login from './login';
import register from './register';
import main from './main';
import detail from './detail';
import done from './done';

const stack = createStackNavigator({
    login: {screen: login},
    register: { screen: register },
    main: { screen: main},
    detail: {screen: detail},
    done: {screen: done},
});
 
const AppNavigator = createAppContainer(stack);

export default AppNavigator;