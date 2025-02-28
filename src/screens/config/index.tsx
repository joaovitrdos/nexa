import { View, Text, TouchableOpacity, Linking } from "react-native";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { Feather, FontAwesome5 } from "@expo/vector-icons"

export default function Config() {

    const navigation = useNavigation();

    const openGmail = () => {
        const url = "https://mail.google.com/";
        Linking.openURL(url).catch(error => console.error("Erro ao abrir o Gmail !!"))
    }

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.text}>General</Text>
            </View>

            <TouchableOpacity style={styles.info} activeOpacity={0.5} onPress={openGmail}>
                <Text style={styles.text}>Help</Text>
                <FontAwesome5 name="arrow-right" size={18} color="#FFF" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.info} activeOpacity={0.5} onPress={() => navigation.navigate("about")}>
                <Text style={styles.text}>About</Text>
                <FontAwesome5 name="arrow-right" size={18} color="#FFF" />
            </TouchableOpacity>

        </View>
    )
}