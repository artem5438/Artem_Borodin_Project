import axios from "axios";
import { useState, useEffect } from "react";
import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import { ICharacter } from "../types/character";
import { ResultCharacters } from "../types/request";
import { CharacterCard } from "../components/CharacterCard/CharacterCard";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
    const navigation = useNavigation();
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [refreshing, setRefreshing] = useState(false);

  const loadCharacters = () => {
    setRefreshing(true);
    axios.get<ResultCharacters>('https://rickandmortyapi.com/api/character').then(result => {
      setCharacters(result.data.results);
      setRefreshing(false);
    });
  };
  useEffect(() => {
    loadCharacters();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Character', { id: item.id })}>
            <CharacterCard character={item} />
          </TouchableOpacity>
        )}
        refreshing={refreshing}
        onRefresh={loadCharacters}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingInline: 24,
        paddingBlock: 40,
        gap: 12,
    },
})