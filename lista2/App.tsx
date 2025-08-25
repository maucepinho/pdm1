import 'react-native-gesture-handler'; // Importante: deve ser a primeira linha
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// 1. Importar createDrawerNavigator
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { RootStackParamList } from './types';

// Importando todas as telas (exceto a Onze)
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

// 2. Criar o navegador do tipo Drawer
const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      {/* 3. Usar o Drawer.Navigator e definir a tela inicial como "Um" */}
      <Drawer.Navigator initialRouteName="Um">
        {/* Definindo as telas no menu lateral */}
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