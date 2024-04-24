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
    Touchable,

} from 'react-native';

export default function DutyProtocol({ name, icon }) {
    return (
        <TouchableOpacity style={styles.button}>
            <View style={styles.view}>
                <Image style={styles.image} source={icon}></Image>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', 
                        justifyContent: 'flex-end',
                        width: '70%'}}>
                <Text style={styles.text}>{name}</Text>
                <Image source={require("./../../assets/Arrow.png")} style={{ height: 10, width: 3.333 }} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: '#007360',
        height: 45,
        width: "95%",
        paddingLeft: 10
    },
    view: {
        backgroundColor: '#61948B',
        borderRadius: 7,
        width: 27,
        height: 27,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        color: '#FFFFFF',
        fontWeight: '500',
        paddingLeft: 5,
        paddingRight: 5
    },
    image: {
        height: 15,
        width: 15
    }
})