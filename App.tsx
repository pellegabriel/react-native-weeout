import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './screens/Home';
import { EventDetailsScreen } from './screens/EventDetails';
import { ProfileScreen } from './screens/Profile';
import { ImageDetails } from './screens/ImageDetailsScreen';
import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from './supabase';
import Login from './components/Login/Login';

export type RootStackParamList = {
  Home: undefined
  Profile: undefined
  EventDetails: { eventId: string }
  ImageGrid: undefined;
  ImageDetails: { imageId: number };
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(session)
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <NavigationContainer>
      {session && session.user ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="EventDetails" component={EventDetailsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="ImageDetails" component={ImageDetails} initialParams={{ imageId: 1 }}/>
        </Tab.Navigator>
      ) : <Login />
      }
    </NavigationContainer>
  );
}