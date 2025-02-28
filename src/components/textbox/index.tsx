import { Text, TextInput } from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme";

interface TextBoxProps {
    label: string; 
    placeholder: string;
    isPassword: boolean; 
    value: string;
    onChangeText: (text: string) => void; 
  }

export default function TextBox({label, placeholder, isPassword, value, onChangeText}: TextBoxProps) {
    return <>
        {
            label && <Text style={styles.label}>{label}</Text>
        }
        <TextInput style={styles.input}
            placeholder={placeholder}
            secureTextEntry={isPassword}
            onChangeText={onChangeText}
            value={value}
        />
    </>
}
