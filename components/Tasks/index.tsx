import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import { Ionicons, Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import { styles } from "./styles";

type Props = {
    task: string;
    onRemove: () => void;
    onMark: any;
}

export function Tasks({ task, onRemove, onMark}: Props) {
    const [mark, setMark] = useState(false);

    // Contar
    // Marcar
    // Editar
    // Repetir tarefas

    return (
        <View style={styles.container}>

            <Pressable onPress={onMark}>
                <Entypo name="circle" size={24} color="#4EA8DE" />
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