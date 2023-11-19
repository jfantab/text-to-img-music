import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageContainer from "@components/ImageContainer";

export default function ResultScreen() {
    return (
        <View style={styles.container}>
            <Text>This is results</Text>
            <ImageContainer path="../../assets/img/dog.jpeg" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
});
