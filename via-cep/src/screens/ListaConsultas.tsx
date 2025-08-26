import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';
import { useCep } from '../hooks/useCep';

const ListaConsultas = () => {
  const { cepsConsultados } = useCep();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {cepsConsultados.length === 0 ? (
          <Text style={styles.emptyText}>Nenhuma consulta válida realizada ainda.</Text>
        ) : (
          cepsConsultados.map((item, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardText}>Logradouro: {item.logradouro}</Text>
              <Text style={styles.cardText}>Localidade: {item.localidade}</Text>
              <Text style={styles.cardText}>UF: {item.uf}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
  },
  scrollViewContent: {
    padding: 20,
  },
  card: {
    backgroundColor: '#444',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 20,
  },
  cardText: {
    color: '#FFF',
    fontSize: 16,
    lineHeight: 24,
  },
  emptyText: {
    color: '#999',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  }
});

export default ListaConsultas;