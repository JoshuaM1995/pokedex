import { ViewStyle } from 'react-native';
import { padding } from '../../utils/react-native-helpers';

const BASE_VIEW: ViewStyle = {
  ...padding(0, 15),
};

export const viewPresets: Record<string, ViewStyle> = {
  default: { ...BASE_VIEW },
};

export type PagePresetNames = keyof typeof viewPresets;
