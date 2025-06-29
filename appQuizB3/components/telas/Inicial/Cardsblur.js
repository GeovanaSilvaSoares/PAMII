import React from 'react';
import { Text, StyleSheet, View,Image } from 'react-native';
import { BlurView } from 'expo-blur';

export default function Cardsblur(props) {
  return (
    <View style={styles.cardWrapper}>
        <BlurView intensity={50} tint="dark" style={styles.blurCard} />
        <View style={styles.content}>
            <View style={styles.divImage}>
                <Image source={props.img} style={styles.icone} resizeMode="contain" />
            </View>
            <View style={styles.divTexto}>
                <Text style={styles.title}>{props.nome}</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    height: '30%',
    width: '90%',
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    margin: 5,
    borderColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    textAlign: 'center',
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 0,
  },
  blurCard: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
  },
  content: {
    position: 'absolute',
    flexDirection: 'row',
    right: 5,
    height: '100%',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 11,
    paddingLeft: 5,
  },
  icone: {
    height: 60,
    left: '10%',
  },
  divTexto:{
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divImage:{
    width: '50%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
});
