import React from 'react';
import { Text, Pressable, StyleSheet, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function Button() {
  const navigation = useNavigation();

  return (

    <Pressable style={styles.button} onPress={() => navigation.navigate('Inicial')}>
      <ImageBackground source={require('../../../assets/seta.png')} style={styles.iconVoltar} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  
  button: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    left:  2,
  },

   iconVoltar: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },


  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
