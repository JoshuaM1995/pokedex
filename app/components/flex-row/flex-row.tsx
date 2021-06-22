import * as React from 'react';
import { PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { FlexProps } from './flex-row.props';

export const FlexRow = ({ style: styleOverride, children }: PropsWithChildren<FlexProps>) => {
  const container: StyleProp<ViewStyle> = {
    display: 'flex',
    flexDirection: 'row',
  };

  return (
    <View style={[container, styleOverride]}>{children}</View>
  );
};
