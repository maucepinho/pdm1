// src/screens/Exercicio2.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

const Exercicio2 = () => {
  // 1. Reutilizamos a mesma lógica do exercício anterior para detectar a orientação.
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

  // 2. Verificamos se a orientação é paisagem (landscape).
  const isLandscape =
    orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
    orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT;

  // 3. A DICA ESTÁ AQUI: Definimos o valor de flexDirection dinamicamente.
  //    Se for paisagem, usamos 'row', senão, usamos 'column'.
  const flexDirection = isLandscape ? 'row' : 'column';

  return (
    // 4. Aplicamos o flexDirection dinâmico ao estilo do SafeAreaView.
    <SafeAreaView style={[styles.container, { flexDirection }]}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o container ocupar a tela toda
  },
  box: {
    flex: 1, // Faz cada caixa ocupar uma parte igual do espaço disponível
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    backgroundColor: '#FFCDB2', // Cor similar à da imagem
  },
  box2: {
    backgroundColor: '#FFB4A2', // Cor similar à da imagem
  },
  box3: {
    backgroundColor: '#E5989B', // Cor similar à da imagem
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
});

export default Exercicio2;