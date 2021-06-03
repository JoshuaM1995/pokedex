import * as React from 'react';
import { PropsWithChildren } from 'react';
import { Pressable } from 'react-native';
import { Text } from '..';
import { NavigationCardProps } from './navigation-card.props';
import { textPresets, viewPresets } from './navigation-card.presets';

export const NavigationCard = ({
  preset = 'green',
  tx,
  text,
  style: styleOverride,
  textStyle: textStyleOverride,
  children,
  ...pressableProps
}: PropsWithChildren<NavigationCardProps>) => {
  const viewStyle = viewPresets[preset] || viewPresets.primary;
  const viewStyles = [viewStyle, styleOverride];
  const textStyle = textPresets[preset] || textPresets.primary;
  const textStyles = [textStyle, textStyleOverride];

  const content = tx || text ? <Text tx={tx} text={text} style={textStyles} /> : children;

  return (
    <Pressable style={viewStyles} {...pressableProps}>
      <Text style={textStyles}>{content}</Text>
    </Pressable>
  );
};
