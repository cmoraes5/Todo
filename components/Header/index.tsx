import { Text, View } from "react-native";
import Logo from '../../assets/svg/Logo.svg'
import { styles } from "./styles";


export function Header(){
    return(
        <View style={styles.container}>
            <Logo/>
        </View>
    )
}