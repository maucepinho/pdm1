import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, FlatList } from 'react-native';
import axios from 'axios';
import styles from '../styles/bulletinStyles';

type BulletinItem = {
    discipline_name: string;
    teacher_name: string;
    grade1: string;
    grade2: string;
    average: string;
};

const BulletinScreen = () => {
    const [studentId, setStudentId] = useState('');
    const [bulletin, setBulletin] = useState<BulletinItem[]>([]);

    const fetchBulletin = async () => {
        if (!studentId.trim()) {
            Alert.alert('Erro', 'Digite o ID do aluno');
            return;
        }
        try {
            const response = await axios.get(`http://localhost:3000/students/${studentId}/bulletin`);
            if (response.data.length === 0) {
                Alert.alert('Aviso', 'Nenhuma nota encontrada para este aluno.');
            }
            setBulletin(response.data);
        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Falha ao buscar boletim.');
        }
    };

    const renderItem = ({ item }: { item: BulletinItem }) => (
        <View style={styles.card}>
            <Text style={styles.discipline}>{item.discipline_name}</Text>
            <Text style={styles.teacher}>Prof. {item.teacher_name}</Text>
            <View style={styles.gradesRow}>
                <Text>P1: {item.grade1}</Text>
                <Text>P2: {item.grade2}</Text>
                <Text style={styles.average}>Média: {item.average}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Consultar Boletim</Text>
            <View style={styles.searchContainer}>
                <TextInput 
                    placeholder="ID do Aluno" 
                    value={studentId} 
                    onChangeText={setStudentId} 
                    keyboardType="numeric"
                    style={styles.input} 
                />
                <Button title="Buscar" onPress={fetchBulletin} />
            </View>
            <FlatList
                data={bulletin}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                ListEmptyComponent={<Text style={styles.emptyText}>Resultados aparecerão aqui.</Text>}
            />
        </View>
    );
};

export default BulletinScreen;