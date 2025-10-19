// src/screens/Exercicio4.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import * as Contacts from 'expo-contacts';

// Definindo o tipo de um contato para usar com TypeScript
interface Contact {
  id: string;
  name: string;
}

const Exercicio4 = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    // Função assíncrona para carregar os contatos
    const loadContacts = async () => {
      // 1. Pede permissão para acessar os contatos
      const { status } = await Contacts.requestPermissionsAsync();

      if (status === 'granted') {
        setPermissionGranted(true);
        // 2. Se a permissão for concedida, busca os contatos
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name], // Pega apenas o campo 'name'
        });

        if (data.length > 0) {
          // 3. A DICA ESTÁ AQUI: Filtra o array 'data'
          const filteredContacts = data.filter(
            (contact) =>
              contact.name && contact.name.toUpperCase().startsWith('C')
          );
          setContacts(filteredContacts);
        }
      } else {
        setPermissionGranted(false);
      }
      setLoading(false); // Finaliza o carregamento
    };

    loadContacts();
  }, []); // O array vazio [] faz com que o useEffect rode apenas uma vez

  // Função para renderizar cada item da lista
  const renderItem = ({ item }: { item: Contact }) => (
    <View style={styles.contactItem}>
      <Text style={styles.contactName}>{item.name}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando contatos...</Text>
      </View>
    );
  }

  if (!permissionGranted) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>
          Permissão para acessar contatos foi negada.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contatos com a Letra 'C'</Text>
      {contacts.length > 0 ? (
        <FlatList
          data={contacts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.infoText}>
          Nenhum contato encontrado com a letra 'C'.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  contactItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  contactName: {
    fontSize: 18,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Exercicio4;