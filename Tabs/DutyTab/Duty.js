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
{/*FONTS*/ }
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';


{/**SECTION IMPORTS */ }
import DutyProtocol from './DutyProtocol';
import Maintenance from './Maintenance'
import Advocate from './Advocate';
import PhoneNumbers from './PhoneNumbers';

export default function Duty() {

  {/**FONTS */ }
  const [fontsLoaded, fontError] = useFonts({
    'SourceSans3Light': require('./../../assets/Source_Sans_3/static/SourceSans3-Light.ttf'),
    'SourceSans3Bold': require('./../../assets/Source_Sans_3/static/SourceSans3-Bold.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  {/**SECTION IMPORT INSTANCE CREATION */ }
  let protocols = [{ name: "Lockouts", icon: require("./../../assets/lock.png") },
  { name: "Maintenance", icon: require("./../../assets/maintenance.png") },
  { name: "Substances", icon: require("./../../assets/substances.png") },
  { name: "Health", icon: require("./../../assets/health.png") }];

  let phones = [{ icon: "RCD", phone: Linking.openURL('tel:+1(314)-323-0840'), labelText: "RCD on Call", isText: true },
  { icon: "AR\nCD", phone: Linking.openURL('tel:+1(314)-393-6354'), labelText: "ARCD on Call", isText: true },
  { icon: "RA", phone: Linking.openURL('tel:+1(314)-374-1321'), labelText: "RA on Call", isText: true },
  { icon: require("./../../assets/WUPD.png"), phone: Linking.openURL('tel:+1(314)-374-1321'), labelText: "WUPD Phone", isText: false }];

  return (
    <View style={styles.container}>

      {/**HEADER */}
      <View style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.welcome}>Welcome!</Text>
          <Text style={styles.titleText}>
            <Text style={styles.boldTitleText}>RA</Text> | Washington University in St. Louis</Text>
        </View>
        <Image style={{ marginRight: 10 }} source={require("./../../assets/washuLogo.png")} />
      </View>

      {/** SECTION 1 --PHONE NUMBER & RESOURCES */}
      <View style={styles.pnrView}>
        {/*TITLE TEXT*/}
        <View style={styles.pnrTitle}>
          <Text style={{
            paddingLeft: 10, paddingRight: 10, paddingTop: 5,
            fontSize: 15, fontFamily: 'SourceSans3Light'
          }}>
            <Text style={styles.boldTitleText}>Contact </Text>
            Staff via Phone</Text>
          <Image source={require("./../../assets/phone_calling.png")} style={{ height: 10, width: 10 }} />
        </View>
        {/*PHONE NUMBER AND RESOURCE LINKS*/}
        <View style={styles.pnrInnerContainer}>
          <View style={styles.pNumbers}>
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
            width: 83, height: 76,
            backgroundColor: '#FBFBFB',
            borderWidth: 0.5,
            borderColor: "#007360",
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',

          }}>
            <Text>More</Text><Text>Resources</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/*SECTION 2 - ALL PROTOCOLS*/}
      {/*TITLE TEXT*/}
      <View style={{
        flexDirection: 'row', justifyContent: 'flex-start',
        alignItems: 'center', width: '100%', padding: 10
      }}>
        <Text style={{
          paddingLeft: 10, paddingRight: 10,
          fontSize: 15, fontFamily: 'SourceSans3Light'
        }}>Common
          <Text style={styles.boldTitleText}> Duty Protocols</Text>
        </Text>
      </View>
      {/*PROTOCOLS*/}
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

      {/*SECTION 3 - DUTY LINKS*/}
      {/**DUTY TITLE */}
      <View style={{
        flexDirection: 'row', justifyContent: 'flex-start',
        alignItems: 'center', width: '100%', padding: 10
      }}>
        <Text style={{
          paddingLeft: 10, paddingRight: 10,
          fontSize: 15, fontFamily: 'SourceSans3Light'
        }}>Duty
          <Text style={styles.boldTitleText}> Links</Text>
        </Text>
      </View>
      {/**DUTY LINKS*/}
      <View style={styles.dutyLinks}>
        {/**LEFT LINKS */}
        <View style={styles.leftLinks}>
          <View style={styles.maintenanceGroup}>
            <View style={styles.linkTitles}>
              <Text style={{ fontFamily: "SourceSans3Bold", color: 'white' }}>Maintenance</Text>
            </View>
            <View style={{ marginTop: 40, paddingHorizontal: 10, paddingVertical: 17, width: "100%", flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{ width: 30, height: 30 }} source={require("./../../assets/Laundry.png")} />
              <Text style={{ marginLeft: 10, fontFamily: "SourceSans3Light", fontSize: 15 }}>Laundry Form</Text>
            </View>
            <View style={{width: "90%", height: 0.5, backgroundColor: "#6C7373", alignSelf: 'center'}}></View>
            <View style={{padding: 10, paddingHorizontal: 10, paddingVertical: 17, width: "100%", flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{ width: 30, height: 30 }} source={require("s./../../assets/general_maintenance.png")} />
              <Text style={{ marginLeft: 10, fontFamily: "SourceSans3Light", fontSize: 15 }}>General{'\n'}Request Form</Text>
            </View>
          </View>
          <View style={styles.dutyFormGroup}>
            <View style={styles.linkTitles}>
              <Text style={{ fontFamily: "SourceSans3Bold", color: 'white' }}>Duty Form</Text>
            </View>
            <View style={{ marginTop: 40, padding: 10, width: "100%", flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{ width: 25, height: 25}} source={require("./../../assets/End_of_shift.png")} />
              <Text style={{ marginLeft: 10, fontFamily: "SourceSans3Light", fontSize: 15 }}>Laundry Form</Text>
            </View>
          </View>
        </View>
        {/**RIGHT LINKS */}
        <View style={styles.rightLinks}>
          <View style={styles.advocateGroup}>
            <View style={styles.linkTitles}>
              <Text style={{ fontFamily: "SourceSans3Bold", color: 'white' }}>Advocate</Text>
            </View>
            <View style={{ marginTop: 40, padding: 10, width: "100%", flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{ width: 25, height: 25, marginLeft: 5}} source={require("./../../assets/IR_Form.png")} />
              <Text style={{ fontFamily: "SourceSans3Light", fontSize: 15 }}> Write Incident Report</Text>
            </View>
          </View>
          <View style={styles.faqGroup}>
            <View style={styles.linkTitles}>
              <Text style={{ fontFamily: "SourceSans3Bold", color: 'white' }}>FAQ</Text>
            </View>
            <View style={{ marginTop: 40, padding: 10, width: "100%", flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{ width: 25, height: 25, marginLeft: 5}} source={require("./../../assets/ARCD.png")} />
              <Text style={{ marginLeft: 10, fontFamily: "SourceSans3Light", fontSize: 15 }}>When to call ARCD?</Text>
            </View>
            <View style={{width: "90%", height: 0.5, backgroundColor: "#6C7373", alignSelf: 'center'}}></View>
            <View style={{padding: 10, width: "100%", flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{ width: 30, height: 30 }} source={require("./../../assets/RCD.png")} />
              <Text style={{ marginLeft: 10, fontFamily: "SourceSans3Light", fontSize: 15 }}>When to call RCD?</Text>
            </View>
            <View style={{width: "90%", height: 0.5, backgroundColor: "#6C7373", alignSelf: 'center'}}></View>
            <View style={{padding: 10, width: "100%", flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{ width: 30, height: 30 }} source={require("./../../assets/IR.png")} />
              <Text style={{ marginLeft: 10, fontFamily: "SourceSans3Light", fontSize: 15 }}>When to write an IR?</Text>
            </View>
          </View>
        </View>
      </View>

      {/*SECTION 4 - FOOTER LINKS*/}
      <StatusBar style="auto" />
    </View>
  )
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
    width: "65%",
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
    fontSize: 20,
    fontFamily: 'SourceSans3Light'
  },
  titleText: {
    fontSize: 15,
    fontFamily: 'SourceSans3Light'
  },
  boldTitleText: {
    fontWeight: 'bold',
    fontFamily: 'SourceSans3Bold',
    fontSize: 15,
  },
  pnrTitle: {
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
  pnrView: {
    width: '100%',
    paddingLeft: 10, paddingRight: 10, paddingTop: 10
  },
  phoneNumberResources: {
    flexDirection: 'row',
    width: '75%'
  },
  protocols: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  pNumbers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  protoColumn: {
    width: '45%', // Two columns for each row
    marginBottom: 15
  },
  pnColumn: {
    width: '45%',
    padding: 10
  },
  pnrInnerContainer: {
    flexDirection: 'row',
    width: "75%",
    paddingTop: 8
  },
  dutyLinks: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'center'
  },
  leftLinks: {
    height: 300,
    width: "40%",
    flexDirection: 'column',
    paddingLeft: 10,
    marginRight: 10
  },
  linkTitles: {
    backgroundColor: '#007360',
    marginLeft: 12, marginTop: 12, borderRadius: 7,
    alignSelf: 'center', paddingHorizontal: 10,
    paddingVertical: 4,
    position: 'absolute',
    top: 0,
    left: 0
  },
  rightLinks: {
    flexDirection: 'column',
    width: "50%",
    paddingRight: 10,
    marginLeft: 10
  },
  maintenanceGroup: {
    width: '100%',
    height: 190,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    borderRadius: 15,
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowColor: '#002B23',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 13.5,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  dutyFormGroup: {
    width: "100%",
    height: 92,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#002B23',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 13.5,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  advocateGroup: {
    width: "100%",
    height: 92,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    borderRadius: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#002B23',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 13.5,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  faqGroup: {
    width: "100%",
    height: 190,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#002B23',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 13.5,
      },
      android: {
        elevation: 4,
      },
    }),
  }
});
