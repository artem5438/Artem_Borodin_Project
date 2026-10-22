import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
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
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={characters}
          keyExtractor={(item: ICharacter) => String(item.id)}
          renderItem={({ item }: { item: ICharacter }) => <CharacterCard character={item} />}
          refreshing={refreshing}
          onRefresh={loadCharacters}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;