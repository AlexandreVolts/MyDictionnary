import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./HomeStack"
import OptionsStack from "./OptionsStack"

const screens = {
	Home: {
		screen: HomeStack
	},
	Options: {
		screen: OptionsStack
	}
};
const RootNavigator = createDrawerNavigator(screens);

export default createAppContainer(RootNavigator);