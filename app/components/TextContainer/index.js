import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default function TextContainer({ getTextChange }) {
    return (
        <View style={styles.container}>
            <Text>Enter in the text below!</Text>
            <TextInput style={styles.input} onChangeText={getTextChange} />
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
        height: 400,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 5,
    },
});
