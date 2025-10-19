// src/screens/landscapeStyles_ex4.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // O layout principal AINDA é uma coluna (cabeçalho em cima)
  },
  // Este container agrupa as caixas 'Middle' e 'Bottom'
  contentContainer: {
    flex: 5, // Ocupa a maior parte do espaço
    flexDirection: 'row', // MAS o conteúdo em si é uma linha
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBox: {
    flex: 1, // Proporção pequena para o cabeçalho
    backgroundColor: '#F5F5DC',
  },
  middleBox: {
    flex: 1, // Ocupa metade do 'contentContainer'
    backgroundColor: '#EEE8AA',
  },
  bottomBox: {
    flex: 1, // Ocupa a outra metade do 'contentContainer'
    backgroundColor: '#BDB76B',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
});

export default styles;