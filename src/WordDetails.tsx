import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { globalStyles } from "../styles/global";

export default function WordDetails({ navigation })
{
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.translation}>Translation: </Text>
			<TextInput style={styles.input}>{ navigation.getParam("translation") }</TextInput>
			<Text style={globalStyles.translation}>Transcription: </Text>
			<TextInput style={styles.input}>{ navigation.getParam("transcription") }</TextInput>
			<Text style={globalStyles.translation}>Translation: </Text>
			<TextInput style={styles.input}>{ navigation.getParam("meaning") }</TextInput>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: "gray",
		padding: 5,
		color: "lightgray",
		fontSize: 18
	}
});