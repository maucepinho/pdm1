import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Nove() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
  const [perfil, setPerfil] = useState('manager');
  const [info, setInfo] = useState('');

  const handleCadastro = () => {
    setInfo(`${email}-${senha}-${confirmacaoSenha}-${perfil}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.frame}>
        <Text style={styles.title}>CADASTRO</Text>

        {/* Campos de E-mail e Senha... */}
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
        <Text style={styles.label}>Confirmação da senha</Text>
        <TextInput
          style={styles.input}
          value={confirmacaoSenha}
          onChangeText={setConfirmacaoSenha}
          secureTextEntry
        />

        <Text style={styles.label}>Perfil</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={perfil}
            onValueChange={(itemValue, itemIndex) => setPerfil(itemValue)}
            style={styles.picker}
            dropdownIconColor="white"
          >
            <Picker.Item label="Administrador" value="admin" />
            <Picker.Item label="Gestor" value="manager" />
            <Picker.Item label="Usuário" value="user" />
          </Picker>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Logar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.info}>{info}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frame: {
    width: '90%',
    maxWidth: 270,
    backgroundColor: '#444',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#555',
  },
  title: {
    color: 'gold',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: { color: 'white', marginBottom: 5 },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 15,
  },
  picker: {
    color: 'black',
    height: 50,
  },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  button: {
    backgroundColor: 'gold',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: { fontWeight: 'bold', color: '#333' },
  info: { color: 'white', marginTop: 20, textAlign: 'center' },
});
