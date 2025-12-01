import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Painel Acadêmico</Text>
            <View style={styles.btnContainer}><Button title="Cadastrar Aluno" onPress={() => navigation.navigate('Student')} /></View>
            <View style={styles.btnContainer}><Button title="Cadastrar Professor" onPress={() => navigation.navigate('Teacher')} /></View>
            <View style={styles.btnContainer}><Button title="Cadastrar Disciplina" onPress={() => navigation.navigate('Discipline')} /></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, textAlign: 'center', marginBottom: 30 },
    btnContainer: { marginBottom: 15 }
});

export default HomeScreen;