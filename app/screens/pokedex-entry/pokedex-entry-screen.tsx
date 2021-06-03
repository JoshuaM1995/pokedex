import React from 'react';
import {
  RouteProp, useNavigation, useRoute, NavigationProp,
} from '@react-navigation/native';
import { Screen, Text, Section } from '../../components';
import { color } from '../../theme';
import { PrimaryParamList, RouteName } from '../../navigators';
import { padding } from '../../utils/react-native-helpers';

const PokemonHeaderSection = Section;
const PokemonInfoSection = Section;

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
    <Screen preset="scroll">
      <PokemonHeaderSection style={{
        backgroundColor: color.palette.green,
        ...padding(0, 15, 80, 15),
      }}
      >
        <Text preset="h3" style={{ color: color.palette.white }}>Bulbasaur</Text>
      </PokemonHeaderSection>

      <PokemonInfoSection style={{
        backgroundColor: color.background,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30,
      }}
      >
        <Text preset="header" text="">Some info here...</Text>
      </PokemonInfoSection>
    </Screen>
  );
};
