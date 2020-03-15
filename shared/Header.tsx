import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


export default function Header({ navigation })
{
	const openMenu = () => {
		navigation.openDrawer();
	};
	
	return (
		<View style={styles.header}>
			<MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
			<View>
				<Text style={styles.headerText}>MyDictionnary</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		paddingTop: 20,
		backgroundColor: "#333",
		width: "100%",
		height: 75,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},
	headerText: {
		fontWeight: "bold",
		fontSize: 20,
		letterSpacing: 1,
		color: "white",
	},
	icon: {
		color: "white",
		position: "absolute",
		left: 16,
		top: 33
	}
});