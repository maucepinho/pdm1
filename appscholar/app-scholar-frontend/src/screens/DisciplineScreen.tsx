import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
import axios from 'axios';

const DisciplineScreen = () => {
    const [name, setName] = useState('');
    const [workload, setWorkload] = useState('');
    const [teacherId, setTeacherId] = useState('');

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:3000/disciplines', { 
                name, 
                workload: parseInt(workload),
                teacher_id: parseInt(teacherId)
            });
            Alert.alert('Sucesso', 'Disciplina cadastrada!');
            setName(''); setWorkload(''); setTeacherId('');
        } catch (error) {
            Alert.alert('Erro', 'Falha (Verifique se o ID do professor existe).');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Disciplina</Text>
            <TextInput placeholder="Nome da Disciplina" value={name} onChangeText={setName} style={styles.input} />
            <TextInput placeholder="Carga Horária" value={workload} onChangeText={setWorkload} keyboardType="numeric" style={styles.input} />
            <TextInput placeholder="ID do Professor Responsável" value={teacherId} onChangeText={setTeacherId} keyboardType="numeric" style={styles.input} />
            <Button title="Cadastrar" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({ /* Mesmos estilos */ 
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 15, padding: 10, borderRadius: 5 }
});

export default DisciplineScreen;