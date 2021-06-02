import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import SectionProps from './section.props';

/**
 * Used for separating sections when composing screens
 *
 * @example
 *
 * import { Section as NavigationSection, Section as MainSection } from './components';
 *
 * <NavigationSection style={{ backgroundColor: 'red' }}>
 *   Some content here
 * </NavigationSection>
 *
 * <MainSection style={{ backgroundColor: 'yellow' }}>
 *   Some more content here
 * </MainSection>
 */
export const Section = ({ style: styleOverride, children }: PropsWithChildren<SectionProps>) => {
  return (<View style={styleOverride}>{children}</View>);
};
