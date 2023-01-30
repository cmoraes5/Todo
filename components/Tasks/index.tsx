import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import { Ionicons, Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import { styles } from "./styles";

type Props = {
    task: string;
    onRemove: () => void;
    onMark?: boolean;
}

export function Tasks({ task, onRemove, onMark }: Props) {
    const [mark, setMark] = useState(false);
    const [tasksMarked, setTaskMarked] = useState<any[]>([]);



    function handleMark() {
        setMark(mark)
        if (mark == false) {
            setMark(true);
            setTaskMarked(prevState => [...prevState, mark]);
            console.log('Marcado = ', mark)
        }
        else {
            setMark(false);
            onMark = true
            setTaskMarked(prevState => prevState.filter(Task => Task !== task)),
            console.log('Marcado = ', mark)
        }
    }


    // Contar
    // Marcar -- CHECK
    // Editar -- No More
    // Repetir tarefas -- Check/No more


    return (
        <>
            {

                mark === true ?
                    (

                        <View style={styles.containerMarked}>
                            <Pressable style={styles.toggle} onPress={handleMark}>
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
                                style={styles.toggle}
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