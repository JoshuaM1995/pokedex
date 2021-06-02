// the base styling for the container
import { TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../theme';
import { margin, padding } from '../../utils/react-native-helpers';

const BASE_VIEW: ViewStyle = {
  ...margin(spacing[3], 0),
};

// the base styling for the TextInput
const BASE_INPUT: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  backgroundColor: color.textInputBg,
  minHeight: 44,
  fontSize: 14,
  ...padding(0, 20),
};

export const viewPresets: Record<string, ViewStyle> = {
  default: { ...BASE_VIEW },
};

export const inputPresets: Record<string, ViewStyle> = {
  default: { ...BASE_INPUT },
  search: { ...BASE_INPUT, borderRadius: 30 },
};

export type TextFieldPresetNames = keyof typeof inputPresets;
