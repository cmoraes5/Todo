import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";

type Props = {
    task: string;
    onRemove: () => void;
}

export function Marked({ task, onRemove}: Props) {
    const [mark, setMark] = useState(false);

    function handleMark() {
        setMark(mark)
        if (mark == false) {
            setMark(true);
            console.log('Marcado = ', mark)
        }
        else {
            setMark(false);
            console.log('Marcado = ', mark)
        }
    }

    // Contar
    // Marcar
    // Editar
    // Repetir tarefas

    return (
        <View style={styles.container}>

            <Pressable style={styles.check} onPress={handleMark}>
                <View style={styles.circle} />
                <AntDesign name="checkcircle" size={24} color="#5E60CE" />
            </Pressable>

            <Text style={styles.text}>
                {task}
            </Text>

            <Pressable onPress={onRemove}>
                <Ionicons name="trash-outline" size={24} color="#808080" />
            </Pressable>
        </View>
    )
}