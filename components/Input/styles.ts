import { StyleSheet } from "react-native";

export const button = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    input: {
        flex: 1,
        padding: 16,
        borderRadius: 6,
        marginRight: 4,
        backgroundColor: '#262626',
        borderColor: '#0D0D0D',
        borderWidth: 1,
        fontSize: 16,
        color: '#F2F2F2',
    },

    button: {
        padding: 18,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
    }
})