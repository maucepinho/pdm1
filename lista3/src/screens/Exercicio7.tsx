// src/screens/Exercicio7.tsx
import React, { useState } from 'react'; // Importamos o useState
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  StatusBar,
  ScrollView, // Dica 2: Importamos o ScrollView
  Image,      // Precisamos do componente Image para exibir as fotos
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const Exercicio7 = () => {
  // Dica 1: Criamos um estado para guardar as URIs das imagens
  const [imageUris, setImageUris] = useState<string[]>([]);

  // Função para abrir a galeria de imagens
  const openImageGallery = async () => {
    const { status } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'É preciso permitir o acesso à galeria.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true, // Podemos remover a edição para selecionar mais rápido
      quality: 1,
    });

    if (!result.canceled) {
      // **ALTERAÇÃO AQUI**: Adicionamos a URI da nova imagem ao nosso array de estado
      const newUri = result.assets[0].uri;
      setImageUris(currentUris => [...currentUris, newUri]);
    }
  };

  // Função para abrir a câmera
  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'É preciso permitir o acesso à câmera.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      // allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      // **ALTERAÇÃO AQUI**: Adicionamos a URI da nova imagem ao nosso array de estado
      const newUri = result.assets[0].uri;
      setImageUris(currentUris => [...currentUris, newUri]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Container para os botões no canto superior direito (sem alteração) */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={openImageGallery}>
          <MaterialIcons name="photo" size={30} color="deepskyblue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={openCamera}>
          <MaterialIcons name="photo-camera" size={30} color="deepskyblue" />
        </TouchableOpacity>
      </View>

      {/* **NOVA SEÇÃO PARA EXIBIR AS IMAGENS** */}
      <Text style={styles.title}>Galeria de Imagens</Text>
      
      {imageUris.length > 0 ? (
        <ScrollView style={styles.scrollView}>
          {imageUris.map((uri, index) => (
            <Image key={index} source={{ uri: uri }} style={styles.image} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: (StatusBar.currentHeight || 0) + 50, // Damos mais espaço no topo
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonsContainer: {
    position: 'absolute',
    top: (StatusBar.currentHeight || 0) + 10,
    right: 15,
    flexDirection: 'row',
    gap: 20,
    zIndex: 1, // Garante que os botões fiquem sobre a lista
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
  image: {
    width: '90%',
    height: 250, // Altura fixa para as imagens
    borderRadius: 10,
    marginBottom: 15,
    alignSelf: 'center', // Centraliza a imagem no ScrollView
  },
});

export default Exercicio7;