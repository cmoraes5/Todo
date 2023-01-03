import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderTopColor: '#333333',
        borderTopWidth: 1,
    },

    image: {
        marginTop: 48,
        width: 56,
        height: 56,
    },
    
    text: {
        marginTop: 16,
    },

    defaultText: {
        color: '#808080',
        fontSize: 14,
    },
    
    strongText:{
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 14,
    },
})