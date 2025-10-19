// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const LoginScreen = () => {
    const [email, setEmail] = useState('');

    const handleLogin = async () => {
        if (email.trim() === '') {
            Alert.alert("Erro", "Por favor, insira seu email.");
            return;
        }

        try {
            // ATENÇÃO: Se estiver testando em um celular físico,
            // substitua 'localhost' pelo IP da sua máquina na rede.
            const response = await axios.post('http://localhost:3000/login', { email });

            // Login bem-sucedido
            Alert.alert("Sucesso", `Bem-vindo, ${response.data.name}!`);

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