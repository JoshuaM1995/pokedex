import * as React from 'react';
import { PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { FlexProps } from './flex-column.props';

export const FlexColumn = ({ style: styleOverride, children }: PropsWithChildren<FlexProps>) => {
  const container: StyleProp<ViewStyle> = {
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <View style={[container, styleOverride]}>{children}</View>
  );
};
