import { StyleProp, ViewStyle } from 'react-native';

export default interface PokemonStatProps {
  /**
   * The name of the stat
   */
  name: string;

  /**
   * The stat value (50 = 50%)
   */
  value: number;

  /**
   * How high the progress bar can go. Used to determine the color based
   * on the percentage
   */
  max: number;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
};
