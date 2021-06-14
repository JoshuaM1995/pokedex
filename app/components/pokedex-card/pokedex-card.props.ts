import {
  PressableProps, StyleProp, TextStyle, ViewStyle,
} from 'react-native';
import { PokedexCardPresetNames } from './pokedex-card.presets';
import { PokemonType } from '../../enums';

export interface PokedexCardProps extends Omit<PressableProps, 'children'> {
  types: [PokemonType, PokemonType?];

  id: number;

  pokemonName?: string

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  /**
   * An optional style override useful for the button text.
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * One of the different types of text presets.
   */
  preset: PokedexCardPresetNames
}
