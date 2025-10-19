// src/screens/Exercicio5.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import * as Contacts from 'expo-contacts';

// Alteração: Definindo o tipo para esperar 'firstName'
interface Contact {
  id: string;
  firstName?: string; // Usamos '?' pois um contato pode não ter um primeiro nome
  name: string; // Mantemos 'name' para compatibilidade, mas vamos usar firstName
}

const Exercicio5 = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    const loadContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();

      if (status === 'granted') {
        setPermissionGranted(true);
        // 1. ALTERAÇÃO PRINCIPAL: Pedimos o campo 'firstName' em vez de 'name'
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.FirstName],
        });

        if (data.length > 0) {
          // 2. ALTERAÇÃO NA LÓGICA: Removemos o filtro da letra 'C'.
          // Apenas garantimos que o contato tem um 'firstName' antes de exibir.
          const validContacts = data.filter(contact => contact.firstName);
          setContacts(validContacts);
        }
      } else {
        setPermissionGranted(false);
      }
      setLoading(false);
    };

    loadContacts();
  }, []);

  // 3. ALTERAÇÃO NA RENDERIZAÇÃO: Exibimos 'item.firstName'
  const renderItem = ({ item }: { item: Contact }) => (
    <View style={styles.contactItem}>
      <Text style={styles.contactName}>{item.firstName}</Text>
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
      {/* Alteração no título */}
      <Text style={styles.title}>Primeiro Nome dos Contatos</Text>
      {contacts.length > 0 ? (
        <FlatList
          data={contacts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.infoText}>
          Nenhum contato com primeiro nome foi encontrado.
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

export default Exercicio5;