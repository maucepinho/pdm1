import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  Keyboard
} from 'react-native';
import { useCep } from '../hooks/useCep';

const ConsultaCep = () => {
  const [cep, setCep] = useState('');
  const { endereco, erro, buscarCep } = useCep();

  const handleBuscar = () => {
    Keyboard.dismiss();
    buscarCep(cep);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>CEP</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={cep}
        onChangeText={setCep}
        maxLength={8}
      />
      <TouchableOpacity style={styles.button} onPress={handleBuscar}>
        <Text style={styles.buttonText}>Obter</Text>
      </TouchableOpacity>

      {/* Exibe a mensagem de erro, se houver */}
      {erro && (
        <View style={styles.resultContainer}>
          <Text style={styles.errorText}>{erro}</Text>
        </View>
      )}

      {/* Exibe o resultado do endereço, se for válido */}
      {endereco && !erro && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Logradouro: {endereco.logradouro}</Text>
          <Text style={styles.resultText}>Localidade: {endereco.localidade}</Text>
          <Text style={styles.resultText}>UF: {endereco.uf}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'center',
  },
  label: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFF',
    color: '#000',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'gold',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 30,
  },
  resultText: {
    color: '#FFF',
    fontSize: 16,
    lineHeight: 24, 
  },
  errorText: {
    color: '#FF6347', 
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default ConsultaCep;