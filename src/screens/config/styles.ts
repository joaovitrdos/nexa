import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: theme.colors.GRAY,
        
    },
    text:{
        fontSize: 18,
        color: theme.colors.WHITE
    },
    textLogout:{
        fontSize: 24,
        color: "#F00"
    },
    info:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginTop: 60
    },
    logout:{
        justifyContent:"center",
        alignItems: "center",
        marginTop: 220
    },
    logoutInfo:{
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    }

})