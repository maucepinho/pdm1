import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import axios from 'axios';
import styles from '../styles/loginStyles';

const LoginScreen = ({ navigation }: any) => {
    const [email, setEmail] = useState('');

    const handleLogin = async () => {
        if (email.trim() === '') {
            Alert.alert("Erro", "Por favor, insira seu email.");
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/login', { email });
            navigation.replace('Home');
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                Alert.alert("Erro de Login", "Usuário não encontrado.");
            } else {
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

export default LoginScreen;