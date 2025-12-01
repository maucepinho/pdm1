import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import axios from 'axios';
import styles from '../styles/courseFormStyles';

const CourseFormScreen = ({ route, navigation }: any) => {
    const courseToEdit = route.params?.course;

    const [name, setName] = useState('');
    const [area, setArea] = useState('');
    const [duration, setDuration] = useState('');
    const [coordinator, setCoordinator] = useState('');

    useEffect(() => {
        if (courseToEdit) {
            setName(courseToEdit.name);
            setArea(courseToEdit.area);
            setDuration(courseToEdit.duration.toString());
            setCoordinator(courseToEdit.coordinator);
        }
    }, [courseToEdit]);

    const handleSave = async () => {
        const body = { name, area, duration: parseInt(duration), coordinator };

        try {
            if (courseToEdit) {
                await axios.put(`http://localhost:3000/courses/${courseToEdit.id}`, body);
                Alert.alert('Sucesso', 'Curso atualizado!');
            } else {
                await axios.post('http://localhost:3000/courses', body);
                Alert.alert('Sucesso', 'Curso criado!');
            }
            navigation.goBack();
        } catch (error) {
            Alert.alert('Erro', 'Falha ao salvar curso.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome do Curso</Text>
            <TextInput value={name} onChangeText={setName} style={styles.input} />

            <Text style={styles.label}>Área</Text>
            <TextInput value={area} onChangeText={setArea} style={styles.input} />

            <Text style={styles.label}>Duração (Semestres)</Text>
            <TextInput value={duration} onChangeText={setDuration} keyboardType="numeric" style={styles.input} />

            <Text style={styles.label}>Coordenador</Text>
            <TextInput value={coordinator} onChangeText={setCoordinator} style={styles.input} />

            <Button title={courseToEdit ? "Atualizar" : "Cadastrar"} onPress={handleSave} />
        </View>
    );
};

export default CourseFormScreen;