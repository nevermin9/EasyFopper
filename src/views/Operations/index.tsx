import React from "react";
import { Text, ScrollView } from "react-native";

// @ts-ignore
export default function Operations({ route }) {
    return (
        <ScrollView>
            <Text>
                This is Operations page { JSON.stringify(route) }
            </Text>
            <Text>
                Do you know how am i feel?
            </Text>
        </ScrollView>
    );
}