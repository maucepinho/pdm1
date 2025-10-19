// src/screens/landscapeStyles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Eixo principal é horizontal
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    backgroundColor: '#F5F5DC', // Cor similar à da imagem (Bege)
  },
  box2: {
    backgroundColor: '#EEE8AA', // Cor similar à da imagem (PaleGoldenrod)
  },
  box3: {
    backgroundColor: '#BDB76B', // Cor similar à da imagem (DarkKhaki)
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
});

export default styles;