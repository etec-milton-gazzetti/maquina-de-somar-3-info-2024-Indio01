import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ETEC PROFESSOR MILTON GAZZETTI</Text>
      <Text style={{fontStyle: 'italic'}}>Terceira Série</Text>
      <Text style={{textDecorationLine: 'underline'}}>mtec Informatica para internet</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
