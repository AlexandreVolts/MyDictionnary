import React from "react";
import { View, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";
import HttpRequest from "../shared/HttpRequest";
import StandardButton from "../shared/StandardButton";

export default function WordDetails({ route, navigation })
{
	const onSave = () =>
	{
		HttpRequest.request("/", "GET").then((res) => {
			console.log(res);
		});
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
			<StandardButton title="Save word" onPress={onSave} />
		</View>
	);
}