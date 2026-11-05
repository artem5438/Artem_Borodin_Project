import axios from "axios";
import { useEffect, useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import { ICharacter } from "../types/character";

type CharacterRoute = RouteProp<{ Character: { id: number } }, "Character">;

export const CharacterScreen = () => {
    const route = useRoute<CharacterRoute>();
    const [character, setCharacter] = useState<ICharacter | null>(null);

    const loadCharacter = () => {
        axios.get<ICharacter>('https://rickandmortyapi.com/api/character/' + route.params.id).then(result => {
            setCharacter(result.data);
        });
    };

    useEffect(() => {
        loadCharacter();
    }, []);

    return (
        <View style={styles.container}>
            <Image source={{ uri: character?.image }} style={styles.image} />
            <Text style={styles.name}>{character?.name}</Text>
            <Text style={styles.text}>Статус: {character?.status}</Text>
            <Text style={styles.text}>Вид: {character?.species}</Text>
            <Text style={styles.text}>Пол: {character?.gender}</Text>
            <Text style={styles.text}>Происхождение: {character?.origin?.name}</Text>
            <Text style={styles.text}>Местоположение: {character?.location?.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 40,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 16,
        marginBottom: 8,
    },
    text: {
        fontSize: 16,
        marginTop: 4,
    },
});