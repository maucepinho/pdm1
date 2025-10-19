// src/screens/Exercicio8.tsx
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const Exercicio8 = () => {
  const [imageUris, setImageUris] = useState<string[]>([]);

  // As funções openImageGallery e openCamera permanecem EXATAMENTE IGUAIS
  // ... (pode colapsá-las no seu editor para facilitar a visualização)
  const openImageGallery = async () => {
    const { status } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'É preciso permitir o acesso à galeria.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) {
      const newUri = result.assets[0].uri;
      setImageUris(currentUris => [...currentUris, newUri]);
    }
  };

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'É preciso permitir o acesso à câmera.');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });
    if (!result.canceled) {
      const newUri = result.assets[0].uri;
      setImageUris(currentUris => [...currentUris, newUri]);
    }
  };

  // **NOVA FUNÇÃO**: Remove uma imagem do array de estado
  const handleRemoveImage = (indexToRemove: number) => {
    setImageUris(currentUris => 
      // O método filter cria um novo array com todos os itens
      // cujo índice não seja igual ao que queremos remover.
      currentUris.filter((uri, index) => index !== indexToRemove)
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={openImageGallery}>
          <MaterialIcons name="photo" size={30} color="deepskyblue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={openCamera}>
          <MaterialIcons name="photo-camera" size={30} color="deepskyblue" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Galeria de Imagens</Text>
      
      {imageUris.length > 0 ? (
        <ScrollView style={styles.scrollView}>
          {imageUris.map((uri, index) => (
            // **ALTERAÇÃO AQUI**: Envolvemos a imagem em uma View
            // para posicionar o botão de exclusão em relação a ela.
            <View key={index} style={styles.imageContainer}>
              <Image source={{ uri: uri }} style={styles.image} />
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleRemoveImage(index)}
              >
                <MaterialIcons name="close" size={24} color="white" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.placeholderText}>
          Nenhuma imagem selecionada. Use os ícones acima.
        </Text>
      )}
    </View>
  );
};

// **NOVOS ESTILOS ADICIONADOS**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: (StatusBar.currentHeight || 0) + 50,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonsContainer: {
    position: 'absolute',
    top: (StatusBar.currentHeight || 0) + 10,
    right: 15,
    flexDirection: 'row',
    gap: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  placeholderText: {
    fontSize: 16,
    color: '#888',
    marginTop: 50,
  },
  scrollView: {
    width: '100%',
  },
  // Novo container para a imagem e o botão
  imageContainer: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  // Novo estilo para o botão de deletar
  deleteButton: {
    position: 'absolute',
    top: 5,
    left: 5, // Canto superior esquerdo
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fundo preto semi-transparente
    borderRadius: 15, // Para ficar circular
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Exercicio8;