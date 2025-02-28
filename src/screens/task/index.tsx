import { View, Text, TouchableOpacity, FlatList, Alert, TextInput } from "react-native";
import { styles } from "./styles";
import HeaderTask from "../../components/headertask/index";
import Tasks from "../..//components/tasks";
import { useRef, useState, useEffect } from "react";
import { TaskDTO } from "../../dtos/TaskSTO";
import Empty from "../../components/Empty";
import { uuid } from "../../utils/uuid";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeTask() {

    const [tasks, setTasks] = useState<TaskDTO[]>([])
    const [newTask, setNewTask] = useState("")
    const newTasksInputRef = useRef<TextInput>(null)

    // Carregar as tasks do AsyncStorage quando o app abrir
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem("tasks");
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error("Erro ao carregar as tarefas:", error);
      }
    };
    loadTasks();
  }, []);

  // Salvar as tasks no AsyncStorage sempre que a lista mudar
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
      } catch (error) {
        console.error("Erro ao salvar as tarefas:", error);
      }
    };
    saveTasks();
  }, [tasks]);

    function handleTaskAdd() {
        if (newTask !== '' && newTask.length >= 5) {
            setTasks((tasks) => [...tasks, { id: uuid(), isCompleted: false, title: newTask.trim() }])

            setNewTask('')

            newTasksInputRef.current?.blur

        }
    }

    function handleTaskDone(id: string) {
        setTasks((tasks) =>
            tasks.map((tasks) => {
                tasks.id === id ? (tasks.isCompleted = !tasks.isCompleted) : null
                return tasks
            }),
        )
    }

    function handleTaskDeleted(id: string) {
        Alert.alert('Excluir tarefa', 'Desejar excluir essa tarefa?', [
            {
                text: 'Sim',
                style: 'default',
                onPress: () =>
                    setTasks((tasks) => tasks.filter((task) => task.id !== id)),
            },
            {
                text: 'Não',
                style: 'cancel',
            },
        ])
    }

    const totalTasksCreated = tasks.length
    const totalTasksCompleted = tasks.filter(
        ({ isCompleted }) => isCompleted,).length


    return (
        <View style={styles.container}>
            <HeaderTask task={newTask}
                onChangeText={setNewTask}
                onPress={handleTaskAdd}
                inputRef={newTasksInputRef}
            />
            <View style={styles.tasksContainer}>
                <View style={styles.info}>
                    <View style={styles.row}>
                        <Text style={styles.tasksCreated}>Criadas</Text>
                        <View style={styles.countContainer}>
                            <Text style={styles.countText}>{totalTasksCreated}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.tasksDone}>Concluidas</Text>
                        <View style={styles.countContainer}>
                            <Text style={styles.countText}>{totalTasksCompleted}</Text>
                        </View>
                    </View>
                </View>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={tasks}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                    (<Tasks
                        key={item.id}
                        onTaskDone={() => handleTaskDone(item.id)}
                        onTaskDelete={() => handleTaskDeleted(item.id)}
                        {...item}
                    />

                    )}
                    ListEmptyComponent={<Empty />}
                />
            </View>
        </View>
    )
}