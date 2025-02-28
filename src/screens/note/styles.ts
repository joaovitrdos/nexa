import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: theme.colors.GRAY,
        paddingTop: 60
    },
    input: {
        padding: 12,
        marginBottom: 10,
        borderRadius: 8,
        color: "#FFF",
        borderWidth:1,
        borderColor: "gray"
    },
    textArea: {
        height: 100
    },
    button: {
        backgroundColor: theme.colors.BLACK,
        position: "absolute",
        bottom: 80,
        right: 20,
        width: 60,
        height: 60,
        alignItems: "center",
        borderRadius: 999,
        justifyContent: "center"
    },

    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },
    noteCard: {
        backgroundColor: "#fff",
        padding: 12,
        marginTop: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3
    },
    noteTitle: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 5
    },
    timestamp: {
        fontSize: 12,
        color: "gray",
        marginTop: 5
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    editButton: {
        backgroundColor: "#000",
        width: 30,
        height: 30,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
        
    },
    deleteButton: {
        backgroundColor: "#000",
        width: 30,
        height: 30,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center"
    }
});