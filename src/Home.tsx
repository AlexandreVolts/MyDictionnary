import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import WordContainer from "../shared/WordContainer";

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
				<WordContainer word={word} />
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