import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageContainer from "@components/ImageContainer";
import AudioContainer from "@components/AudioContainer";

export default function ResultScreen() {
    const PREFIX = "../../assets/";

    const imgPath = `${PREFIX}img/dog.jpeg`;
    const audioPath = `${PREFIX}audio/dog.wav`;

    return (
        <View style={styles.container}>
            <Text>This is results</Text>
            <ImageContainer path={require("./" + imgPath)} />
            <AudioContainer path={require("./" + audioPath)} />
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
