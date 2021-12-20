import React from "react";
import views from "./src/views";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
    const v = [];

    for (let i = 0; i < views.length; i++) {
        v.push(
            <Stack.Screen
                key={i}
                name={views[i].name}
                component={views[i].component}
                options={views[i].options}
            />
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                { v }
            </Stack.Navigator>
        </NavigationContainer>
    );
}
