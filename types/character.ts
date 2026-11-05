export interface ICharacter {
  id: number;
  name: string;
  status: string;
  image: string;
  species: string;
  gender: string;
  origin: {
      name: string;
  };
  location: {
      name: string;
  };
}