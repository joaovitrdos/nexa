import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import icons from "../../theme/icons";

export default function Empty(){
    return(
        <View style={styles.container}>

                <Image source={icons.empty} style={styles.img}/>

            <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.textRegular}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}