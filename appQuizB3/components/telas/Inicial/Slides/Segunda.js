import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Cardsblur from '../Cardsblur';

export default function Segunda() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/logoMenor.png')} style={styles.logo} resizeMode="contain"/>
      <Image source={require('../../../../assets/fundoPage2.png')} style={styles.mub31} resizeMode="contain"/>
      <View style={styles.caixas}>
        <View style={styles.esquerda}>
          <Cardsblur nome="Museu" img={require('../../../../assets/iconeMuseu.png')} />
          <Cardsblur nome="Museu" img={require('../../../../assets/iconeMuseu.png')} />
        </View>
        <View style={styles.esquerda}>
          <Cardsblur nome="Bolsa de Valores" img={require('../../../../assets/iconeBolsaValores.png')} />
          <Cardsblur nome="Bolsa de Valores" img={require('../../../../assets/iconeBolsaValores.png')} />
        </View>
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
  mub31: {
    width: '80%',
    position: 'absolute',
  },
  logo: {
    width: '30%',
    position: 'absolute',
    top: 30,
    left: '5%',
  },
  caixas:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '90%',
    height: '60%',
  },
  esquerda:{
    gap: 10,
    display: 'flex',
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
