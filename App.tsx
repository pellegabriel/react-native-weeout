import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './screens/Home';
import { EventDetailsScreen } from './screens/EventDetails';
import { ProfileScreen } from './screens/Profile';
import { ImageDetails } from './screens/ImageDetailsScreen';

export type RootStackParamList = {
  Home: undefined
  Profile: undefined
  EventDetails: { eventId: string }
  ImageGrid: undefined;
  ImageDetails: { imageId: number };
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="EventDetails" component={EventDetailsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="ImageDetails" component={ImageDetails}   initialParams={{ imageId: 1 }}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}