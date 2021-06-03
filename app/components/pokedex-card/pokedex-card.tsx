import _ from 'lodash';
import * as React from 'react';
import { PropsWithChildren } from 'react';
import { ImageBackground, Pressable, View } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { Text } from '..';
import {
  BASE_TEXT, IMAGE_BACKGROUND, TAG_TEXT, TAG_VIEW, viewPresets,
} from './pokedex-card.presets';
import { PokedexCardProps } from './pokedex-card.props';

export const PokedexCard = ({
  types,
  id,
  preset = 'green',
  tx,
  text,
  style: styleOverride,
  textStyle: textStyleOverride,
  children,
  ...pressableProps
}: PropsWithChildren<PokedexCardProps>) => {
  const viewStyle = viewPresets[preset] || viewPresets.primary;
  const viewStyles = [viewStyle, styleOverride];

  const content = tx || text
    ? <Text tx={tx} text={text} style={[BASE_TEXT, textStyleOverride]} />
    : children;

  return (
    <Pressable style={viewStyles} {...pressableProps}>
      <ImageBackground
        source={require(`../../../assets/images/pokemon/${id}.png`)}
        style={{
          flex: 1,
          position: 'relative',
        }}
        imageStyle={{
          // resizeMode: 'cover',
          position: 'absolute',
          width: 75,
          height: 75,
          left: '50%',
          top: '50%',
        }}
      >
        {content}

        <View style={{ width: '50%' }}>
          {types.map((type, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <View key={index} style={TAG_VIEW}>
              <Text style={TAG_TEXT}>{_.upperFirst(type)}</Text>
            </View>
          ))}
        </View>
      </ImageBackground>
    </Pressable>
  );
};
