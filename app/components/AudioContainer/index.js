import * as React from "react";
import * as FileSystem from "expo-file-system";
import { View, StyleSheet, Text, Button } from "react-native";
import { Audio } from "expo-av";

export default function AudioContainer({ title, fileName }) {
    const [sound, setSound] = React.useState();

    async function setAudioMode() {
        try {
            await Audio.setAudioModeAsync({
                playsInSilentModeIOS: true,
            });
            console.log("Audio mode set to play in silent mode on iOS.");
        } catch (e) {
            console.log("Failed to set audio mode", e);
        }
    }

    const playSound = async () => {
        try {
            console.log("Loading Sound");
            const { sound } = await Audio.Sound.createAsync({
                uri: `${FileSystem.documentDirectory}${fileName}`,
            });
            await sound.setVolumeAsync(1);
            setSound(sound);
            console.log("Playing Sound");
            await sound.playAsync();
        } catch (error) {
            console.error("Error loading or playing sound:", error);
        }
    };

    React.useEffect(() => {
        setAudioMode();

        return sound
            ? () => {
                  console.log("Unloading Sound");
                  sound.unloadAsync();
              }
            : undefined;
    }, [sound]);

    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <Button title="Play sound" onPress={playSound} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "5%",
    },
});
