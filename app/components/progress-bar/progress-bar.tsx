import React from 'react';
import { View } from 'react-native';
import { presets, PROGRESS_BAR_VIEW_STYLE } from './progress-bar.presets';
import ProgressBarProps from './progress-bar.props';

const ProgressBar = ({ value, style: styleOverride, preset }: ProgressBarProps) => {
  const progressBarFillStyle = presets[preset];
  const progressBarFillStyles = [progressBarFillStyle, styleOverride];

  return (
    <View style={PROGRESS_BAR_VIEW_STYLE}>
      <View style={[{ width: value }, progressBarFillStyles]} />
    </View>
  );
};

export default ProgressBar;
