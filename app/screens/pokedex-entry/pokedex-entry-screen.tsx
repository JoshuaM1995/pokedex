import React from 'react';
import { ViewStyle } from 'react-native';
import {
  RouteProp, useNavigation, useRoute, NavigationProp,
} from '@react-navigation/native';
import { Screen, Text } from '../../components';
import { color } from '../../theme';
import { PrimaryParamList, RouteName } from '../../navigators';

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
};

export const PokedexEntryScreen = () => {
  const navigation = useNavigation<NavigationProp<PrimaryParamList>>();
  const { params: { pokemonId } } = useRoute<RouteProp<PrimaryParamList, RouteName.PokedexEntry>>();

  // Set the navigation header to match the color of the pokemon
  navigation.setOptions({
    headerStyle: {
      // TODO: Programmatically get the pokemon's color
      backgroundColor: color.palette.green,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="">{`Pokedex entry #${pokemonId.toString().padStart(3, '0')}`}</Text>
    </Screen>
  );
};
