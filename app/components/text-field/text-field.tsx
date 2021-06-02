import React from 'react';
import { TextInput, View } from 'react-native';
import { color } from '../../theme';
import { translate } from '../../i18n';
import { Text } from '../text/text';
import TextFieldProps from './text-field.props';
import { viewPresets, inputPresets } from './text-field.presets';

/**
 * A component which has a label and an input together.
 */
export function TextField({
  preset = 'default',
  placeholderTx,
  placeholder,
  labelTx,
  label,
  style: styleOverride,
  inputStyle: inputStyleOverride,
  forwardedRef,
  ...textInputProps
}: TextFieldProps) {
  const viewStyle = viewPresets[preset] || viewPresets.default;
  const viewStyles = [viewStyle, styleOverride];
  const inputStyle = inputPresets[preset] || inputPresets.default;
  const inputStyles = [inputStyle, inputStyleOverride];
  const actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder;

  return (
    <View style={viewStyles}>
      <Text preset="fieldLabel" tx={labelTx} text={label} />
      <TextInput
        placeholder={actualPlaceholder}
        placeholderTextColor={color.textInputPlaceholder}
        underlineColorAndroid={color.transparent}
        style={inputStyles}
        ref={forwardedRef}
        {...textInputProps}
      />
    </View>
  );
}
