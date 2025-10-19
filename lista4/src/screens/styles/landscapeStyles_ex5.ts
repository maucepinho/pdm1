// src/screens/landscapeStyles_ex5.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
    backgroundColor: '#F5F5DC',
    alignItems: 'center',
  },
  // Container principal para o conteúdo
  mainContent: {
    flex: 1,
    flexDirection: 'row', // Divide a tela em duas colunas
  },
  inputContainer: {
    flex: 1, // Ocupa a metade esquerda
    padding: 15,
    backgroundColor: '#EEE8AA',
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  listContainer: {
    flex: 1, // Ocupa a metade direita
    backgroundColor: '#BDB76B',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  listItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE8AA',
  },
  listText: {
    fontSize: 18,
  },
});

export default styles;