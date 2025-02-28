import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.GRAY,
        padding: 20
    },
    text:{
        fontSize: 18,
        color: theme.colors.WHITE,

    },
    title:{
        fontSize: 22,
        color: theme.colors.WHITE
    },
    line:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 30
    }
});