import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Dois() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topLeftView} />
        <View style={styles.topRightView} />
      </View>
      <View style={styles.bottomView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
  },
  topContainer: {
    flex: 0.5,
    flexDirection: 'row', // Alinha os filhos em linha 
  },
  topLeftView: {
    flex: 0.5, // Ocupa 50% do pai 
    backgroundColor: 'lime', // Define a cor [cite: 46]
  },
  topRightView: {
    flex: 0.5, // Ocupa 50% do pai 
    backgroundColor: 'aquamarine', // Define a cor [cite: 46]
  },
  bottomView: {
    flex: 0.5,
    backgroundColor: 'salmon',
  },
});