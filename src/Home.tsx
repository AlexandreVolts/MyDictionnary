import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation })
{
	const [words, setWords] = useState([
		{ id: "0", translation: "esti", transcription: "esti", meaning: "to be", categories: ["intransitive verb"] },
		{ id: "1", translation: "havi", transcription: "havi", meaning: "to have", categories: ["transitive verb"] },
		{ id: "2", translation: "pomo", transcription: "pomo", meaning: "apple", categories: ["fruits", "food"] }
	]);

	const wordListRenderer = (word) => {
		return (
			<TouchableOpacity onPress={() => navigation.push("WordDetails", word)}>
				<Text style={globalStyles.translation}>{ word.translation } [ {word.transcription} ]</Text>
				<Text style={globalStyles.meaning}>{ word.meaning } </Text>
			</TouchableOpacity>
		);
	};
	
	return (
		<View style={globalStyles.container}>
			<FlatList 
				data={words}
				keyExtractor={(word) => word.id}
				renderItem={({ item }) => wordListRenderer(item)}
			/>
		</View>
	);
}