// components/OptionButton.js
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function OptionButton({ text, onPress, disabled, style }) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2b3a4a',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5
  },
  text: {
    color: 'white',
    fontSize: 16
  }
});
