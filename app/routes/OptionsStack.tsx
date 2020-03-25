import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Options from "../src/Options";

const Stack = createStackNavigator();

export default function OptionsStack() {
	const headerOptions = {
		headerTintColor: "#555",
		headerStyle: {
			backgroundColor: "#333"
		},
		headerTitleStyle: {
			color: "white"
		}
	};

	return (
		<Stack.Navigator>
			<Stack.Screen name="Options" component={Options} options={headerOptions} />
		</Stack.Navigator>
	);
};