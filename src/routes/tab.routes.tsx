import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import Home from "../screens/home/index";
import Note from "../screens/note";
import HomeTask from "../screens/task";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    elevation: 0,
                    backgroundColor: "#171717",
                    position: "absolute",
                    bottom: 0,
                    height: 65,
                },
                tabBarIconStyle: {
                    marginBottom: 5,
                    marginTop: 5,
                },
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <View
                            style={{
                                backgroundColor: focused ? "#000" : "transparent",
                                borderRadius: 15,
                                width: focused ? 70 : 30, // Largura fixa
                                height: focused ? 35 : 30, // Altura fixa
                                alignItems: "center",
                                justifyContent: "center", // Borda arredondada
                            }}
                        >
                            <Feather
                                name="home"
                                color="#FFF" // Ícone branco quando ativo, cinza quando inativo
                                size={23}
                            />
                        </View>
                    ),
                    tabBarLabel: "Home",
                    tabBarLabelStyle: { fontSize: 16, color: "#FFF", fontWeight: "bold" },
                    
                }}
            />

            <Tab.Screen
                name="Note"
                component={Note}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <View
                            style={{
                                backgroundColor: focused ? "#000" : "transparent",
                                borderRadius: 15,
                                width: focused ? 70 : 30, // Largura fixa
                                height: focused ? 35 : 30, // Altura fixa
                                alignItems: "center",
                                justifyContent: "center", // Borda arredondada
                            }}
                        >
                            <Feather
                                name="file-text"
                                color={focused ? "#FFF" : "#CCC"} // Ícone branco quando ativo, cinza quando inativo
                                size={23}
                            />
                        </View>
                    ),
                    tabBarLabel: "Note",
                    tabBarLabelStyle: { fontSize: 16, color: "#FFF", fontWeight: "bold" },
                }}
            />

            <Tab.Screen
                name="Task"
                component={HomeTask}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <View
                            style={{
                                backgroundColor: focused ? "#000" : "transparent",
                                borderRadius: 15,
                                width: focused ? 70 : 30, // Largura fixa
                                height: focused ? 35 : 30, // Altura fixa
                                alignItems: "center",
                                justifyContent: "center", // Borda arredondada
                            }}
                        >
                            <FontAwesome5
                                name="tasks"
                                color={focused ? "#FFF" : "#CCC"} // Ícone branco quando ativo, cinza quando inativo
                                size={23}
                            />
                        </View>
                    ),
                    tabBarLabel: "Task",
                    tabBarLabelStyle: { fontSize: 16, color: "#FFF", fontWeight: "bold" },
                }}
            />
        </Tab.Navigator>
    );
}

