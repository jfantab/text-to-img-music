import { StyleSheet, Image } from "react-native";

export default function ImageContainer({ path }) {
    return <Image style={styles.img} source={{ uri: path }} />;
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
    },
});
