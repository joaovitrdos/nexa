import { theme } from "../..//theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.GRAY,
    },
    tasksContainer:{
        marginHorizontal: 24,
        marginTop: -40
        
    },
    tasksCreated:{
        color: theme.colors.WHITE,
        fontSize: 18
    },
    tasksDone:{
        color: theme.colors.WHITE,
        fontSize: 18
    },
    info:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 25
    },
    row:{
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    countContainer:{
        backgroundColor: theme.colors.BLACK,
        width: 25,
        height: 25,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
    },
    countText:{ 
        color: theme.colors.WHITE,
        fontSize: 16
    }
})

