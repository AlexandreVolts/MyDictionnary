import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../src/Home";
import WordDetails from "../src/WordDetails";

const Stack = createStackNavigator();

export default function HomeStack()
{
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
			<Stack.Screen name="Home" component={Home} options={headerOptions} />
			<Stack.Screen name="WordDetails" component={WordDetails} options={headerOptions} />
		</Stack.Navigator>
	);
}