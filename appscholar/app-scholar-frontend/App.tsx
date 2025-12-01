import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import StudentScreen from './src/screens/StudentScreen';
import TeacherScreen from './src/screens/TeacherScreen';
import DisciplineScreen from './src/screens/DisciplineScreen';
import BulletinScreen from './src/screens/BulletinScreen';
import CourseListScreen from './src/screens/CourseListScreen';
import CourseFormScreen from './src/screens/CourseFormScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Início' }}
        />
        <Stack.Screen
          name="Student"
          component={StudentScreen}
          options={{ title: 'Alunos' }}
        />
        <Stack.Screen
          name="Teacher"
          component={TeacherScreen}
          options={{ title: 'Professores' }}
        />
        <Stack.Screen
          name="Discipline"
          component={DisciplineScreen}
          options={{ title: 'Disciplinas' }}
        />
        <Stack.Screen
          name="Bulletin"
          component={BulletinScreen}
          options={{ title: 'Boletim Acadêmico' }}
        />
        <Stack.Screen
          name="CourseList"
          component={CourseListScreen}
          options={{ title: 'Gerenciar Cursos' }}
        />
        <Stack.Screen
          name="CourseForm"
          component={CourseFormScreen}
          options={{ title: 'Dados do Curso' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
