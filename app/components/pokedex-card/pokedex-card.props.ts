import {
  PressableProps, StyleProp, TextStyle, ViewStyle,
} from 'react-native';
import { ReactNode } from 'react';
import { TxKeyPath } from '../../i18n';
import { PokedexCardPresetNames } from './pokedex-card.presets';
import { PokemonType } from '../../enum';

export interface PokedexCardProps extends Omit<PressableProps, 'children'> {
  types: [PokemonType, PokemonType?];

  image: string;

  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string

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
  preset?: PokedexCardPresetNames

  /**
   * One of the different types of text presets.
   */
  children?: ReactNode
}
