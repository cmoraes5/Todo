import { Alert, FlatList, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { button } from "../../components/Input/styles";

import { Counts } from "../../components/Counts";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { Tasks } from "../../components/Tasks";
import { Empty } from "../../components/Empty";

interface Props {
    onMark?: any;
}


export function Home({onMark} : Props) {
    // Styles

    const [tasks, setTasks] = useState<string[]>([]);
    const [tasksMarked, setTaskMarked] = useState<any[]>([]);
    const [taskDesc, setTaskDesc] = useState('');

    function handleAddTask() {
        if (taskDesc == '') {
            return Alert.alert('Campo vazio', 'Crie uma tarefa primeiro')
        }

        else if (tasks.includes(taskDesc)) {
            return Alert.alert('Tarefa repetida', 'Crie uma tarefa diferente')
        }

        setTasks(prevState => [...prevState, taskDesc]);
        setTaskDesc('');
    }

    function handleMark() {

    }


    function handleTaskRemove(task: string) {
        Alert.alert('Remover', `Remover a tarefa ${task}?`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(Task => Task !== task)),
            },
            {
                text: 'Não',
                style: 'cancel'
            },
        ])
    }

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.createTask}>
                <View style={button.container}>
                    <TextInput style={button.input}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor='#808080'
                        onChangeText={setTaskDesc}
                        value={taskDesc}
                        autoFocus
                    />

                    <TouchableOpacity
                        style={button.button}
                        onPress={handleAddTask}
                        activeOpacity={0.7}
                    >
                        <Ionicons name="add-circle-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Counts
                    totalTasks={tasks.length}
                    tasksDone={tasksMarked.length}
                />
            </View>

            <FlatList
                style={styles.flatList}
                data={tasks}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Tasks
                        key={item}
                        task={item}
                        onRemove={() => handleTaskRemove(item)}
                        // onMark={handleMark(false)}

                    //  Create an function wich use the Hook to defines the state of Task,

                    //  If TaskMarked = true{

                    //     change style and Dispare an function wich 
                    //      tell everybody that this tasked is marked

                    //  else {

                    //     set to default style and
                    //     Dispare an function wich 
                    //     tell everybody that this tasked is unmarked

                    //  }
                    //}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Empty />
                )}
            />

        </View>
    )
}