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

export default function Maintenance() {
    return (
        <View style={styles.text}>
            <Text>I AM MAINTENANCE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'blue',
        borderWidth: 5
    }
})
