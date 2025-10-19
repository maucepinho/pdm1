// src/screens/portraitStyles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Eixo principal é vertical
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    backgroundColor: '#FFCDB2',
  },
  box2: {
    backgroundColor: '#FFB4A2',
  },
  box3: {
    backgroundColor: '#E5989B',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
});

export default styles;