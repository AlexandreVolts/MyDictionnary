import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./HomeStack"
import OptionsStack from "./OptionsStack"

const RootNavigator = createDrawerNavigator({
	Home: {
		screen: HomeStack
	},
	Options: {
		screen: OptionsStack
	}
});

export default createAppContainer(RootNavigator);