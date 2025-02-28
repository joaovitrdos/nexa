import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme";

type HeaderProps = {
    task: string,
    inputRef: React.RefObject<TextInput>
    onChangeText: (task: string) => void,
    onPress: () => void
}

export default function HeaderTask({ task, inputRef, onChangeText, onPress }: HeaderProps) {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={theme.colors.BLACK}
                    value={task}
                    onChangeText={onChangeText}
                    onSubmitEditing={onPress}
                    ref={inputRef}
                    autoCorrect={false}
                    returnKeyType="done"
                />

            </View>

        </View>
    )
}