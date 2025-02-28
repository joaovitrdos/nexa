import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ButtonProps{
    onPress: () => void
    texto: string
}

export default function Button({onPress, texto}: ButtonProps) {
    return <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
}
