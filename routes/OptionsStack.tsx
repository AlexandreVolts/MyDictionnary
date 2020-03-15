import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Options from "../src/Options";
import Header from "../shared/Header";

const screens = {
	Options: {
		screen: Options,
		navigationOptions: ({ navigation }) => {
			return ({
				headerTitle: () => <Header navigation={navigation} />
			});
		},
	},
};

const OptionsStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerTintColor: "#555",
		headerTitleAlign: "center",
		headerStyle: {
			backgroundColor: "#333",
		}
	}
});

export default OptionsStack;