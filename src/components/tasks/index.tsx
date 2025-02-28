import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { theme } from "../../theme";
import { TaskDTO } from "../../dtos/TaskSTO";

type TaskProps = TaskDTO & {
    onTaskDone: (id: string) => void
    onTaskDelete: (id: string) => void
}

export default function Task({title, id, isCompleted, onTaskDone, onTaskDelete}: TaskProps){
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onTaskDone(id)}>
            <MaterialCommunityIcons
            name={isCompleted ? "checkbox-marked-circle-outline" :  "checkbox-blank-circle-outline"}
            size={24}
            color={theme.colors.WHITE}
            />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={isCompleted ? styles.textDone : styles.textCreated}>{title}</Text>
            </View>
            <TouchableOpacity onPress={() => onTaskDelete(id)}>
                <MaterialCommunityIcons
                name="trash-can-outline"
                size={24}
                color={theme.colors.WHITE}
                />
            </TouchableOpacity>
        </View>
    )
}