// src/screens/Exercicio2.tsx
import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  Linking,
  Alert,
  Platform,
} from 'react-native';

const Exercicio2 = () => {
  // Número de telefone que queremos discar
  const phoneNumber = '1239525695';

  const handleOpenDialer = async () => {
    // Monta a URL com o prefixo 'tel:'
    // No iOS, o 'telprompt:' abre um pop-up de confirmação antes de discar.
    // No Android, 'tel:' abre o discador diretamente.
    const dialerUrl = `${Platform.OS === 'ios' ? 'telprompt:' : 'tel:'}${phoneNumber}`;

    // Verifica se o dispositivo pode abrir a URL de discagem
    const supported = await Linking.canOpenURL(dialerUrl);

    if (supported) {
      // Se puder, abre o discador
      await Linking.openURL(dialerUrl);
    } else {
      // Se não for possível (ex: em um tablet sem função de telefone),
      // exibe um alerta.
      Alert.alert(
        'Erro',
        `Este dispositivo não pode realizar chamadas telefônicas.`
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercício 2</Text>
      <Text style={styles.description}>
        Pressione o botão para abrir o discador do celular com um número pré-definido.
      </Text>
      <Button
        title={`Discar para ${phoneNumber}`}
        onPress={handleOpenDialer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
});

export default Exercicio2;