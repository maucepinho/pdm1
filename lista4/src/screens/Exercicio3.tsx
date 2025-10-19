// src/screens/Exercicio3.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

// 1. Importamos os dois arquivos de estilo que criamos
import portraitStyles from './styles/portraitStyles';
import landscapeStyles from './styles/landscapeStyles';

const Exercicio3 = () => {
  // A lógica de detecção de orientação permanece a mesma
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

  // 2. A MÁGICA ACONTECE AQUI:
  //    Selecionamos o objeto de estilo INTEIRO com base na orientação.
  const styles = isLandscape ? landscapeStyles : portraitStyles;

  return (
    // 3. Agora, usamos a variável 'styles' que contém o conjunto correto de estilos.
    //    O código JSX fica limpo, pois não precisa de lógica de estilo.
    <SafeAreaView style={styles.container}>
      <View style={[styles.box, styles.box1]}>
        <Text style={styles.text}>Top</Text>
      </View>
      <View style={[styles.box, styles.box2]}>
        <Text style={styles.text}>Middle</Text>
      </View>
      <View style={[styles.box, styles.box3]}>
        <Text style={styles.text}>Bottom</Text>
      </View>
    </SafeAreaView>
  );
};

export default Exercicio3;
