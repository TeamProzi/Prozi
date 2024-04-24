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

export default function PhoneNumbers({icon, phone, labelText, isText}) {
    if (isText) {
        return (
            <TouchableOpacity style={styles.phoneNumberStyle} onPress={phone}>
                <View style={styles.phoneIcon}>
                    <Text style={styles.phoneIconText}>{icon}</Text>
                </View>
                <Text style={styles.labelText}>{labelText}</Text>
            </TouchableOpacity>
        )
    }
    else {
        return (
            <TouchableOpacity style={styles.phoneNumberStyle} onPress={phone}>
                <View style={styles.phoneIcon}>
                <Image source={icon} style={{height: 18, width: 18 }} />
                </View>
                <Text style={styles.labelText}>{labelText}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    phoneNumberStyle: {
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
    labelText: {
        paddingLeft: 5
    }
})