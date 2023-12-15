import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import ImageContainer from "@components/ImageContainer";
import AudioContainer from "@components/AudioContainer";

export default function ResultScreen({ route }) {
    const imgPath = "downloadedImage.png";
    const audioPath = "downloadedAudio.wav";
    const ttsPath = "downloadedTTS.wav";

    return (
        <View style={styles.container}>
            <ImageContainer path={imgPath} />
            <AudioContainer title="Play music" fileName={audioPath} />
            <AudioContainer title="Play TTS" fileName={ttsPath} />
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
