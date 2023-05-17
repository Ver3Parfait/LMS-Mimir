import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './AuthStack';
import { TabNavigator } from './TabNavigator';

const Stack = createNativeStackNavigator();

const SwitchStack = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('AccessToken');
        setIsLoggedIn(!!token); 
      } catch (error) {
        console.error(error);
      }
    };

    checkToken();
  }, []);

  return (
    <Stack.Navigator>
              <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false , gestureEnabled: false}} />
        <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false}} />
    </Stack.Navigator>
  );
};

export { SwitchStack };
