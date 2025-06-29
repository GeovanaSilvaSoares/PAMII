import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { questions } from './questions';

import Header from './Header';
import IconRow from './IconRow';
import OptionButton from './OptionButton';
import ProgressBar from './ProgressBar';

export default function Questionario() {
  const navigation = useNavigation();

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const currentQuestion = questions[current];

  const handleSelect = (answer) => {
    if (selected !== null) return;
    setSelected(answer.id);
    if (answer.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (selected === null) {
      Alert.alert('Aviso', 'Selecione uma resposta antes de continuar.');
      return;
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowModal(true); // Mostra o modal ao final
    }
  };

  const handleRestart = () => {
    setShowModal(false);
    setCurrent(0);
    setScore(0);
    setSelected(null);
  };

  const handleGoToScore = () => {
    setShowModal(false);
    navigation.navigate('Pontuacao', { score });
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <ProgressBar progress={((current + 1) / questions.length) * 100} />
      {/*<Text style={styles.counter}>{current + 1}/{questions.length}</Text>*/}
      <IconRow icons={currentQuestion.icons} />
      <Text style={styles.question}>{currentQuestion.question}</Text>

      <View style={styles.options}>
        {currentQuestion.answers.map((answer) => (
          <OptionButton
            key={answer.id}
            text={answer.text}
            onPress={() => handleSelect(answer)}
            disabled={selected !== null}
            style={
              selected === answer.id
                ? answer.correct
                  ? styles.correct
                  : styles.incorrect
                : null
            }
          />
        ))}
        <OptionButton text="PRÓXIMA" onPress={handleNext} style={styles.next} />
      </View>

      <Modal
        visible={showModal}
        transparent
        animationType="slide"
        onRequestClose={handleRestart}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Quiz finalizado</Text>
            <Button title="Ver pontuação" onPress={handleGoToScore} />
            <Button title="Recomeçar" onPress={handleRestart} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 20,
  },
  counter: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  question: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  options: {
    marginTop: 10,
  },
  correct: {
    backgroundColor: '#4CAF50',
  },
  incorrect: {
    backgroundColor: '#F44336',
  },
  next: {
    backgroundColor: '#697585',
    marginTop: 20,
    alignSelf: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 8,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalText: {
    marginVertical: 12,
  },
});