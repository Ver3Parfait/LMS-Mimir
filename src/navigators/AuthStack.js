import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/auth/LoginScreen';
import OnboardingScreen from '../screens/home/OnboardingScreen';

import * as React from 'react'
const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
    
    </Stack.Navigator>
  );
}

export { AuthStack }