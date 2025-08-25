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
    flexDirection: 'row',
  },
  topLeftView: {
    flex: 0.5,
    backgroundColor: 'lime',
  },
  topRightView: {
    flex: 0.5,
    backgroundColor: 'aquamarine',
  },
  bottomView: {
    flex: 0.5,
    backgroundColor: 'salmon',
  },
});