import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types'; // Importando nossos tipos

// Importando todas as telas
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
import Onze from './screens/Onze';

// Criando o navegador Stack com base nos tipos que definimos
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onze">
        {/* Definindo cada tela da nossa aplicação */}
        <Stack.Screen name="Onze" component={Onze} options={{ title: 'Home' }} />
        <Stack.Screen name="Um" component={Um} options={{ title: 'Exercício 1' }}/>
        <Stack.Screen name="Dois" component={Dois} options={{ title: 'Exercício 2' }}/>
        <Stack.Screen name="Tres" component={Tres} options={{ title: 'Exercício 3' }}/>
        <Stack.Screen name="Quatro" component={Quatro} options={{ title: 'Exercício 4' }}/>
        <Stack.Screen name="Cinco" component={Cinco} options={{ title: 'Exercício 5' }}/>
        <Stack.Screen name="Seis" component={Seis} options={{ title: 'Exercício 6' }}/>
        <Stack.Screen name="Sete" component={Sete} options={{ title: 'Exercício 7' }}/>
        <Stack.Screen name="Oito" component={Oito} options={{ title: 'Exercício 8' }}/>
        <Stack.Screen name="Nove" component={Nove} options={{ title: 'Exercício 9' }}/>
        <Stack.Screen name="Dez" component={Dez} options={{ title: 'Exercício 10' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}