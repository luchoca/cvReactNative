// MainNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CvScreen from './CvScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: '' }} />
      <Stack.Screen name="CvScreen" component={CvScreen} options={{ title: 'Mi CV' }} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
