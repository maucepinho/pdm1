import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Dez() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
  const [perfil, setPerfil] = useState('manager');
  const [logado, setLogado] = useState(false);
  const [info, setInfo] = useState('');

  const handleCadastro = () => {
    const conectado = logado ? 'sim' : 'não';
    setInfo(`${email}-${senha}-${confirmacaoSenha}-${perfil}-${conectado}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.frame}>
        <Text style={styles.title}>CADASTRO</Text>

        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />

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
            onValueChange={(itemValue) => setPerfil(itemValue)}
            style={styles.picker}
            dropdownIconColor="black"
          >
            <Picker.Item label="Administrador" value="admin" />
            <Picker.Item label="Gestor" value="manager" />
            <Picker.Item label="Usuário" value="user" />
          </Picker>
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Manter-se conectado</Text>
          <Switch
            trackColor={{ false: '#e77878', true: '#94df83' }}
            thumbColor={logado ? '#47eb22' : '#ed1111'}
            onValueChange={setLogado}
            value={logado}
          />
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
    maxWidth: 280,
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
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 15,
    height: 50,
    justifyContent: 'center',
  },
  picker: { color: 'black' },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 5,
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
  info: {
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});
