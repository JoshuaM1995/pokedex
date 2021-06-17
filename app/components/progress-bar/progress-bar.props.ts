import { ViewStyle, StyleProp } from 'react-native';
import { ProgressBarPresetNames } from './progress-bar.presets';

export default interface ProgressBarProps {
  /**
   * The stat value (50 = 50%)
   */
  value: number;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  preset: ProgressBarPresetNames;
};
