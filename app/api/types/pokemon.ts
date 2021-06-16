export type PokemonObjectSimplified = {
  name: string;
  url: string;
};

export type PokemonObjectFull = {
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

export type Ability = {
  isHidden: boolean;
  slot: number;
  ability: Species;
}

export type Species = {
  name: string;
  url: string;
}

export type GameIndex = {
  gameIndex: number;
  version: Species;
}

export type HeldItem = {
  item: Species;
  versionDetails: VersionDetail[];
}

export type VersionDetail = {
  rarity: number;
  version: Species;
}

export type Move = {
  move: Species;
  versionGroupDetails: VersionGroupDetail[];
}

export type VersionGroupDetail = {
  levelLearnedAt: number;
  versionGroup: Species;
  moveLearnMethod: Species;
}

export type Sprites = {
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

export type Other = {
  dreamWorld: DreamWorld;
  officialArtwork: DreamWorld;
}

export type DreamWorld = {
}

export type Versions = {
  generationOne: GenerationOne;
  generationTwo: GenerationTwo;
  generationThree: GenerationThree;
  generationFour: GenerationFour;
  generationFive: GenerationFive;
  generationSix: { [key: string]: DreamWorld };
  generationSeven: GenerationSeven;
  generationEight: GenerationEight;
}

export type GenerationOne = {
  redBlue: DreamWorld;
  yellow: DreamWorld;
}

export type GenerationTwo = {
  crystal: DreamWorld;
  gold: DreamWorld;
  silver: DreamWorld;
}

export type GenerationThree = {
  emerald: DreamWorld;
  fireRedLeafGreen: DreamWorld;
  rubySapphire: DreamWorld;
}

export type GenerationFour = {
  diamondPearl: DreamWorld;
  heartGoldSoulSilver: DreamWorld;
  platinum: DreamWorld;
}

export type GenerationFive = {
  blackWhite: DreamWorld;
}

export type GenerationSeven = {
  icons: DreamWorld;
  ultraSunUltraMoon: DreamWorld;
}

export type GenerationEight = {
  icons: DreamWorld;
}

export enum StatName {
  HP = 'hp',
  Attack = 'attack',
  Defense = 'defense',
  SpecialAttack = 'special-attack',
  SpecialDefense = 'special-defense',
  Speed = 'speed',
}

export type StatType = {
  name: StatName;
  url: string;
};

export type Stat = {
  baseStat: number;
  effort: number;
  stat: StatType;
}

export type Type = {
  slot: number;
  type: Species;
}

export type PokemonSpeciesObjectFull = {
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
  growthRate: NameWithURL;
  pokedexNumbers: PokedexNumber[];
  eggGroups: NameWithURL[];
  color: NameWithURL;
  shape: NameWithURL;
  evolvesFromSpecies: NameWithURL;
  evolutionChain: EvolutionChain;
  habitat: null;
  generation: NameWithURL;
  names: Name[];
  flavorTextEntries: FlavorTextEntry[];
  formDescriptions: FormDescription[];
  genera: Genus[];
  varieties: Variety[];
}

export type NameWithURL = {
  name: string;
  url: string;
}

export type Language = {
  name: string;
  url: string;
}

export type EvolutionChain = {
  url: string;
}

export type FlavorTextEntry = {
  flavorText: string;
  language: Language;
  version: NameWithURL;
}

export type FormDescription = {
  description: string;
  language: Language;
}

export type Genus = {
  genus: string;
  language: Language;
}

export type Name = {
  name: string;
  language: Language;
}

export type PokedexNumber = {
  entryNumber: number;
  pokedex: NameWithURL;
}

export type Variety = {
  isDefault: boolean;
  pokemon: NameWithURL;
}
