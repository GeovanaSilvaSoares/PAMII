import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Terceira() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/logoMub3Escrita.png')} style={styles.logoEscrita} resizeMode="contain"/>
      <View style={styles.circulo3}>
        <Text style={styles.text}>Participe</Text>
      </View>
      
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
  logoEscrita: {
    width: '30%',
    position: 'absolute',
    top: 30,
    left: '5%',
  },
  text: {
    fontSize: 40,
    fontWeight: 500,
    color: '#5ef',
    textAlign: 'center',
    width: '90%',

  },
  circulo3: {
    width: '95%',
    aspectRatio: 1,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00FFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 10,
  },
});
