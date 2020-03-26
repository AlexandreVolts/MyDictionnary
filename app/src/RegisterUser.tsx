import React from "react";
import { TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { globalStyles } from "../styles/global";
import HttpRequest from "../shared/HttpRequest";
import StandardButton from "../shared/StandardButton";

export default function RegisterUser({ navigation })
{
	const onAlreadyAccountPressed = () =>
	{
		navigation.goBack();
	};
	const onSubmit = (user) =>
	{
		HttpRequest.request("/register", "POST", user).then((res) => {
			console.log(res);
		});
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
				<TextInput
					placeholder="Password Verification"
					onChangeText={props.handleChange("passwordVerification")}
					style={globalStyles.input}
				>
					{props.values.passwordVerification}
				</TextInput>
				<StandardButton title="Sign up" onPress={props.handleSubmit} />
				<Text onPress={onAlreadyAccountPressed} style={globalStyles.link}>I already have an account !</Text>
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