// src/screens/Exercicio1.tsx
import React from 'react';
import { View, Button, StyleSheet, Text, Linking, Alert } from 'react-native';

const Exercicio1 = () => {
  // URL do vídeo específico do YouTube que queremos abrir
  const videoUrl = 'https://www.youtube.com/watch?v=cuP8ZUvnM0o&t=117s';

  const handleOpenYouTube = async () => {
    // Verifica se o dispositivo pode abrir a URL
    const supported = await Linking.canOpenURL(videoUrl);

    if (supported) {
      // Se puder, abre a URL. O sistema operacional (iOS/Android)
      // se encarrega de abrir o app do YouTube.
      await Linking.openURL(videoUrl);
    } else {
      // Se não for possível abrir (ex: em um emulador sem YouTube),
      // exibe um alerta.
      Alert.alert('Erro', `Não foi possível abrir o link: ${videoUrl}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercício 1</Text>
      <Text style={styles.description}>
        Pressione o botão abaixo para abrir um vídeo específico no aplicativo do
        YouTube.
      </Text>
      <Button title="Abrir Vídeo no YouTube" onPress={handleOpenYouTube} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center',     // Centraliza horizontalmente
    padding: 20,
    backgroundColor: '#f0f0f0',
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

export default Exercicio1;