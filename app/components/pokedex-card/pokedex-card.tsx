import * as React from 'react';
import { PropsWithChildren } from 'react';
import { ImageBackground, Pressable, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Text, TypeTag } from '..';
import {
  IMAGE_BACKGROUND,
  IMAGE_BACKGROUND_STYLE,
  POKEMON_NAME_TEXT,
  POKEMON_NUMBER_TEXT,
  viewPresets,
} from './pokedex-card.presets';
import { PokedexCardProps } from './pokedex-card.props';
import { PrimaryParamList, RouteName } from '../../navigators';

export const PokedexCard = ({
  types,
  id,
  preset,
  pokemonName,
  style: styleOverride,
  textStyle: textStyleOverride,
  children,
  ...pressableProps
}: PropsWithChildren<PokedexCardProps>) => {
  const navigation = useNavigation<NavigationProp<PrimaryParamList>>();
  const viewStyle = viewPresets[preset] || viewPresets.primary;
  const viewStyles = [viewStyle, styleOverride];

  return (
    <Pressable
      style={viewStyles}
      onPress={() => navigation.navigate(RouteName.PokedexEntry, { pokemonId: id })}
      {...pressableProps}
    >
      <ImageBackground
        source={require(`../../../assets/images/pokemon/${id}.png`)}
        style={IMAGE_BACKGROUND}
        imageStyle={IMAGE_BACKGROUND_STYLE}
      >
        <Text style={POKEMON_NUMBER_TEXT}>{`#${id.toString().padStart(3, '0')}`}</Text>
        <Text text={pokemonName} style={[POKEMON_NAME_TEXT, textStyleOverride]} />

        <View style={{ width: '50%' }}>
          {types.map((type, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <TypeTag key={index} type={type} />
          ))}
        </View>
      </ImageBackground>
    </Pressable>
  );
};
