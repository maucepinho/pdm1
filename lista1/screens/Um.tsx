import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Um() {
  return (
    <View style={styles.container}>
      <View style={styles.topView} />
      <View style={styles.bottomView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Organiza os filhos em coluna 
    paddingTop: Constants.statusBarHeight, // Adiciona padding para a barra de status [cite: 28]
  },
  topView: {
    flex: 0.5, // Ocupa 50% do espaço 
    backgroundColor: 'crimson', // Define a cor de fundo [cite: 18]
  },
  bottomView: {
    flex: 0.5, // Ocupa 50% do espaço 
    backgroundColor: 'salmon', // Define a cor de fundo [cite: 18]
  },
});