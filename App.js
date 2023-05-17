import { NavigationContainer } from '@react-navigation/native';
import { SwitchStack } from './src/navigators/SwitchStack';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { default as theme } from './custom-theme.json'; 

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <NavigationContainer>
        <SwitchStack />
      </NavigationContainer>
    </ApplicationProvider>
  );
}


