import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import axios from 'axios';
import styles from '../styles/teacherStyles';

const TeacherScreen = () => {
    const [name, setName] = useState('');
    const [titulation, setTitulation] = useState('');
    const [years, setYears] = useState('');

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:3000/teachers', { 
                name, 
                titulation, 
                teaching_years: parseInt(years) 
            });
            Alert.alert('Sucesso', 'Professor cadastrado!');
            setName(''); setTitulation(''); setYears('');
        } catch (error) {
            Alert.alert('Erro', 'Falha ao cadastrar professor.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Professor</Text>
            <TextInput placeholder="Nome" value={name} onChangeText={setName} style={styles.input} />
            <TextInput placeholder="Titulação (ex: Doutor)" value={titulation} onChangeText={setTitulation} style={styles.input} />
            <TextInput placeholder="Anos de docência" value={years} onChangeText={setYears} keyboardType="numeric" style={styles.input} />
            <Button title="Cadastrar" onPress={handleRegister} />
        </View>
    );
};

export default TeacherScreen;