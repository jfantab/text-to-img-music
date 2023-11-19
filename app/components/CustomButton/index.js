import React from "react";
import { Button } from "react-native";

export default function CustomButton({ title, action }) {
    return <Button onPress={action} title={title} color=""></Button>;
}
