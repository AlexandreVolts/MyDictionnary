import React from "react";
import {Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

export default function IconButton({ onPress, icon, title = "", style = {} })
{
	return (
		<TouchableOpacity style={[styles.addWordButton, globalStyles.button, style]}>
			<MaterialIcons name={icon} size={28} onPress={onPress} />
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	addWordButton: {
		flexDirection: "row",
		alignSelf: "flex-start",
		padding: 10,
		borderRadius: 50
	},
	text: {

	}
});