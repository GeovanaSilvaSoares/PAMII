import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { useFonts } from 'expo-font';

import ButtonIniciar from './ButtonIniciar';
import Voltar from './Voltar';

export default function Informacoes() {
  
  const [fontsLoaded] = useFonts({
    'InterRegular': require('../../../assets/fonts/InterRegular.ttf'),
    'InterBlack': require('../../../assets/fonts/InterBlack.ttf'),
  });

  if (!fontsLoaded) {
    return null; // ou <AppLoading /> se estiver usando SDKs antigos
  }


  return (

    <ScrollView contentContainerStyle={styles.scrollContent}>
    <View style={styles.body}>


      <View style={styles.inicio}>
        <Voltar />
        
        <Text style={styles.titulo}>Como funciona?</Text>

      </View>


      <View style={styles.main}>
              

        <View style={styles.textos}>
          <Text style={styles.texto}>Nosso quiz conta com 8 perguntas. Cada uma é composta por imagens que ilustram uma frase.</Text>
        </View>

        <View style={styles.img}>
          <Image source={require('../../../assets/img/ilustracao1.png')} style={styles.ilustracao1} />
        </View>

        <View style={styles.textos}>
          <Text style={styles.texto}>Cada frase descreve um local relacionado a MUB3.</Text>
        </View>

        <View style={styles.textos}>
          <Text style={styles.texto}>Você deverá escolher a opção que acredita estar correta e ao pressiona-la irá saber se está correta ou não</Text>
        </View>


        <View style={styles.img}>
          <Image source={require('../../../assets/img/ilustracao2.png')} style={styles.ilustracao2} />
        </View> 
        
        <ButtonIniciar />

        {/*<View style={styles.textos}>
          <Text style={styles.texto}>Assista a um breve vídeo ilustrativo para compreender melhor:</Text>
        </View>

         <Video
          source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay
          useNativeControls
          style={styles.video}
        /> */}


      </View>

       

    </View>
    </ScrollView>

  );

}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },

  inicio: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    margin: 15,
    width: '95%',
  },
 
  titulo: {
    flex: 1,
    textAlign: 'center',
    color: '#69e1f5',
    fontSize: 30,
    fontFamily: 'InterBlack',
  },
  texto:{
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontFamily: 'InterRegular',
    margin: 40,
    marginTop: 10,
    marginBottom: 10,
  },
  img: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  ilustracao1:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 330,
    margin: 10,
    borderColor: '#1F4A5C',
    borderWidth: 3,
    borderRadius: 20,
  },
  ilustracao2:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 100,
    margin: 10,
    borderColor: '#1F4A5C',
    borderWidth: 3,
    borderRadius: 20,
  },

  scrollContainer: {
    paddingBottom: 40,
    backgroundColor: '#262626',
    alignItems: 'center',
  },
  
  scrollContent: {
    paddingVertical: 40,
    alignItems: 'center',
    backgroundColor: '#444',
  },

  main: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  // video:{
  //   width: 300,
  //   height: 500,
  // }
});
