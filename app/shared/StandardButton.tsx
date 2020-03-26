import React from "react";
import { Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function StandardButton({ title, onPress })
{
	return (
		<Button title={title} onPress={onPress} color={globalStyles.button.backgroundColor} />
	);
}