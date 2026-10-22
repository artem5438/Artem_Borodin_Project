import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView, } from "react-native-safe-area-context";
import { ICharacter } from "./types/character";
import { CharacterCard } from "./components/CharacterCard/CharacterCard";

interface ResultCharacters {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: ICharacter[];
}

function App() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    axios.get<ResultCharacters>('https://rickandmortyapi.com/api/character').then(result => {
      setCharacters(result.data.results);
    });
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          {characters.map((character) => (
            <CharacterCard character={character} />
            ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "red",
    fontSize: 32,
  },
});

export default App;