// src/screens/Exercicio1.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

const Exercicio1 = () => {
  // 1. Criamos um estado para armazenar a orientação atual.
  //    O valor inicial pode ser qualquer um, pois será atualizado logo em seguida.
  const [orientation, setOrientation] = useState<ScreenOrientation.Orientation>(
    ScreenOrientation.Orientation.PORTRAIT_UP
  );

  // 2. O useEffect é usado para executar código quando o componente é montado.
  //    É o lugar perfeito para configurar "ouvintes" (listeners) de eventos.
  useEffect(() => {
    // Função para verificar a orientação inicial
    const checkInitialOrientation = async () => {
      const initialOrientation = await ScreenOrientation.getOrientationAsync();
      setOrientation(initialOrientation);
    };

    checkInitialOrientation();

    // 3. Adicionamos um listener que será chamado toda vez que a orientação da tela mudar.
    const subscription = ScreenOrientation.addOrientationChangeListener(
      (evt) => {
        // Quando a orientação muda, atualizamos nosso estado com o novo valor.
        setOrientation(evt.orientationInfo.orientation);
      }
    );

    // 4. ESSENCIAL: Retornamos uma função de "limpeza" dentro do useEffect.
    //    Isso remove o listener quando o componente é desmontado, evitando vazamentos de memória.
    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []); // O array vazio [] garante que este useEffect rode apenas uma vez (ao montar).

  // 5. Verificamos se a orientação atual é uma das opções de paisagem (landscape).
  const isLandscape =
    orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
    orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT;

  // 6. Com base na verificação, definimos a cor e o texto.
  const backgroundColor = isLandscape ? '#1E90FF' : '#FFA500';
  const orientationText = isLandscape
    ? 'Tela em modo landscape'
    : 'Tela em modo portrait';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>{orientationText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Exercicio1;