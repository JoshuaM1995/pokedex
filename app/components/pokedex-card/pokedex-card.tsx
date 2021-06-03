import _ from 'lodash';
import * as React from 'react';
import { PropsWithChildren } from 'react';
import { ImageBackground, Pressable, View } from 'react-native';
import { Text } from '..';
import {
  POKEMON_NAME_TEXT, POKEMON_NUMBER_TEXT, TAG_TEXT, TAG_VIEW, viewPresets,
} from './pokedex-card.presets';
import { PokedexCardProps } from './pokedex-card.props';

export const PokedexCard = ({
  types,
  id,
  preset,
  tx,
  pokemonName,
  style: styleOverride,
  textStyle: textStyleOverride,
  children,
  ...pressableProps
}: PropsWithChildren<PokedexCardProps>) => {
  const viewStyle = viewPresets[preset] || viewPresets.primary;
  const viewStyles = [viewStyle, styleOverride];

  return (
    <Pressable style={viewStyles} {...pressableProps}>
      <ImageBackground
        source={require(`../../../assets/images/pokemon/${id}.png`)}
        style={{
          flex: 1,
          position: 'relative',
        }}
        imageStyle={{
          position: 'absolute',
          width: 75,
          height: 75,
          left: '50%',
          top: '50%',
        }}
      >
        <Text style={POKEMON_NUMBER_TEXT}>{`#${id.toString().padStart(3, '0')}`}</Text>
        <Text text={pokemonName} style={[POKEMON_NAME_TEXT, textStyleOverride]} />

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
