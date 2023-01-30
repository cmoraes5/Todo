import { Alert, FlatList, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { button } from "../../components/Input/styles";

import { Counts } from "../../components/Counts";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { Tasks } from "../../components/Tasks";
import { Empty } from "../../components/Empty";
import { Marked } from "../../components/Marked";

export function Home() {
    // Styles

    const [tasks, setTasks] = useState<string[]>([]);
    const [tasksMarked, setTaskMarked] = useState<any[]>([Marked]);
    const [taskDesc, setTaskDesc] = useState('');
    const [mark, setMark] = useState(false);

    function handleMark() {
        setMark(mark)
        if (mark == true) {
            setMark(false);
            console.log('Marcado = ', mark) //==> Mark boolean
            console.log('Task = ', tasks) //==> All tasks
            console.log('Tasks Marked = ', tasksMarked) //==> All tasks
            setTaskMarked(prevState => [...prevState, tasksMarked]);
        }
        else{+
            setMark(true);
            console.log('Marcado = ', mark)
        }
    }


    function handleAddTask() {
        if (taskDesc == '') {
            return Alert.alert('Campo vazio', 'Crie uma tarefa primeiro')
        }

        setTasks(prevState => [...prevState, taskDesc]);
        setTaskDesc('');
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

                    <TouchableOpacity style={button.button} onPress={handleAddTask}>
                        <Ionicons name="add-circle-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Counts 
                    totalTasks={tasks.length}
                    tasksDone={tasks.length}
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
                        onMark={() => handleMark()}

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