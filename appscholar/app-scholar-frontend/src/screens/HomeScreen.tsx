import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../styles/homeStyles';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel Acadêmico</Text>
      <View style={styles.btnContainer}>
        <Button
          title="Cadastrar Aluno"
          onPress={() => navigation.navigate('Student')}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          title="Cadastrar Professor"
          onPress={() => navigation.navigate('Teacher')}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          title="Cadastrar Disciplina"
          onPress={() => navigation.navigate('Discipline')}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          title="Gerenciar Cursos"
          onPress={() => navigation.navigate('CourseList')}
          color="#6200ee"
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          title="Consultar Boletim"
          onPress={() => navigation.navigate('Bulletin')}
          color="green"
        />
      </View>
    </View>
  );
};

export default HomeScreen;
