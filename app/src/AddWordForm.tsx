import React from "react";
import { TextInput, View } from "react-native";
import { Formik } from "formik";
import { globalStyles } from "../styles/global";
import StandardButton from "../shared/StandardButton";

export default function AddWordForm()
{
	const onSubmit = (word) =>
	{

	};
	const render = (props) =>
	{
		return (
			<View>
				<TextInput
					placeholder="Translation"
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
				<StandardButton title="Save" onPress={props.handleSubmit} />
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