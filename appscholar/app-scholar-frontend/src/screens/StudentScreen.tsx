import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
import axios from 'axios';

const StudentScreen = () => {
    const [name, setName] = useState('');
    const [matricula, setMatricula] = useState('');
    const [course, setCourse] = useState('');

    const handleRegister = async () => {
        try {
            // Lembre de trocar localhost pelo IP se usar celular físico
            await axios.post('http://localhost:3000/students', { name, matricula, course });
            Alert.alert('Sucesso', 'Aluno cadastrado!');
            setName(''); setMatricula(''); setCourse('');
        } catch (error) {
            Alert.alert('Erro', 'Falha ao cadastrar aluno.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Aluno</Text>
            <TextInput placeholder="Nome" value={name} onChangeText={setName} style={styles.input} />
            <TextInput placeholder="Matrícula" value={matricula} onChangeText={setMatricula} style={styles.input} />
            <TextInput placeholder="Curso" value={course} onChangeText={setCourse} style={styles.input} />
            <Button title="Cadastrar" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 15, padding: 10, borderRadius: 5 }
});

export default StudentScreen;