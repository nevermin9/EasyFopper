import React from "react";
import { Text, Button, ScrollView } from "react-native";

// @ts-ignore
export default function Home({ navigation }) {
    return (
        <ScrollView>
            <Text>
                This is Home view
            </Text>

            <Button
                title="Operations"
                onPress={ () => navigation.navigate("Operations", { name: "Anton "}) }
            />

            <Button
                title="Auth"
                onPress={ () => navigation.navigate("Auth") }
            />
        </ScrollView>
    )
}