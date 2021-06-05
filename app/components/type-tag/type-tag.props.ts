import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { PokemonType } from '../../enum';

type TypeTagProps = {
  /**
   * The Pokemon's type (fire, water, grass, etc.)
   */
  type: PokemonType;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  /**
   * An optional text style override
   */
  textStyle?: StyleProp<TextStyle>
};

export default TypeTagProps;
