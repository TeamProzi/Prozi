import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Linking
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Yuh what's up Jose</Text>
      <Button
        title="u should press me"
        color ="#ffffff"
        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Z2xooz6844k')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94a885',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
