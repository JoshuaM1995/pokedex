import * as React from 'react';
import {
  KeyboardAvoidingView, Platform, ScrollView, StatusBar, View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenProps } from './screen.props';
import { isNonScrolling, offsets, presets } from './screen.presets';

const isIos = Platform.OS === 'ios';

function ScreenWithoutScrolling({
  testID,
  style,
  backgroundColor,
  unsafe,
  keyboardOffset,
  statusBar,
  children,
}: ScreenProps) {
  const insets = useSafeAreaInsets();
  const preset = presets.fixed;
  const screenStyle = style || {};
  const backgroundStyle = backgroundColor ? { backgroundColor } : {};
  const insetStyle = { paddingTop: unsafe ? 0 : insets.top };

  return (
    <KeyboardAvoidingView
      testID={testID}
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={offsets[keyboardOffset || 'none']}
    >
      <StatusBar barStyle={statusBar || 'light-content'} />
      <View style={[preset.inner, screenStyle, insetStyle]}>{children}</View>
    </KeyboardAvoidingView>
  );
}

function ScreenWithScrolling({
  testID,
  style,
  backgroundColor,
  unsafe,
  keyboardOffset,
  keyboardShouldPersistTaps,
  statusBar,
  children,
}: ScreenProps) {
  const insets = useSafeAreaInsets();
  const preset = presets.scroll;
  const screenStyle = style || {};
  const backgroundStyle = backgroundColor ? { backgroundColor } : {};
  const insetStyle = { paddingTop: unsafe ? 0 : insets.top };

  return (
    <KeyboardAvoidingView
      testID={testID}
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={offsets[keyboardOffset || 'none']}
    >
      <StatusBar barStyle={statusBar || 'light-content'} />
      <View style={[preset.outer, backgroundStyle, insetStyle]}>
        <ScrollView
          style={[preset.outer, backgroundStyle]}
          contentContainerStyle={[preset.inner, screenStyle]}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
        >
          {children}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

/**
 * The starting component on every screen in the app.
 */
export function Screen({ testID, preset, ...props }: ScreenProps) {
  if (isNonScrolling(preset)) {
    return <ScreenWithoutScrolling testID={testID} {...props} />;
  }
  return <ScreenWithScrolling testID={testID} {...props} />;
}
