// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ConsultaCep from './src/screens/ConsultaCep';
import { CepProvider } from './src/contexts/CepContext';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <CepProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="ViaCEP" component={ConsultaCep} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CepProvider>
  );
};

export default App;