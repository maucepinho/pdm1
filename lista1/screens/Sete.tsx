import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function Sete() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [info, setInfo] = useState('');

  const handleLogin = () => {
    setInfo(`${email} - ${senha}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
      /> 

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true} 
        maxLength={8} 
      /> 

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>

      {info ? <Text style={styles.info}>{info}</Text> : null}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#333',
    justifyContent: 'center',
  },
  label: { 
    color: 'white', 
    marginBottom: 5 
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'gold',
    padding: 15,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: { 
    fontWeight: 'bold',
    color: '#333',
  },
  info: { 
    color: 'white', 
    marginTop: 30, 
    textAlign: 'center',
    fontSize: 16,
  },
});