import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, FlatList } from 'react-native';
import axios from 'axios';

// Definição do tipo para os dados do boletim
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
            // Buscando o boletim na nossa API
            // Substitua localhost pelo seu IP se necessário
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

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    searchContainer: { flexDirection: 'row', marginBottom: 20, gap: 10 },
    input: { flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5 },
    card: { backgroundColor: '#f9f9f9', padding: 15, marginBottom: 10, borderRadius: 8, borderWidth: 1, borderColor: '#eee' },
    discipline: { fontSize: 18, fontWeight: 'bold', color: '#333' },
    teacher: { fontSize: 14, color: '#666', marginBottom: 10 },
    gradesRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 },
    average: { fontWeight: 'bold', color: '#007bff' },
    emptyText: { textAlign: 'center', color: '#999', marginTop: 20 }
});

export default BulletinScreen;