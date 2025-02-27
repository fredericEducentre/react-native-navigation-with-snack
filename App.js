import { createStaticNavigation} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './Screens/ProfileScreen'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'

const MyTabs = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: HomeScreen,
    Profil: ProfileScreen,
    Product: ProductScreen
  },
});

const Navigation = createStaticNavigation(MyTabs);

export default function App() {
  return <Navigation />;
}
