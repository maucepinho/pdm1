// src/screens/CourseListScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
import styles from '../styles/courseListStyles';

const CourseListScreen = ({ navigation }: any) => {
    const [courses, setCourses] = useState([]);
    const isFocused = useIsFocused();

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://localhost:3000/courses');
            setCourses(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (isFocused) fetchCourses();
    }, [isFocused]);

    const handleDelete = async (id: number) => {
        Alert.alert('Confirmar', 'Deseja excluir este curso?', [
            { text: 'Cancelar', style: 'cancel' },
            { 
                text: 'Excluir', 
                style: 'destructive',
                onPress: async () => {
                    try {
                        await axios.delete(`http://localhost:3000/courses/${id}`);
                        fetchCourses();
                    } catch (error) {
                        Alert.alert('Erro', 'Não foi possível excluir (pode haver alunos vinculados).');
                    }
                }
            }
        ]);
    };

    const renderItem = ({ item }: any) => (
        <View style={styles.card}>
            <View>
                <Text style={styles.courseName}>id {item.id} - {item.name}</Text>
                
                <Text>Coord: {item.coordinator} | {item.duration} Semestres</Text>
            </View>
            <View style={styles.actions}>
                <Button title="Editar" onPress={() => navigation.navigate('CourseForm', { course: item })} />
                <Button title="X" color="red" onPress={() => handleDelete(item.id)} />
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Button title="+ Novo Curso" onPress={() => navigation.navigate('CourseForm')} />
            <FlatList 
                data={courses}
                keyExtractor={(item: any) => item.id.toString()}
                renderItem={renderItem}
                style={{ marginTop: 10 }}
            />
        </View>
    );
};

export default CourseListScreen;