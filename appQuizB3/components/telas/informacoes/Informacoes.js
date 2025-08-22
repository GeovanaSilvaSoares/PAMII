import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';

import ButtonIniciar from './ButtonIniciar';
import Voltar from './Voltar';

export default function Informacoes() {
  const [fontsLoaded] = useFonts({
    InterRegular: require('../../../assets/fonts/InterRegular.ttf'),
    InterBlack: require('../../../assets/fonts/InterBlack.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.inicio}>
          <Voltar />
          <Text style={styles.titulo}>Como funciona?</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.textos}>
          <Text style={styles.texto}>
            Nosso quiz conta com 8 perguntas. Cada uma é composta por imagens que ilustram uma frase.
          </Text>
        </View>

        <View style={styles.img}>
          <Image
            source={require('../../../assets/img/ilustracao1.png')}
            style={styles.ilustracao1}
          />
        </View>

        <View style={styles.textos}>
          <Text style={styles.texto}>
            Cada frase descreve um local relacionado a MUB3.
          </Text>
        </View>

        <View style={styles.textos}>
          <Text style={styles.texto}>
            Você deverá escolher a opção que acredita estar correta e ao pressioná-la saberá se está correta ou não.
          </Text>
        </View>

        <View style={styles.img}>
          <Image
            source={require('../../../assets/img/ilustracao2.png')}
            style={styles.ilustracao2}
          />
        </View>

        <ButtonIniciar />
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingVertical: 10,        
    gap: 5,
    backgroundColor: '#262626',
  },

  inicio: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    margin: 5,
    width: '95%',
  },

  ilustracao1: {
    width: 200,
    height: 200,
    margin: 5,
    borderRadius: 20,
    resizeMode: 'cover',
  },

  ilustracao2: {
    width: 250,
    height: 80,
    margin: 5,
    borderRadius: 20,
    resizeMode: 'cover',
  },

  titulo: {
    flex: 1,
    textAlign: 'center',
    color: '#69e1f5',
    fontSize: 25,
    marginTop: 12,
    fontFamily: 'InterBlack',
  },

  textos: {
    width: '90%',
  },

  texto: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
    fontFamily: 'InterRegular',
    margin: 40,
    marginTop: 10,
    marginBottom: 10,
  },

});
