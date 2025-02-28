import { theme } from "../../theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    input: {
        width: "100%",
        backgroundColor: theme.colors.GRAY,
        padding: 15,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: theme.colors.WHITE,
        color: theme.colors.WHITE
    },
    label: {
        marginLeft: 5,
        color: theme.colors.WHITE,
        fontSize: 16,
        marginBottom: 4
    }
})