import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack"
import OptionsStack from "./OptionsStack"

const Drawer = createDrawerNavigator();

export default function RootNavigator()
{
	return (
		<NavigationContainer>
			<Drawer.Navigator drawerStyle={styles.drawer}>
				<Drawer.Screen name="Home" component={HomeStack} />
				<Drawer.Screen name="Options" component={OptionsStack} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	drawer: {}
});