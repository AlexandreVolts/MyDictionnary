import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { globalStyles } from "../styles/global";

export default function WordDetails({ navigation })
{
	return (
		<View style={globalStyles.container}>
			<TextInput placeholder="translation" style={styles.input}>{ navigation.getParam("translation") }</TextInput>
			<TextInput placeholder="transcription" style={styles.input}>{ navigation.getParam("transcription") }</TextInput>
			<TextInput placeholder="meaning" style={styles.input}>{ navigation.getParam("meaning") }</TextInput>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		marginHorizontal: 20,
		marginVertical: 10,
		padding: 10,
		backgroundColor: "#555",
		color: "white",
		fontSize: 20
	}
});