import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Button,
  View,
  Image,
  SafeAreaView,
  Text,
  Alert,
  Linking,
  Platform
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.welcome}>Welcome!</Text>
          <Text style={styles.titleText}>RA | Washington University in St. Louis</Text>
        </View>
        <Image source={require("./assets/washuLogo.png")} />
      </View>

      {/* PHONE NUMBER & RESOURCES */}
      <View> 
        {/*TITLE TEXT*/}
        <View style={styles.phoneNumbers}> 
          <Text style={{paddingRight: 10, fontSize: 15}}>Contact Staff via Phone</Text>
          <Image source={require("./assets/phone_calling.png")} style={{height: 10, width: 10}}/>
        </View>
        {/*PHONE NUMBER AND RESOURCE LINKS*/}
        <View> 
          <View style={styles.phoneNumbers}>
            <Text>RCD</Text>
            <Text>RCD on Call</Text>
          </View>
        </View>
      </View>


      <Button
        title="u should press me"
        color ="#000000"
        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Z2xooz6844k')}
      />
      <Button
        title="lalalalalalala"
        onPress={() => Linking.openURL(`tel:+1(847)-502-8096`)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  headerContainer: {
    flexDirection: 'column',
    padding: 0
  },
  innerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 150,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#FBFBFB',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.11,
        shadowRadius: 13.5,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  welcome: {
    paddingBottom: 5,
    fontSize: 20,
  },
  titleText: {
    fontSize: 15,
  },
  phoneNumbers: {
    flexDirection: 'row',
    justifyContent: 'flext-start',
    alignItems: 'center',
  }
});
