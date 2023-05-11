import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './screens/Home';
import { EventDetailsScreen } from './screens/EventDetails';
import { ProfileScreen } from './screens/Profile';
// import { ImageDetailsScreen } from './screens/ImageDetails';
import React, { useEffect, useState } from 'react';
import { Session, createClient } from '@supabase/supabase-js';
import { supabase } from './supabase';
import Login from './components/Login/Login';
import { Button , Image} from 'react-native';
import Icons from '@expo/vector-icons/FontAwesome5';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from './screens/Search';
import { CreateEventScreen } from './screens/CreateEvent';

export type RootStackParamList = {
  Home: undefined
  Profile: undefined
  EventDetails: { eventId: string }
  'Search events': undefined;
  EventCreate: undefined
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator<RootStackParamList>();

export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="HomeStack" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EventDetails" component={EventDetailsScreen} options={{  headerShown: false }} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {session && session.user ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerShown: false,
              tabBarIcon: () => <Icons name='home' size={18} color="#f5694d" />
            }}
          />
          <Tab.Screen
            name="Search events"
            component={SearchScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => <Icons name='search' size={18} color="#f5694d" />
            }}
          />
          <Tab.Screen
            name="EventCreate"
            component={CreateEventScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => <Icons name='search' size={18} color="#f5694d" />
            }}
          />
          <Tab.Screen name="Profile" component={ProfileScreen} 
              options={{
              headerRight: () => (
                <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
              ),
              tabBarIcon: () => <Icons name='user-alt' size={18} color="#f5694d" />
            }}
          />
        </Tab.Navigator>
      ) : <Login />
      }
    </NavigationContainer>
  );
}