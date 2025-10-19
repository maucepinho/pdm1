// src/screens/Exercicio3.tsx
import React from 'react';
import { View, Button, StyleSheet, Text, Linking, Alert } from 'react-native';

const Exercicio3 = () => {
  // URL do perfil do Instagram
  const instagramUrl = 'https://www.instagram.com/fatec_jacarei/';

  const handleOpenInstagram = async () => {
    // A lógica é a mesma do exercício 1:
    // 1. Checar se o link pode ser aberto
    const supported = await Linking.canOpenURL(instagramUrl);

    if (supported) {
      // 2. Se sim, abrir o link. O celular vai direcionar
      // para o app do Instagram ou para o navegador.
      await Linking.openURL(instagramUrl);
    } else {
      Alert.alert('Erro', `Não foi possível abrir o link: ${instagramUrl}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercício 3</Text>
      <Text style={styles.description}>
        Pressione o botão para abrir o perfil da Fatec Jacareí no Instagram.
      </Text>
      <Button
        title="Ver Perfil no Instagram"
        onPress={handleOpenInstagram}
        color="#E1306C" // Uma cor inspirada no logo do Instagram
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
    backgroundColor: '#fafafa',
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
    color: '#333',
  },
});

export default Exercicio3;