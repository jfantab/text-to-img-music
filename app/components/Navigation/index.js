import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@components/HomeScreen";
import ResultScreen from "@components/ResultScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer initialRouteName="Home">
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Results" component={ResultScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
