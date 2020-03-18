import React from "react";
import { View, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function WordDetails({ navigation })
{
	const onSave = () =>
	{
		navigation.goBack();
	};
	
	return (
		<View style={globalStyles.container}>
			<TextInput placeholder="translation" style={globalStyles.input}>
				{ navigation.getParam("translation") }
			</TextInput>
			<TextInput placeholder="transcription" style={globalStyles.input}>
				{ navigation.getParam("transcription") }
			</TextInput>
			<TextInput placeholder="meaning" style={globalStyles.input}>
				{ navigation.getParam("meaning") }
			</TextInput>
			<Button title="Save" onPress={onSave} />
		</View>
	);
}