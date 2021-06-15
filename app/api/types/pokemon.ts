export type PokemonObjectSimplified = {
  name: string;
  url: string;
};

export interface PokemonObjectFull {
  id: number;
  name: string;
  baseExperience: number;
  height: number;
  isDefault: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Species[];
  gameIndices: GameIndex[];
  heldItems: HeldItem[];
  locationAreaEncounters: string;
  moves: Move[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
}

export interface Ability {
  isHidden: boolean;
  slot: number;
  ability: Species;
}

export interface Species {
  name: string;
  url: string;
}

export interface GameIndex {
  gameIndex: number;
  version: Species;
}

export interface HeldItem {
  item: Species;
  versionDetails: VersionDetail[];
}

export interface VersionDetail {
  rarity: number;
  version: Species;
}

export interface Move {
  move: Species;
  versionGroupDetails: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  levelLearnedAt: number;
  versionGroup: Species;
  moveLearnMethod: Species;
}

export interface Sprites {
  backFemale: string;
  backShinyFemale: string;
  backDefault: string;
  frontFemale: string;
  frontShinyFemale: string;
  backShiny: string;
  frontDefault: string;
  frontShiny: string;
  other: Other;
  versions: Versions;
}

export interface Other {
  dreamWorld: DreamWorld;
  officialArtwork: DreamWorld;
}

export interface DreamWorld {
}

export interface Versions {
  generationOne: GenerationOne;
  generationTwo: GenerationTwo;
  generationThree: GenerationThree;
  generationFour: GenerationFour;
  generationFive: GenerationFive;
  generationSix: { [key: string]: DreamWorld };
  generationSeven: GenerationSeven;
  generationEight: GenerationEight;
}

export interface GenerationOne {
  redBlue: DreamWorld;
  yellow: DreamWorld;
}

export interface GenerationTwo {
  crystal: DreamWorld;
  gold: DreamWorld;
  silver: DreamWorld;
}

export interface GenerationThree {
  emerald: DreamWorld;
  fireRedLeafGreen: DreamWorld;
  rubySapphire: DreamWorld;
}

export interface GenerationFour {
  diamondPearl: DreamWorld;
  heartGoldSoulSilver: DreamWorld;
  platinum: DreamWorld;
}

export interface GenerationFive {
  blackWhite: DreamWorld;
}

export interface GenerationSeven {
  icons: DreamWorld;
  ultraSunUltraMoon: DreamWorld;
}

export interface GenerationEight {
  icons: DreamWorld;
}

export interface Stat {
  baseStat: number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}

export interface PokemonSpeciesObjectFull {
  id: number;
  name: string;
  order: number;
  genderRate: number;
  captureRate: number;
  baseHappiness: number;
  isBaby: boolean;
  isLegendary: boolean;
  isMythical: boolean;
  hatchCounter: number;
  hasGenderDifferences: boolean;
  formsSwitchable: boolean;
  growthRate: Color;
  pokedexNumbers: PokedexNumber[];
  eggGroups: Color[];
  color: Color;
  shape: Color;
  evolvesFromSpecies: Color;
  evolutionChain: EvolutionChain;
  habitat: null;
  generation: Color;
  names: Name[];
  flavorTextEntries: FlavorTextEntry[];
  formDescriptions: FormDescription[];
  genera: Genus[];
  varieties: Variety[];
}

export interface Color {
  name: string;
  url: string;
}

export interface Language {
  name: string;
  url: string;
}

export interface EvolutionChain {
  url: string;
}

export interface FlavorTextEntry {
  flavorText: string;
  language: Language;
  version: Color;
}

export interface FormDescription {
  description: string;
  language: Language;
}

export interface Genus {
  genus: string;
  language: Language;
}

export interface Name {
  name: string;
  language: Language;
}

export interface PokedexNumber {
  entryNumber: number;
  pokedex: Color;
}

export interface Variety {
  isDefault: boolean;
  pokemon: Color;
}
