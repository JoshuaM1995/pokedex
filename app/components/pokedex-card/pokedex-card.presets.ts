import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { color, typography } from '../../theme';
import { padding } from '../../utils/react-native-helpers';

const BASE_VIEW: ViewStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: 170,
  borderRadius: 16,
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.5,
  shadowRadius: 8,
  ...padding(25, 20),
};

export const IMAGE_BACKGROUND: ImageStyle = {
  flex: 1,
  resizeMode: 'cover',
  justifyContent: 'flex-end',
};

export const BASE_TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
  fontWeight: 'bold',
  marginBottom: 15,
};

export const TAG_VIEW: ViewStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  marginBottom: 8,
  padding: 8,
  borderRadius: 100,
};

export const TAG_TEXT: TextStyle = {
  color: color.palette.white,
  textAlign: 'center',
  fontSize: 12,
};

export const viewPresets: Record<string, ViewStyle> = {
  green: { ...BASE_VIEW, backgroundColor: color.palette.green, shadowColor: color.palette.green } as ViewStyle,
  red: { ...BASE_VIEW, backgroundColor: color.palette.red, shadowColor: color.palette.red } as ViewStyle,
  blue: { ...BASE_VIEW, backgroundColor: color.palette.blue, shadowColor: color.palette.blue } as ViewStyle,
  yellow: { ...BASE_VIEW, backgroundColor: color.palette.yellow, shadowColor: color.palette.yellow } as ViewStyle,
  purple: { ...BASE_VIEW, backgroundColor: color.palette.purple, shadowColor: color.palette.purple } as ViewStyle,
  brown: { ...BASE_VIEW, backgroundColor: color.palette.brown, shadowColor: color.palette.brown } as ViewStyle,
};

export type PokedexCardPresetNames = keyof typeof viewPresets;
