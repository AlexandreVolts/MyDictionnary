import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global"

export default function WordContainer({ word })
{
	return (
		<View style={styles.container}>
			<View style={styles.containerContent}>
				<Text style={globalStyles.text}>{ word.translation } [ {word.transcription} ]</Text>
				<Text style={styles.meaning}>{ word.meaning } </Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 5,
		marginVertical: 2,
		borderBottomWidth: 1,
		borderLeftWidth: 1,
		borderColor: "gray"
	},
	containerContent: {
		paddingHorizontal: 8,
		paddingVertical: 5
	},
	meaning: {
		color: "lightgray",
		fontSize: 18
	}
});