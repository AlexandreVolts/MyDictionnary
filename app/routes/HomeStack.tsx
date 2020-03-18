import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../src/Home";
import Options from "../src/Options";
import WordDetails from "../src/WordDetails";
import Header from "../shared/Header";

const screens = {
	Home: {
		screen: Home,
		navigationOptions: ({ navigation }) => {
			return ({
				header: () => <Header navigation={navigation} />
			});
		},
	},
	WordDetails: {
		screen: WordDetails,
	},
	Options: {
		screen: Options
	}
};

const HomeStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerTintColor: "#555",
		headerStyle: {
			backgroundColor: "#333"
		},
		headerTitleStyle: {
			color: "white"
		}
	}
});

export default HomeStack;