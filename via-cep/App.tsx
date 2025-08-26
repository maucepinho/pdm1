import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CepProvider } from './src/contexts/CepContext';
import ConsultaCep from './src/screens/ConsultaCep';
import ListaConsultas from './src/screens/ListaConsultas';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <CepProvider>
      <NavigationContainer>
        <Drawer.Navigator 
          screenOptions={{
            headerStyle: {
              backgroundColor: '#282c34',
            },
            headerTintColor: '#fff',
            drawerStyle: {
              backgroundColor: '#282c34',
            },
            drawerActiveTintColor: '#DFFF00',
            drawerInactiveTintColor: '#fff',
          }}
        >
          {/* Tela principal de busca */}
          <Drawer.Screen 
            name="Buscar CEP" 
            component={ConsultaCep} 
          />
          {/* Nova tela de histórico */}
          <Drawer.Screen 
            name="Histórico de Consultas" 
            component={ListaConsultas} 
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </CepProvider>
  );
};

export default App;