import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../src/Home";
import Options from "../src/Options";
import WordDetails from "../src/WordDetails";

const screens = {
	Home: {
		screen: Home
	},
	Options: {
		screen: Options
	},
	WordDetails: {
		screen: WordDetails
	}
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);