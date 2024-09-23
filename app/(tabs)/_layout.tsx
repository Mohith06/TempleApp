import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      
      
      <Tabs.Screen
        name="AboutUs"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'information' : 'information-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="volunteer"
        options={{
          title: 'Volunteer',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'help' : 'information-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="donate"
        options={{
          title: 'Donate',
          tabBarIcon: ({ color, focused }) => (
            
            <TabBarIcon name={focused ? 'cash' : 'cash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="scouts"
        options={{
          title: 'Scouts',
          tabBarIcon: ({ color, focused }) => (

            <TabBarIcon name={focused ? 'information' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="adminLogin"
        options={{
          title: 'Admin Login',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
  
}
