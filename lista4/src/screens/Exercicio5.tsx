// src/screens/Exercicio5.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  StyleSheet, // Precisamos importar StyleSheet para os componentes auxiliares
} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

import portraitStyles from './styles/portraitStyles_ex5';
import landscapeStyles from './styles/landscapeStyles_ex5';

// --- COMPONENTES AUXILIARES (MOVEMOS PARA FORA) ---
// Note que agora eles recebem 'styles' e outras props como argumentos.

// Definimos o tipo das props que o InputSection vai receber
type InputSectionProps = {
  styles: any;
  currentName: string;
  setCurrentName: (name: string) => void;
  handleNameSubmit: () => void;
};

const InputSection = ({
  styles,
  currentName,
  setCurrentName,
  handleNameSubmit,
}: InputSectionProps) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>Nome</Text>
    <TextInput
      style={styles.input}
      placeholder="Nome completo"
      value={currentName}
      onChangeText={setCurrentName}
      onSubmitEditing={handleNameSubmit}
      returnKeyType="done"
    />
  </View>
);

// Definimos o tipo das props que o ListSection vai receber
type ListSectionProps = {
  styles: any;
  nameList: string[];
};

const ListSection = ({ styles, nameList }: ListSectionProps) => {
  const renderNameItem = ({ item }: { item: string }) => (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={nameList}
        renderItem={renderNameItem}
        keyExtractor={(item, index) => `${item}-${index}`}
      />
    </View>
  );
};

// --- COMPONENTE PRINCIPAL ---
const Exercicio5 = () => {
  // --- Estados do Componente ---
  const [currentName, setCurrentName] = useState('');
  const [nameList, setNameList] = useState<string[]>([]);
  const [orientation, setOrientation] = useState<ScreenOrientation.Orientation>(
    ScreenOrientation.Orientation.PORTRAIT_UP
  );

  // --- Lógica de Orientação ---
  useEffect(() => {
    const checkInitialOrientation = async () => {
      const initialOrientation = await ScreenOrientation.getOrientationAsync();
      setOrientation(initialOrientation);
    };
    checkInitialOrientation();
    const subscription = ScreenOrientation.addOrientationChangeListener((evt) =>
      setOrientation(evt.orientationInfo.orientation)
    );
    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  // --- Função para Adicionar Nomes ---
  const handleNameSubmit = () => {
    if (currentName.trim() !== '') {
      setNameList((prevList) => [...prevList, currentName.trim()]);
      setCurrentName('');
    }
  };

  // --- Lógica de Estilo Dinâmico ---
  const isLandscape =
    orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
    orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT;
  const styles = isLandscape ? landscapeStyles : portraitStyles;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Exercício 5</Text>
      </View>

      {isLandscape ? (
        <View style={styles.mainContent!}>
          <InputSection
            styles={styles}
            currentName={currentName}
            setCurrentName={setCurrentName}
            handleNameSubmit={handleNameSubmit}
          />
          <ListSection styles={styles} nameList={nameList} />
        </View>
      ) : (
        <>
          <InputSection
            styles={styles}
            currentName={currentName}
            setCurrentName={setCurrentName}
            handleNameSubmit={handleNameSubmit}
          />
          <ListSection styles={styles} nameList={nameList} />
        </>
      )}
    </SafeAreaView>
  );
};

export default Exercicio5;
