import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootStackParamList } from './types';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 1. Importar a biblioteca de ícones

// Importando as telas
import Um from './screens/Um';
import Dois from './screens/Dois';
import Tres from './screens/Tres';
import Quatro from './screens/Quatro';
import Cinco from './screens/Cinco';
import Seis from './screens/Seis';
import Sete from './screens/Sete';
import Oito from './screens/Oito';
import Nove from './screens/Nove';
import Dez from './screens/Dez';

const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Um"
        // 2. Adicionar a propriedade screenOptions para configurar os ícones [cite: 113, 114, 115, 117, 118]
        screenOptions={({ route }) => ({
          drawerIcon: ({ focused, color, size }) => {
            let iconName = '';

            // Escolhendo um ícone diferente para cada rota 
            switch (route.name) {
              case 'Um': iconName = focused ? 'square' : 'square-outline'; break;
              case 'Dois': iconName = focused ? 'copy' : 'copy-outline'; break;
              case 'Tres': iconName = focused ? 'grid' : 'grid-outline'; break;
              case 'Quatro': iconName = focused ? 'image' : 'image-outline'; break;
              case 'Cinco': iconName = focused ? 'apps' : 'apps-outline'; break;
              case 'Seis': iconName = focused ? 'person-add' : 'person-add-outline'; break;
              case 'Sete': iconName = focused ? 'log-in' : 'log-in-outline'; break;
              case 'Oito': iconName = focused ? 'create' : 'create-outline'; break;
              case 'Nove': iconName = focused ? 'list-circle' : 'list-circle-outline'; break;
              case 'Dez': iconName = focused ? 'toggle' : 'toggle-outline'; break;
              default: iconName = 'alert-circle-outline';
            }

            // Retorna o componente de ícone
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Drawer.Screen name="Um" component={Um} options={{ title: 'Exercício 1' }}/>
        <Drawer.Screen name="Dois" component={Dois} options={{ title: 'Exercício 2' }}/>
        <Drawer.Screen name="Tres" component={Tres} options={{ title: 'Exercício 3' }}/>
        <Drawer.Screen name="Quatro" component={Quatro} options={{ title: 'Exercício 4' }}/>
        <Drawer.Screen name="Cinco" component={Cinco} options={{ title: 'Exercício 5' }}/>
        <Drawer.Screen name="Seis" component={Seis} options={{ title: 'Exercício 6' }}/>
        <Drawer.Screen name="Sete" component={Sete} options={{ title: 'Exercício 7' }}/>
        <Drawer.Screen name="Oito" component={Oito} options={{ title: 'Exercício 8' }}/>
        <Drawer.Screen name="Nove" component={Nove} options={{ title: 'Exercício 9' }}/>
        <Drawer.Screen name="Dez" component={Dez} options={{ title: 'Exercício 10' }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}