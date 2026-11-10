import axios from "axios";
import { useState, useEffect } from "react";
import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import { ICharacter } from "../types/character";
import { ResultCharacters } from "../types/request";
import { CharacterCard } from "../components/CharacterCard/CharacterCard";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type HomeNavigation = NavigationProp<{ Character: { id: number } }>;

export const HomeScreen = () => {
    const navigation = useNavigation<HomeNavigation>();
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
        renderItem={({ item }: { item: ICharacter }) => (
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