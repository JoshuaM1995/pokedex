import { StyleProp, ViewProps, ViewStyle } from 'react-native';
import { PagePresetNames } from './page.presets';

export interface PageProps extends ViewProps {
  /**
   * One of the different types of text presets.
   */
  preset?: PagePresetNames

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}
