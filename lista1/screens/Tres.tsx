import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Tres() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topLeftView} />
        <View style={styles.topRightContainer}>
          <View style={styles.topRightTopView} />
          <View style={styles.topRightBottomView} />
        </View>
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
  topRightContainer: {
    flex: 0.5,
    flexDirection: 'column',
  },
  topRightTopView: {
    flex: 0.5,
    backgroundColor: 'teal',
  },
  topRightBottomView: {
    flex: 0.5,
    backgroundColor: 'skyblue',
  },
  bottomView: {
    flex: 0.5,
    backgroundColor: 'salmon',
  },
});