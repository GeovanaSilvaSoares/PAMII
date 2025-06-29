import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Primeira() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/logoMub3Escrita.png')} style={styles.logoEscrita} resizeMode="contain"/>
      <Image source={require('../../../../assets/mub3Page1.png')} style={styles.mub31} resizeMode="contain"/>
      <Image source={require('../../../../assets/logoMUB3.png')} style={styles.logo} resizeMode="contain"/>
      <Text style={styles.text}>Participe desta atividade para testar os conhecimentos adquiridos na visita ao museu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '3%',
    zIndex:1,
  },
  mub31: {
    width: '60%',
  },
  logo: {
    width: '40%',
  },
  logoEscrita: {
    width: '30%',
    position: 'absolute',
    top: 30,
    left: '5%',
  },
  text: {
    fontSize: '80%',
    fontWeight: 500,
    color: '#fff',
    textAlign: 'center',
    width: '90%',
  },
});
