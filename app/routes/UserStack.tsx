import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginUser from "../src/LoginUser";
import RegisterUser from "../src/RegisterUser";

const Stack = createStackNavigator();

export default function UserStack()
{
	let headerOptions = {
		headerShown: false
	};
	
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={LoginUser} options={headerOptions}/>
			<Stack.Screen name="Register" component={RegisterUser} options={headerOptions} />
		</Stack.Navigator>
	);
};