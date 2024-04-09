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

export default function DutyProtocol({name, icon}) {
    return (
    <TouchableOpacity style={styles.button}>
        <View style={styles.view}>
            <Image style={styles.image} source={icon}></Image>
        </View>
        <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#007360',
        height: 45,
        width: 163,
        paddingLeft: 10
    },
    view: {
        backgroundColor: '#61948B',
        borderRadius: 10,
        width: 27,
        height: 27,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
        paddingLeft: 5
    },
    image: {
        height: 15,
        width: 15
    }
})