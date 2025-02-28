import { theme } from "../../theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer: {
		backgroundColor: theme.colors.GRAY,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: 180,
        marginTop: -10,
	},
	form: {
		flex: 1,
		height: 54,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
        paddingHorizontal: 20,
		gap: 10
	},
	input: {
		height: 45,
		width: '80%',
		backgroundColor: theme.colors.WHITE,
		borderRadius: 30,
		padding: 16,
		color: theme.colors.BLACK,
		fontSize: 16,
	},
	button:{
        height: 60,
        width: 60,
        borderRadius: 100,
        backgroundColor: theme.colors.BLACK,
        justifyContent: "center",
        alignItems: "center", 

    },
})