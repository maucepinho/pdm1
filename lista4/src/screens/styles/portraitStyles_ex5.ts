// src/screens/portraitStyles_ex5.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
    backgroundColor: '#FFCDB2',
    alignItems: 'center',
  },
  mainContent: {}, // Pode ser um objeto vazio, pois não é usado no layout retrato
  inputContainer: {
    padding: 15,
    backgroundColor: '#FFB4A2',
  },
  listContainer: {
    flex: 1, // Ocupa todo o espaço restante
    backgroundColor: '#E5989B',
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
    borderBottomColor: '#FFB4A2',
  },
  listText: {
    fontSize: 18,
  },
});

export default styles;