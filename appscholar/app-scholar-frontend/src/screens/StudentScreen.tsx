// src/screens/StudentScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import axios from 'axios';
import styles from '../styles/studentStyles';

const StudentScreen = () => {
    const [name, setName] = useState('');
    const [matricula, setMatricula] = useState('');
    const [courseId, setCourseId] = useState('');

    const handleRegister = async () => {
        if (!name.trim() || !matricula.trim() || !courseId.trim()) {
            Alert.alert('Atenção', 'Preencha todos os campos.');
            return;
        }

        try {
            await axios.post('http://localhost:3000/students', { 
                name, 
                matricula, 
                course_id: parseInt(courseId) 
            });

            Alert.alert('Sucesso', 'Aluno cadastrado e vinculado ao curso!');
            
            setName(''); 
            setMatricula(''); 
            setCourseId('');

        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Falha ao cadastrar aluno (Verifique se o ID do curso existe).');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Aluno</Text>
            
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput 
                placeholder="Ex: João Silva" 
                value={name} 
                onChangeText={setName} 
                style={styles.input} 
            />

            <Text style={styles.label}>Matrícula</Text>
            <TextInput 
                placeholder="Ex: 2024001" 
                value={matricula} 
                onChangeText={setMatricula} 
                style={styles.input} 
            />

            <Text style={styles.label}>ID do Curso</Text>
            <TextInput 
                placeholder="Digite o ID do curso (consulte a lista)" 
                value={courseId} 
                onChangeText={setCourseId} 
                keyboardType="numeric" 
                style={styles.input} 
            />

            <Button title="Cadastrar Aluno" onPress={handleRegister} />
        </View>
    );
};

export default StudentScreen;