import { ICharacter } from "./character";

export interface ResultCharacters {
    info: {
      count: number;
      pages: number;
      next: string;
      prev: string;
    };
    results: ICharacter[];
  }