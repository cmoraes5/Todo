import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Empty(){
    return(
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={require('../../assets/img/Clipboard.png')}
            />

            <View style={styles.text}>
                <Text style={styles.defaultText}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.strongText}>Crie tarefas e organize seus itens a fazer</Text>
            </View>

        </View>
    )
}  