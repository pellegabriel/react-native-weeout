import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './screens/Home';
import { EventDetailsScreen } from './screens/EventDetails';
import { ProfileScreen } from './screens/Profile';
import React, { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from './supabase';
import Login from './components/Login/Login';
import Icons from '@expo/vector-icons/FontAwesome5';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from './screens/Search';
import { CreateEventScreen } from './screens/CreateEvent';

export type RootStackParamList = {
  Home: undefined
  Profile: undefined
  EventDetails: { eventId: string }
  'Search events': { categoryId: number };
  EventCreate: undefined
  Inicio: undefined;

};

const Stack = createStackNavigator<RootStackParamList>();
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
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EventDetails" component={EventDetailsScreen} options={{  headerShown: false }} />
        <Stack.Screen name="EventCreate" component={CreateEventScreen} options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: 'transparent'
          },
          }}/>

      </Stack.Navigator>
    );
  }

  const UserStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EventCreate" component={CreateEventScreen} options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: 'transparent'
          },
          }}/>
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {session && session.user ? (
        <Tab.Navigator>
       <Tab.Screen
          name="Inicio"
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
            name="Profile"
            component={UserStack}
            options={{
              headerShown: false,
              tabBarIcon: () => <Icons name='home' size={18} color="#f5694d" />
            }}
          />
        </Tab.Navigator>
      ) : <Login />
      }
    </NavigationContainer>
  );
}