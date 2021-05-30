import * as React from 'react';
import { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { PageProps } from './page.props';
import { viewPresets } from './page.presets';

const Page = ({ preset = 'default', style: styleOverride, children }: PropsWithChildren<PageProps>) => {
  const viewStyle = viewPresets[preset] || viewPresets.default;
  const viewStyles = [viewStyle, styleOverride];

  return (
    <View style={viewStyles}>
      {children}
    </View>
  );
};

export default Page;
