import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import IconButton from "../shared/IconButton";
import WordContainer from "../shared/WordContainer";

export default function Home({ navigation })
{
	const [isModalOpened, setModalOpen] = useState(false);
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
			<Modal visible={isModalOpened} animationType="slide">
				<View style={[globalStyles.container, styles.modal]}>
					<IconButton icon="close" onPress={() => setModalOpen(false)} />
					<Text>Hi</Text>
				</View>
			</Modal>

			<FlatList 
				data={words}
				keyExtractor={(word) => word.id}
				renderItem={({ item }) => wordListRenderer(item)}
			/>
			<IconButton icon="add" onPress={() => setModalOpen(true)} style={styles.addWordButton} />
		</View>
	);
}

const styles = StyleSheet.create({
	modal: {
		padding: 20
	},
	addWordButton: {
		margin: 20
	}
});