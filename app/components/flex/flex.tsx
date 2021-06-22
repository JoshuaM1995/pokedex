import * as React from 'react';
import { PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { FlexProps } from './flex.props';

export const Flex = ({ style: styleOverride, children }: PropsWithChildren<FlexProps>) => {
  const container: StyleProp<ViewStyle> = {
    display: 'flex',
  };

  return (
    <View style={[container, styleOverride]}>{children}</View>
  );
};
