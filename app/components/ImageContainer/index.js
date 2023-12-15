import React, { useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import * as FileSystem from "expo-file-system";

export default function ImageContainer({ path }) {
    const filePath = `${FileSystem.cacheDirectory}${path}`;
    return <Image style={styles.img} source={{ uri: filePath }} />;
}

const styles = StyleSheet.create({
    img: {
        width: 300,
        height: 300,
    },
});
