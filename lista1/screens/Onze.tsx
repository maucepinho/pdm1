import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import fatecLogo from '../assets/fatec.png';

export default function Onze() {
  const botoes = [
    'Um',
    'Dois',
    'Três',
    'Quatro',
    'Cinco',
    'Seis',
    'Sete',
    'Oito',
    'Nove',
    'Dez',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.card}>
        <View style={styles.header}>
          <Image source={fatecLogo} style={styles.logo} />
        </View>

        <Text style={styles.homeTitle}>HOME</Text>

        <View style={styles.buttonGrid}>
          {botoes.map((nomeBotao) => (
            <TouchableOpacity key={nomeBotao} style={styles.button}>
              <Text style={styles.buttonText}>{nomeBotao}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 10,
  },
  homeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  buttonGrid: {
    flexDirection: 'row', // Organiza os botões em linha
    flexWrap: 'wrap', // Permite que quebrem para a próxima linha
    justifyContent: 'space-between', // Espaço entre os botões
  },
  button: {
    backgroundColor: 'gold',
    borderRadius: 8,
    paddingVertical: 12,
    width: '48%', // Largura para ter 2 por linha com espaço
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});
