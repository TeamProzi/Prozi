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
  Platform,
  TouchableOpacity,
  onPress,
  Touchable
} from 'react-native';
import DutyProtocol from './DutyProtocol';
import Maintenance from './Maintenance'
import Advocate from './Advocate';
import PhoneNumbers from './PhoneNumbers';

export default function App() {

  let protocols = [{ name: "Lockouts >", icon: require("./assets/lock.png") },
  { name: "Maintenance >", icon: require("./assets/maintenance.png") },
  { name: "Substances >", icon: require("./assets/substances.png") },
  { name: "Health >", icon: require("./assets/health.png") }];

  let phones = [{ icon: "RCD", phone: Linking.openURL('tel:+1(314)-323-0840'), labelText: "RCD on Call", isText: true },
  { icon: "AR CD", phone: Linking.openURL('tel:+1(314)-393-6354'), labelText: "ARCD on Call", isText: true },
  { icon: "RA", phone: Linking.openURL('tel:+1(314)-374-1321'), labelText: "RA on Call", isText: true },
  { icon: require("./assets/WUPD.png"), phone: Linking.openURL('tel:+1(314)-374-1321'), labelText: "WUPD Phone", isText: false }];

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
      <View style={styles.PNR}>
        {/*TITLE TEXT*/}
        <View style={styles.phoneNumbers}>
          <Text style={{ paddingRight: 10, fontSize: 15 }}>Contact Staff via Phone</Text>
          <Image source={require("./assets/phone_calling.png")} style={{ height: 10, width: 10 }} />
        </View>
        {/*PHONE NUMBER AND RESOURCE LINKS*/}
        <View style={styles.phoneNumberResources}>
          <View style={styles.protocols}>
            {[0, 1, 2, 3].map((idx) => (
              <View key={idx} style={styles.pnColumn}>
                <PhoneNumbers
                  icon={phones[idx].icon}
                  phone={phones[idx].phone}
                  labelText={phones[idx].labelText}
                  isText={phones[idx].isText}
                />
              </View>
            ))}
          </View>
          {/*GROUP 3: More Resources*/}
          <TouchableOpacity style={{
            width: 83, H: 76,
            backgroundColor: '#FBFBFB',
            borderWidth: 0.5,
            borderColor: "#007360",
            borderRadius: 8,
            alignItems: 'center'
          }}>
            <Text>More</Text><Text>Resources</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.protocols}>
        {[0, 1, 2, 3].map((idx) => (
          <View key={idx} style={styles.protoColumn}>
            <DutyProtocol
              name={protocols[idx].name}
              icon={protocols[idx].icon}
            />
          </View>
        ))}
      </View>
      <StatusBar style="auto"/>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  phoneIcon: {
    borderWidth: 0.5,
    borderColor: "#007360",
    borderRadius: 3,
    height: 21,
    width: 21,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  phoneIconText: {
    fontSize: 8,
    fontWeight: 'bold',
    color: "#007360"
  },
  PNR: {
    width: '100%'
  },
  phoneNumberResources: {
    flexDirection: 'row',
  },
  protocols: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  protoColumn: {
    width: '50%', // Two columns for each row
    padding: 5, // Adjust spacing as needed
  },
  pnColumn: {
    width: '33%', //Three columns
  }
});
