import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    
    labels: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    
    textCriadas: {
        color: '#4EA8DE',
        fontWeight: 'bold',
        fontSize: 14,
    },
    
    textConluidas:{
        color: '#8284FA',
        fontWeight: 'bold',
        fontSize: 14,
    },
    
    input: {
        marginLeft: 8,
        textAlign: 'center',
        color: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 2,
        backgroundColor: '#333333',
        borderRadius: 100,
        fontWeight: 'bold',
    },


})