// components/Header.js
import { Text, StyleSheet } from 'react-native';

export default function Header() {
  return <Text style={styles.title}>MUB3 QUIZ</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00CFFF',
    textAlign: 'center',
    marginTop: 40,
  }
});
