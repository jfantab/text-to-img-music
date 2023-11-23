import * as React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Audio } from "expo-av";

// your iPhone needs to have the ringer on in order to hear the audio

export default function AudioContainer({ path }) {
    const [sound, setSound] = React.useState();

    async function playSound() {
        console.log("Loading Sound");
        const { sound, status } = await Audio.Sound.createAsync(path);
        setSound(sound);

        console.log("Playing Sound");
        await sound.playAsync();
    }

    React.useEffect(() => {
        return sound
            ? () => {
                  console.log("Unloading Sound");
                  sound.unloadAsync();
              }
            : undefined;
    }, [sound]);

    return (
        <View style={styles.container}>
            <Text>AudioContainer</Text>
            {/* <CustomButton title="Play sound" action={playSound} /> */}
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
