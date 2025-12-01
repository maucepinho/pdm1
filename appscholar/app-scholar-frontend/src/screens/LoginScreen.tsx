// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

// 1. Recebemos a prop 'navigation' aqui
const LoginScreen = ({ navigation }: any) => {
    const [email, setEmail] = useState('');

    const handleLogin = async () => {
        if (email.trim() === '') {
            Alert.alert("Erro", "Por favor, insira seu email.");
            return;
        }

        try {
            // Lembre-se de verificar o IP se estiver no celular físico
            const response = await axios.post('http://localhost:3000/login', { email });
            
            // 2. Se o login der certo, navegamos para a Home
            // Usamos 'replace' para que não dê para voltar para o login com o botão voltar
            navigation.replace('Home');

        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                Alert.alert("Erro de Login", "Usuário não encontrado.");
            } else {
                console.error('Erro ao fazer login:', error);
                Alert.alert("Erro", "Não foi possível conectar ao servidor.");
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>App Scholar</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Button title="Entrar" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 15, padding: 10, borderRadius: 5 },
});

export default LoginScreen;