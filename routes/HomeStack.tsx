import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../src/Home";
import Options from "../src/Options";

const screens = {
	Home: {
		screen: Home
	},
	Options: {
		screen: Options
	}
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);