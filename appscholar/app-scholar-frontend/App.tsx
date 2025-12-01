import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import StudentScreen from './src/screens/StudentScreen';
import TeacherScreen from './src/screens/TeacherScreen';
import DisciplineScreen from './src/screens/DisciplineScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="Student" component={StudentScreen} options={{ title: 'Alunos' }} />
        <Stack.Screen name="Teacher" component={TeacherScreen} options={{ title: 'Professores' }} />
        <Stack.Screen name="Discipline" component={DisciplineScreen} options={{ title: 'Disciplinas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}