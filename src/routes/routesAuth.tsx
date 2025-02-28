import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Config from "../screens/config";
import TabRoutes from "./tab.routes";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "../screens/profile";
import About from "../screens/about";

const Stack = createNativeStackNavigator();

export default function RoutesAuth() {
    return <NavigationContainer>

        <Stack.Navigator screenOptions={{
            animation: "slide_from_bottom",
            presentation: "transparentModal",
            freezeOnBlur: true, 
            lazy: false,
            animationEnabled: true,
        }}>

            <Stack.Screen name="tabroutes" component={TabRoutes} options={{
                headerShown: false
            }} />

           
            <Stack.Screen name="config" component={Config} options={{
                headerStyle: {
                    backgroundColor: "#171717",
                    
                },
                title: "Settings",
                headerTintColor: "#FFF",
            }} />

            <Stack.Screen name="profile" component={Profile} options={{
                headerStyle: {
                    backgroundColor: "#171717",
                    
                },
                title: "Profile",
                headerTintColor: "#FFF",
            }}
            />

        <Stack.Screen name="about" component={About} options={{
                headerStyle: {
                    backgroundColor: "#171717",
                    
                },
                title: "About",
                headerTintColor: "#FFF",
            }}
            />
        </Stack.Navigator>

    </NavigationContainer>
}
