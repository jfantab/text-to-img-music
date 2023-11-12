import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
    const [text, onChangeText] = React.useState(
        "Lorem ipsum dolor sit amet..."
    );

    return (
        <View style={styles.container}>
            <Text>Enter in the text below!</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 80,
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 5,
    },
});
