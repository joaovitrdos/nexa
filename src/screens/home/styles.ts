import { theme } from "../../theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.GRAY
    },
    header:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 50
    },
    img:{
        width: 50,
        height: 50,
        borderRadius: 50
    },
    title:{
        fontSize: 20,
        fontWeight: "condensed",
        color: theme.colors.WHITE
    },
    text:{
        fontSize: 24,
        fontWeight: "bold",
        color: theme.colors.WHITE
    },

    
    

})