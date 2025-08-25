//deixado arquivo Onze para pesquisa futura
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
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type OnzeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Onze'
>;

type Props = {
  navigation: OnzeScreenNavigationProp;
};

export default function Onze({ navigation }: Props) {
  const botoes: (keyof RootStackParamList)[] = [
    'Um', 'Dois', 'Tres', 'Quatro', 'Cinco',
    'Seis', 'Sete', 'Oito', 'Nove', 'Dez',
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
            <TouchableOpacity
              key={nomeBotao}
              style={styles.button}
              // CORREÇÃO: Passar o nome da tela como string e undefined para params
              onPress={() => navigation.navigate(nomeBotao as any)}
            >
              <Text style={styles.buttonText}>{nomeBotao}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

// Estilos permanecem os mesmos
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'gold',
    borderRadius: 8,
    paddingVertical: 12,
    width: '48%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});