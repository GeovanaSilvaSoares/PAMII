import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function Button() {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#2E8BCC', '#00FFFF']} style={styles.outerGlow}>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Questionario')}>
        <Text style={styles.text}>Jogar</Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  outerGlow: {
    padding: 2,
    borderRadius: 50,
    shadowColor: '#00FFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 10,
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
