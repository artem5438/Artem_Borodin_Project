import { View, Text, Image } from 'react-native';
import { ICharacter } from '../../types/character';

export const CharacterCard = ({character}: {character: ICharacter}) => {
  return (
    <View style={{ borderWidth: 5, borderRadius: 10, padding: 16 }}>
      <Text style={{ fontSize: 32 }}>{character.name}</Text>
      <Text>{character.status}</Text>
      <Image
        style={{ width: 300, height: 300 }}
        source={{ uri: character.image }}
      />
    </View>
  );
};