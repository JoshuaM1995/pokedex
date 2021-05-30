import { TextStyle, ViewStyle } from 'react-native';
import { color, typography } from '../../theme';
import { padding } from '../../utils/react-native-helpers';

const BASE_VIEW: ViewStyle = {
  justifyContent: 'center',
  borderRadius: 12,
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.5,
  shadowRadius: 8,
  ...padding(25, 20),
};

const BASE_TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  fontWeight: 'bold',
  color: color.palette.white,
};

export const viewPresets: Record<string, ViewStyle> = {
  green: { ...BASE_VIEW, backgroundColor: color.palette.green, shadowColor: color.palette.green } as ViewStyle,
  red: { ...BASE_VIEW, backgroundColor: color.palette.red, shadowColor: color.palette.red } as ViewStyle,
  blue: { ...BASE_VIEW, backgroundColor: color.palette.blue, shadowColor: color.palette.blue } as ViewStyle,
  yellow: { ...BASE_VIEW, backgroundColor: color.palette.yellow, shadowColor: color.palette.yellow } as ViewStyle,
  purple: { ...BASE_VIEW, backgroundColor: color.palette.purple, shadowColor: color.palette.purple } as ViewStyle,
  brown: { ...BASE_VIEW, backgroundColor: color.palette.brown, shadowColor: color.palette.brown } as ViewStyle,
};

export const textPresets: Record<string, TextStyle> = {
  primary: BASE_TEXT as ViewStyle,
};

export type NavigationCardPresetNames = keyof typeof viewPresets;
