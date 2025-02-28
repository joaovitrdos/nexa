import { theme } from "../../theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    btn: {
        width: "100%",
        backgroundColor: theme.colors.WHITE,
        borderRadius: 20
    },
    texto: {
        fontSize: 16,
        color: theme.colors.BLACK,
        padding: 14,
        textAlign: "center"
    }
})