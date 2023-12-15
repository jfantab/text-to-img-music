import React from "react";
import * as FileSystem from "expo-file-system";
import { StyleSheet, Text, View } from "react-native";
import TextContainer from "@components/TextContainer";
import CustomButton from "@components/CustomButton";

export default function HomeScreen({ navigation }) {
    const [text, setText] = React.useState("");

    // image
    const URL1 = "https://ed97-35-230-28-197.ngrok-free.app/";

    // music
    const URL2 = "https://f9a4-35-225-228-134.ngrok-free.app/";

    // TTS
    const URL3 = "https://6f68-35-237-84-169.ngrok-free.app/";

    const prompt = text;

    const url1 = encodeURI(URL1 + "/generate/?prompt=" + prompt);
    const url2 = encodeURI(URL2 + "/generatemusic/?audio_prompt=" + prompt);
    const url3 = encodeURI(URL3 + "/text2voice/?prompt=" + prompt);

    const action = async () => {
        console.log("Button pressed");

        const responses = await Promise.all(
            [url1, url2, url3].map((url) => fetch(url))
        );

        const blob_responses = await Promise.all(
            responses.map((response) => response.blob())
        );

        const downloadPromises = blob_responses.map((blob, index) => {
            switch (index) {
                case 0:
                    return saveImage(blob);
                case 1:
                    return saveAudio(blob, "audio");
                case 2:
                    return saveAudio(blob, "tts");
                default:
                    return Promise.resolve();
            }
        });

        await Promise.all(downloadPromises);

        navigation.navigate("Results");
    };

    const saveImage = async (blob) => {
        console.log("Saving image");
        const reader = new FileReader();
        reader.onload = async () => {
            const base64data = reader.result.split(",")[1];
            const fileName = `downloadedImage.png`;
            const filePath = `${FileSystem.cacheDirectory}${fileName}`;

            try {
                await FileSystem.writeAsStringAsync(filePath, base64data, {
                    encoding: FileSystem.EncodingType.Base64,
                });
                console.log(`Image saved to ${filePath}`);
            } catch (error) {
                console.error("Error saving the image:", error);
            }
        };
        reader.onerror = (e) => {
            throw new Error(`FileReader error: ${e}`);
        };
        reader.readAsDataURL(blob);
    };

    const saveAudio = async (blob, name) => {
        console.log("Saving audio");
        const reader = new FileReader();
        reader.onload = async () => {
            const base64data = reader.result.split(",")[1];
            let fileName = "";
            if (name == "audio") fileName = "downloadedAudio.wav";
            else fileName = "downloadedTTS.wav";
            const filePath = `${FileSystem.documentDirectory}${fileName}`;

            try {
                await FileSystem.writeAsStringAsync(filePath, base64data, {
                    encoding: FileSystem.EncodingType.Base64,
                });
                console.log(`Audio saved to ${filePath}`);
            } catch (error) {
                console.error("Error saving the image:", error);
            }
        };
        reader.onerror = (e) => {
            throw new Error(`FileReader error: ${e}`);
        };
        reader.readAsDataURL(blob);
    };

    const getTextChange = (text) => {
        setText(text);
    };

    return (
        <View style={styles.container}>
            <Text>This is Home</Text>
            <TextContainer getTextChange={getTextChange} />
            <CustomButton title="Submit" action={action} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingBottom: 80,
    },
});
