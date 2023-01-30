import { Image, Text, View } from "react-native";
import Clipboard from '../../assets/svg/Clipboard.svg'
import { styles } from "./styles";

export function Empty(){
    return(
        <View style={styles.container}>
            <Clipboard 
                style={styles.clipboard}
            />

            <View style={styles.text}>
                <Text style={styles.defaultText}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.strongText}>Crie tarefas e organize seus itens a fazer</Text>
            </View>

        </View>
    )
}  