import React from "react";
import { Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { globalStyles } from "../styles/global";

export default function RegisterUser()
{
	const onSubmit = (word) =>
	{

	};
	const render = (props) =>
	{
		return (
			<View>
				<Text>Register !</Text>
				<TextInput
					placeholder="Username"
					onChangeText={props.handleChange("translation")}
					style={globalStyles.input}
				>
					{props.values.translation}
				</TextInput>
				<TextInput
					placeholder="Transcription"
					onChangeText={props.handleChange("transcription")}
					style={globalStyles.input}
				>
					{props.values.transcription}
				</TextInput>
				<TextInput
					placeholder="Meaning"
					onChangeText={props.handleChange("meaning")}
					style={globalStyles.input}
				>
					{props.values.meaning}
				</TextInput>
				<Button title="Sign up" onPress={props.handleSubmit} color="lime" />
			</View>
		);
	};
	
	return (
		<View>
			<Formik
				initialValues={{ translation: "", transcription: "", meaning: ""}}
				onSubmit={onSubmit}
			>
				{render}
			</Formik>
		</View>
	);
}