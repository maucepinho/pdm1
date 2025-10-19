// src/screens/Exercicio4.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

// Importamos os novos arquivos de estilo
import portraitStyles from './styles/portraitStyles_ex4';
import landscapeStyles from './styles/landscapeStyles_ex4';

const Exercicio4 = () => {
  // Lógica de detecção de orientação (idêntica aos exercícios anteriores)
  const [orientation, setOrientation] = useState<ScreenOrientation.Orientation>(
    ScreenOrientation.Orientation.PORTRAIT_UP
  );

  useEffect(() => {
    const checkInitialOrientation = async () => {
      const initialOrientation = await ScreenOrientation.getOrientationAsync();
      setOrientation(initialOrientation);
    };
    checkInitialOrientation();

    const subscription = ScreenOrientation.addOrientationChangeListener(
      (evt) => {
        setOrientation(evt.orientationInfo.orientation);
      }
    );

    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  const isLandscape =
    orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
    orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT;

  // Selecionamos o conjunto de estilos correto
  const styles = isLandscape ? landscapeStyles : portraitStyles;

  return (
    // Graças aos arquivos de estilo, a estrutura do nosso componente é estática e limpa
    <SafeAreaView style={styles.container}>
      {/* Caixa do Topo / Cabeçalho */}
      <View style={[styles.box, styles.topBox]}>
        <Text style={styles.text}>Exercício 4</Text>
      </View>

      {/* Container para o conteúdo principal */}
      <View style={styles.contentContainer}>
        <View style={[styles.box, styles.middleBox]}>
          <Text style={styles.text}>Middle</Text>
        </View>
        <View style={[styles.box, styles.bottomBox]}>
          <Text style={styles.text}>Bottom</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Exercicio4;
