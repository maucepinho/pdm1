import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';
import logo from '../assets/adaptive-icon.png';

const showAlert = () => {
  Alert.alert("Boa noite!");
};

export default function Cinco() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.box}>
          <TouchableOpacity onPress={showAlert} style={styles.touchable}>
            <Image source={logo} style={styles.logo} />
          </TouchableOpacity>
        </View>
        <View style={styles.topRightContainer}>
          <View style={styles.box2}>
            <TouchableOpacity onPress={showAlert} style={styles.touchable}>
              <Image source={logo} style={styles.logo} />
            </TouchableOpacity>
          </View>
          <View style={styles.box3}>
            <TouchableOpacity onPress={showAlert} style={styles.touchable}>
              <Image source={logo} style={styles.logo} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.box4}>
        <TouchableOpacity onPress={showAlert} style={styles.touchable}>
          <Image source={logo} style={styles.logo} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: Constants.statusBarHeight },
  topContainer: { flex: 0.5, flexDirection: 'row' },
  topRightContainer: { flex: 0.5, flexDirection: 'column' },
  box: {
    flex: 0.5,
    backgroundColor: 'lime',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    flex: 0.5,
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box3: {
    flex: 0.5,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box4: {
    flex: 0.5,
    backgroundColor: 'salmon',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  touchable: {
    width: 64,
    height: 64,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});