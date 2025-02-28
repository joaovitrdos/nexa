import { theme } from "../../theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        width: "100%",
        paddingVertical: 200,
        paddingHorizontal: 20,
        borderTopColor: theme.colors.GRAY2,
        borderEndColor: theme.colors.GRAY,
        borderStartColor: theme.colors.GRAY,
        borderBottomColor: theme.colors.GRAY,
        borderWidth: 1
    },
    img:{
        marginBottom: 16,
        width: 150,
        height: 150,
        borderRadius: 10
    },
    textBold:{
        fontSize: 16,
        fontWeight: "bold",
        color: theme.colors.GRAY2,
        marginBottom: 10
    },
    textRegular:{
        fontSize: 16,
        fontWeight: "bold",
        color: theme.colors.GRAY2,
    }
})