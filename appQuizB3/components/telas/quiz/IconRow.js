// components/IconRow.js
import { View, Image, Text, StyleSheet } from 'react-native';

export default function IconRow({ icons }) {
  return (
    <View style={styles.container}>
      {icons.map((icon, idx) => (
        <View key={idx} style={styles.icon}>
          <Image source={(icon.img)} style={styles.image} />
          <Text style={styles.label}>{icon.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginVertical: 30,
    flexWrap: 'wrap'
  },
  icon: {
    width: 100,
    height: 120,
    backgroundColor: '#00CFFF',
    borderRadius: 8,
    borderWidth: 4,
    borderColor: '#e2e5e9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 5
  },
  label: {
    color: '#1e1e1e',
    fontWeight: 'bold'
  }
});
