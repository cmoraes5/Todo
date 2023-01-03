import { Text, TextInput, View, } from "react-native";
import { styles } from "./styles";

type Props = {
    totalTasks: any;
    tasksDone: any;
}

export function Counts({totalTasks, tasksDone}: Props){
    return(
        <View style={styles.container}>
            <View style={styles.labels}>
                <Text style={styles.textCriadas}>Criadas</Text>

                <Text style={styles.input}>
                    {totalTasks}
                </Text>
            </View>
            <View style={styles.labels}>
                <Text style={styles.textConluidas}>Concluídas</Text>

                <Text style={styles.input}>
                    {tasksDone}
                </Text>
            </View>
        </View>
    )
}