import React from "react";
import { View, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function WordDetails({ route, navigation })
{
	const onSave = () =>
	{
		navigation.goBack();
	};
	
	return (
		<View style={globalStyles.container}>
			<TextInput placeholder="translation" style={globalStyles.input}>
				{ route.params.translation }
			</TextInput>
			<TextInput placeholder="transcription" style={globalStyles.input}>
				{ route.params.transcription }
			</TextInput>
			<TextInput placeholder="meaning" style={globalStyles.input}>
				{ route.params.meaning }
			</TextInput>
			<Button title="Save" onPress={onSave} />
		</View>
	);
}