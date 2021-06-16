import { ViewStyle } from 'react-native';
import { color } from '../../theme';

export const PROGRESS_BAR_VIEW_STYLE: ViewStyle = {
  width: '100%',
  height: 6,
  backgroundColor: '#e0e0e0',
  borderRadius: 3,
};

const PROGRESS_BAR_FILL_VIEW: ViewStyle = {
  height: 6,
  backgroundColor: color.progressBar.low,
  borderRadius: 20,
};

export const presets: Record<string, ViewStyle> = {
  green: { ...PROGRESS_BAR_FILL_VIEW, backgroundColor: color.palette.green } as ViewStyle,
  red: { ...PROGRESS_BAR_FILL_VIEW, backgroundColor: color.palette.red } as ViewStyle,
  blue: { ...PROGRESS_BAR_FILL_VIEW, backgroundColor: color.palette.blue } as ViewStyle,
  yellow: { ...PROGRESS_BAR_FILL_VIEW, backgroundColor: color.palette.yellow } as ViewStyle,
  purple: { ...PROGRESS_BAR_FILL_VIEW, backgroundColor: color.palette.purple } as ViewStyle,
  brown: { ...PROGRESS_BAR_FILL_VIEW, backgroundColor: color.palette.brown } as ViewStyle,
};

export type ProgressBarPresetNames = keyof typeof presets;
