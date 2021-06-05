import * as React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react-lite';
import _ from 'lodash';
import { Text } from '..';
import { TAG_TEXT, TAG_VIEW } from '../pokedex-card/pokedex-card.presets';
import TypeTagProps from './type-tag.props';

export const TypeTag = observer(({ type, style: styleOverride, textStyle: textStyleOverride }: TypeTagProps) => {
  return (
    <View style={[TAG_VIEW, styleOverride]}>
      <Text style={[TAG_TEXT, textStyleOverride]}>{_.upperFirst(type)}</Text>
    </View>
  );
});
