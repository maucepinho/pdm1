// src/screens/Exercicio6.tsx
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const Exercicio6 = () => {
  // Função para abrir a galeria de imagens
  const openImageGallery = async () => {
    // Pede permissão para acessar a galeria
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permissão necessária',
        'É preciso permitir o acesso à galeria para continuar.'
      );
      return;
    }

    // Abre a galeria
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log('Imagem selecionada:', result.assets[0].uri);
      // Aqui você poderia, por exemplo, exibir a imagem na tela
    }
  };

  // Função para abrir a câmera
  const openCamera = async () => {
    // Pede permissão para acessar a câmera
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permissão necessária',
        'É preciso permitir o acesso à câmera para continuar.'
      );
      return;
    }

    // Abre a câmera
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log('Foto tirada:', result.assets[0].uri);
      // Aqui você poderia, por exemplo, exibir a imagem na tela
    }
  };

  return (
    <View style={styles.container}>
      {/* Container para os botões no canto superior direito */}
      <View style={styles.buttonsContainer}>
        {/* Botão Galeria */}
        <TouchableOpacity onPress={openImageGallery}>
          <MaterialIcons name="photo" size={30} color="deepskyblue" />
        </TouchableOpacity>

        {/* Botão Câmera */}
        <TouchableOpacity onPress={openCamera}>
          <MaterialIcons name="photo-camera" size={30} color="deepskyblue" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Exercício 6</Text>
      <Text style={styles.description}>
        Use os ícones no canto superior direito para interagir.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  buttonsContainer: {
    position: 'absolute', // Permite posicionar livremente sobre a tela
    // A dica fala em usar a altura da StatusBar, isso é ótimo para o 'top'
    top: (StatusBar.currentHeight || 0) + 10, // Posição a partir do topo
    right: 15, // Posição a partir da direita
    flexDirection: 'row', // Alinha os ícones lado a lado
    gap: 20, // Espaço entre os ícones
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: '#666',
  },
});

export default Exercicio6;
