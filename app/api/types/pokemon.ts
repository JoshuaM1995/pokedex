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
  forms: NameWithURL[];
  gameIndices: GameIndex[];
  heldItems: HeldItem[];
  locationAreaEncounters: string;
  moves: Move[];
  species: NameWithURL;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
}

export type Ability = {
  isHidden: boolean;
  slot: number;
  ability: NameWithURL;
}

export type GameIndex = {
  gameIndex: number;
  version: NameWithURL;
}

export type HeldItem = {
  item: NameWithURL;
  versionDetails: VersionDetail[];
}

export type VersionDetail = {
  rarity: number;
  version: NameWithURL;
}

export type Move = {
  move: NameWithURL;
  versionGroupDetails: VersionGroupDetail[];
}

export type VersionGroupDetail = {
  levelLearnedAt: number;
  versionGroup: NameWithURL;
  moveLearnMethod: NameWithURL;
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
  type: NameWithURL;
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

export type PokedexNumber = {
  entryNumber: number;
  pokedex: NameWithURL;
}

export type Variety = {
  isDefault: boolean;
  pokemon: NameWithURL;
}

export interface PokemonEvolutionObjectFull {
  id: number;
  babyTriggerItem: null;
  chain: Chain;
}

export interface Chain {
  isBaby: boolean;
  species: NameWithURL;
  evolutionDetails: EvolutionDetail[] | null;
  evolvesTo: Chain[];
}

export interface EvolutionDetail {
  item: null;
  trigger: NameWithURL;
  gender: null;
  heldItem: null;
  knownMove: null;
  knownMoveType: null;
  location: null;
  minLevel: number;
  minHappiness: null;
  minBeauty: null;
  minAffection: null;
  needsOverworldRain: boolean;
  partySpecies: null;
  partyType: null;
  relativePhysicalStats: null;
  timeOfDay: string;
  tradeSpecies: null;
  turnUpsideDown: boolean;
}

export interface PokemonMoveObjectFull {
  id: number;
  name: string;
  accuracy: number;
  effectChance: null;
  pp: number;
  priority: number;
  power: number;
  contestCombos: ContestCombos;
  contestType: NameWithURL;
  contestEffect: ContestEffect;
  damageClass:NameWithURL;
  effectEntries: EffectEntry[];
  effectChanges: any[];
  generation:NameWithURL;
  meta: Meta;
  names: Name[];
  pastValues: any[];
  statChanges: any[];
  superContestEffect: ContestEffect;
  target:NameWithURL;
  type:NameWithURL;
  flavorTextEntries: FlavorTextEntry[];
}

export interface ContestCombos {
  normal: Normal;
  super: Normal;
}

export interface Normal {
  useBefore:NameWithURL[] | null;
  useAfter: null;
}

export interface ContestEffect {
  url: string;
}

export interface EffectEntry {
  effect: string;
  shortEffect: string;
  language:NameWithURL;
}

export interface Meta {
  ailment:NameWithURL;
  category:NameWithURL;
  minHits: null;
  maxHits: null;
  minTurns: null;
  maxTurns: null;
  drain: number;
  healing: number;
  critRate: number;
  ailmentChance: number;
  flinchChance: number;
  statChance: number;
}

export interface Name {
  name: string;
  language:NameWithURL;
}
