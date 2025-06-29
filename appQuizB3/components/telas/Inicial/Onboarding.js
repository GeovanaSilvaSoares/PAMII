import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native';


import Primeira from './Slides/Primeira';
import Segunda from './Slides/Segunda';
import Terceira from './Slides/Terceira';

import Button from './Button';


const { width } = Dimensions.get('window');

const slides = [
  { id: '1', component: <Primeira /> },
  { id: '2', component: <Segunda /> },
  { id: '3', component: <Terceira /> },
];

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScroll = (event) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentSlide(slideIndex);
  };

  const handleStart = () => {
    console.log('Experiência iniciada!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.circulo}></View>
      <View style={styles.retanguloArredondado}></View>
      
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide) => (
          <View key={slide.id} style={{ width, height: '100%' }}>
            {slide.component}
          </View>
        ))}
      </ScrollView>

      <View style={styles.indicators}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlide === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>

      <Button />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#5D5D5D',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#ccc',
  },
  button: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: '#00CFFF',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  
  circulo: {
    width: 210,
    height: 210,
    borderRadius: '50%',
    borderColor: '#1F4A5C',
    borderWidth: 6,
    borderStyle: 'solid',
    position: 'fixed',
    right: -80,
    top: -100,
  },

  retanguloArredondado: {
    width: 350,
    height: 210,
    borderRadius: 200,
    borderColor: '#1F4A5C',
    borderWidth: 6,
    borderStyle: 'solid',
    position: 'fixed',
    left: -100,
    bottom: -50,
  },
});
