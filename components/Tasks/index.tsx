import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import { Ionicons, Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import { styles } from "./styles";

type Props = {
    task:  string;
    onRemove: () => void;
    onMark?: boolean;
}

export function Tasks({ task, onRemove, onMark}: Props) {
    const [mark, setMark] = useState(false);


    function handleMark() {
        setMark(mark)
        if (mark == false) {
            setMark(true);
            onMark = false
            console.log('Marcado = ', mark)
        }
        else {
            setMark(false);
            onMark = true
            console.log('Marcado = ', mark)
        }
    }


    // Contar
    // Marcar -- CHECK
    // Editar -- No More
    // Repetir tarefas 

    return (
        <>
            {

                mark === true ?
                    (

                        <View style={styles.containerMarked}>
                            <Pressable style={styles.check} onPress={handleMark}>
                                <View style={styles.circle} />
                                <AntDesign name="checkcircle" size={24} color="#5E60CE" />
                            </Pressable>

                            <Text style={styles.taskMarked}>
                                {task}
                            </Text>

                            <Pressable onPress={onRemove}>
                                <Ionicons name="trash-outline" size={24} color="#808080" />
                            </Pressable>
                        </View>
                    )
                    :
                    (
                        <View style={styles.container}>
                            <Pressable
                                onPress={handleMark}>
                                <Entypo name="circle" size={24} color="#4EA8DE" />
                            </Pressable>

                            <Text style={styles.taskUnMarked}>
                                {task}
                            </Text>

                            <Pressable onPress={onRemove}>
                                <Ionicons name="trash-outline" size={24} color="#808080" />
                            </Pressable>
                        </View>
                    )
            }


        </>
    )
}