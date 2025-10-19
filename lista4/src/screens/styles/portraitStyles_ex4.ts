// src/screens/portraitStyles_ex4.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Layout principal é uma coluna
  },
  // O container de conteúdo não precisa de estilo especial aqui,
  // mas o definimos para manter a estrutura do componente igual.
  contentContainer: {
    flex: 9, // Ocupa a maior parte do espaço
    flexDirection: 'column',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBox: {
    flex: 1, // Proporção pequena para o cabeçalho
    backgroundColor: '#FFCDB2',
  },
  middleBox: {
    flex: 4, // Proporção média
    backgroundColor: '#FFB4A2',
  },
  bottomBox: {
    flex: 5, // Proporção maior
    backgroundColor: '#E5989B',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
});

export default styles;