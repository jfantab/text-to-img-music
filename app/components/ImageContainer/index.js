import { View, StyleSheet, Text, Image } from "react-native";

export default function ImageContainer({ path }) {
    return (
        <View>
            <Text>ImageContainer</Text>
            <Image style={styles.img} source={path} />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        marginTop: "5%",
        width: 300,
        height: 300,
    },
});
