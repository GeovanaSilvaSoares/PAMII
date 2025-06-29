import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Image, ScrollView } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import NavPont from './NavPont';
import { questions } from '../quiz/questions'

const tamanhoCirc = 230;
const espessuraCirc = 16;
const raio = (tamanhoCirc - espessuraCirc) / 2;
const circunferencia = 2 * Math.PI * raio;


export default function Pontuacao({ route }) {
  const { score } = route.params;
  const valor = (score / 8) * 100;

  const animacaoCirculo = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animacaoCirculo, {
      toValue: valor,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, [valor]);

  const deslocamento = animacaoCirculo.interpolate({
    inputRange: [0, 100],
    outputRange: [circunferencia, 0],
  });

  let mensagem = '';
  if (valor <= 30) {
    mensagem = 'Continue tentando! Você está no caminho!';
  } else if (valor <= 60) {
    mensagem = 'Boa! Quase lá, continue assim!';
  } else if (valor <= 85) {
    mensagem = 'Mandou bem! Você está indo muito bem!';
  } else {
    mensagem = 'Uau! Você arrasou, parabéns!';
  }

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  return (
  <ScrollView style={{ flex: 1, backgroundColor: '#444' }}>
    <View style={styles.topContainer}>
      
      <View style={styles.nav}>
        <Text style={styles.titulo}>Pontuação</Text>
      </View>
    </View>

    <View style={styles.centerContent}>
      <View style={styles.svgContainer}>
        <Svg width={tamanhoCirc} height={tamanhoCirc}>
          <Circle
            cx={tamanhoCirc / 2}
            cy={tamanhoCirc / 2}
            r={raio}
            stroke="#ccc"
            strokeWidth={espessuraCirc}
            fill="none"
          />
          <AnimatedCircle
            cx={tamanhoCirc / 2}
            cy={tamanhoCirc / 2}
            r={raio}
            stroke="#00eaff"
            strokeWidth={espessuraCirc}
            fill="none"
            strokeDasharray={circunferencia}
            strokeDashoffset={deslocamento}
            strokeLinecap="round"
            rotation="-270"
            originX={tamanhoCirc / 2}
            originY={tamanhoCirc / 2}
          />
        </Svg>
        <Text style={styles.pontos}>{Math.round(valor)}%</Text>
      </View>

      <Text style={styles.resultado}>
        Você acertou {score} de {questions.length}.
      </Text>
      <Text style={styles.subtitulo}>{mensagem}</Text>
      <NavPont />
    </View>
  </ScrollView>
);
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },

  topContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },

  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },


  nav: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    margin: 15,
    width: '95%',
  },

  seta: {
    position: 'absolute',
    left: 20,
    top: 20,
    width: 30,
    height: 30,
  },

  titulo: {
    color: '#69E1F5',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },

  svgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  pontos: {
    position: 'absolute',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#00eaff',
  },

  subtitulo: {
    color: '#ccc',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  
  resultado: {
    color: '#69E1F5',
    fontSize: 20,
    marginTop: 15,
  },

  circulo: {
    width: 210,
    height: 210,
    borderRadius: 105, 
    borderColor: '#69E1F5',
    borderWidth: 6,
    position: 'absolute', 
    right: -80,
  
  },

});
