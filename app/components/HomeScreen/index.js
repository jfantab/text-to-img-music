import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TextContainer from "@components/TextContainer";
import CustomButton from "@components/CustomButton";

export default function HomeScreen({ navigation }) {
    const action = () => {
        navigation.navigate("Results");
    };

    return (
        <View style={styles.container}>
            <Text>This is Home</Text>
            <TextContainer />
            <CustomButton title="Submit" action={action} />
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
