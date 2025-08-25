import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import logo from '../assets/adaptive-icon.png'; 

export default function Quatro() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topLeftView}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.topRightContainer}>
          <View style={styles.topRightTopView}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={styles.topRightBottomView}>
            <Image source={logo} style={styles.logo} />
          </View>
        </View>
      </View>
      <View style={styles.bottomView}>
        <Image source={logo} style={styles.logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
  },
  topContainer: { flex: 0.5, flexDirection: 'row' },
  topLeftView: { flex: 0.5, backgroundColor: 'lime' },
  topRightContainer: { flex: 0.5, flexDirection: 'column' },
  topRightTopView: { flex: 0.5, backgroundColor: 'teal' },
  topRightBottomView: { flex: 0.5, backgroundColor: 'skyblue' },
  bottomView: { flex: 0.5, backgroundColor: 'salmon' },
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
});