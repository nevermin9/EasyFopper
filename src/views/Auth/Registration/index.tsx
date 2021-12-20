import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

export default function Registration() {
    const [ login, setLogin ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ repeatPassword, setRepeatPassword ] = useState("");

    return (
        <View style={{ padding: 16 }}>
            <TextInput
                style={{ height: 40 }}
                placeholder="Login"
                onChangeText={ login => setLogin(login) }
                defaultValue={login}
            />

            <TextInput
                style={{ height: 40 }}
                placeholder="Password"
                onChangeText={ pass => setPassword(pass) }
                defaultValue={password}
                secureTextEntry={true}
            />

            <TextInput
                style={{ height: 40 }}
                placeholder="Repeat password"
                onChangeText={ pass => setRepeatPassword(pass) }
                defaultValue={repeatPassword}
                secureTextEntry={true}
            />

            <Text>
                Your login is { login }
            </Text>
        </View>
    )
}