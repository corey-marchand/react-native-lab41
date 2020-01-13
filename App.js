import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import PhoneAppScreen from './screens/ComponentScreen';
import ListScreen from './screens/ListScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Phone: PhoneAppScreen,
    List: ListScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
