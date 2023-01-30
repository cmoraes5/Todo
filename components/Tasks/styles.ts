import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#262626',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 8,
        height: 64,
        borderWidth: 1,
        borderColor: '#333333',
    },

    containerMarked: {
        marginHorizontal: 24,
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#262626',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 8,
        height: 64,
        borderWidth: 1,
        borderColor: 'transparent',
    },

    check: {
        justifyContent: 'center',
        alignItems: "center",
    },

    circle: {
        backgroundColor: '#fff',
        width: 20,
        height: 20,
        borderRadius: 100,
        position: "absolute",
    },

    taskUnMarked: {
        color: '#F2F2F2',
        width: 235,
        flex: 1,
        marginHorizontal: 12,
    },

    taskMarked: {
        color: '#808080',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        width: 235,
        flex: 1,
        marginHorizontal: 12,
    },

})