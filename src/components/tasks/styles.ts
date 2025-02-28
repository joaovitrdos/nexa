import { theme } from "../../theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 65,
        backgroundColor: theme.colors.GRAY1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius:8,
        borderWidth: 1,
        borderColor: theme.colors.GRAY2,

    },
    textContainer:{
        width: "80%",
        height:40,
        justifyContent: "center",
        alignContent: "center",
        marginHorizontal: 8
    },
    textDone:{
        fontSize: 12,
        color: theme.colors.GRAY4,
        textDecorationLine: "line-through"
    },
    textCreated:{
        fontSize: 16,
        color: theme.colors.WHITE
    }
})