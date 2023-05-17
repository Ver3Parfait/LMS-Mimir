import { CourseStack } from "./CourseStack";
import { ProfileStack } from "./ProfileStack";
import { HomeStack } from "./HomeStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as React from 'react'

const Tab = createBottomTabNavigator();
function TabNavigator() {
    return (
        <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarStyle:{backgroundColor:'black'},
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Course') {
              iconName = focused ? 'school' : 'school-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'happy' : 'happy-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
        })}>
          <Tab.Screen name="Home" component={HomeStack}   options={{headerShown:false, tabBarLabel: 'Accueil'}}/>
          <Tab.Screen name="Course" component={CourseStack} options={{headerShown:false, tabBarLabel: 'Cours'}} />
          <Tab.Screen name="Profile" component={ProfileStack}  options={{headerShown:false, tabBarLabel: 'Compte'}}/>
        </Tab.Navigator>
    );
  }

  export { TabNavigator }