import React from "react";
import { TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { globalStyles } from "../styles/global";
import StandardButton from "../shared/StandardButton";

export default function LoginUser({ navigation })
{
	const onNotAccountPressed = () =>
	{
		navigation.push("Register");
	}
	const onSubmit = (user) =>
	{

	};
	const render = (props) =>
	{
		return (
			<View style={globalStyles.form}>
				<TextInput
					placeholder="Email"
					onChangeText={props.handleChange("email")}
					style={globalStyles.input}
					keyboardType="email-address"
				>
					{props.values.email}
				</TextInput>
				<TextInput
					placeholder="Password"
					onChangeText={props.handleChange("password")}
					style={globalStyles.input}
				>
					{props.values.password}
				</TextInput>
				<StandardButton title="Sign in!" onPress={props.handleSubmit} />
				<Text onPress={onNotAccountPressed} style={globalStyles.link}>Or create an account...</Text>
			</View>
		);
	};
	
	return (
		<View style={globalStyles.container}>
			<Formik
				initialValues={{ email: "", password: "", passwordVerification: ""}}
				onSubmit={onSubmit}
			>
				{render}
			</Formik>
		</View>
	);
}