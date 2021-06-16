import React from 'react';
import {
  NavigationProp, RouteProp, useNavigation, useRoute,
} from '@react-navigation/native';
import { Pressable, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useQuery } from 'react-query';
import _ from 'lodash';
import {
  Screen, Section, Text, TypeTag,
} from '../../components';
import { color } from '../../theme';
import { PrimaryParamList, RouteName } from '../../navigators';
import { padding } from '../../utils/react-native-helpers';
import { PokemonType } from '../../enums';
import PokedexEntryAboutTab from './tabs/pokedex-entry-about-tab';
import PokedexEntryBaseStatsTab from './tabs/pokedex-entry-base-stats-tab';
import PokedexEntryEvolutionsTab from './tabs/pokedex-entry-evolutions-tab';
import PokedexEntryMovesTab from './tabs/pokedex-entry-moves-tab';
import { QueryKey } from '../../api';
import { getPokemonById, getPokemonEvolutionChainById, getPokemonSpeciesById } from '../../api/endpoints/pokemon';
import { getIdFromURL } from '../../utils';

const PokemonHeaderSection = Section;
const PokemonInfoSection = Section;
const Tab = createMaterialTopTabNavigator();

export const PokedexEntryScreen = () => {
  const navigation = useNavigation<NavigationProp<PrimaryParamList>>();
  const { params: { pokemonId } } = useRoute<RouteProp<PrimaryParamList, RouteName.PokedexEntry>>();

  const pokemonInfoQuery = useQuery(`${QueryKey.Pokemon}_${pokemonId}`, () => getPokemonById(pokemonId));
  const pokemonInfo = pokemonInfoQuery.data?.data;
  const pokemonSpeciesQuery = useQuery(
    `${QueryKey.PokemonSpecies}_${pokemonId}`,
    () => getPokemonSpeciesById(pokemonId),
  );
  const pokemonSpecies = pokemonSpeciesQuery.data?.data;
  const pokemonEvolutionQuery = useQuery(
    `${QueryKey.PokemonEvolution}_${pokemonId}`,
    () => getPokemonEvolutionChainById(getIdFromURL(pokemonSpecies.evolutionChain.url)),
    { enabled: !!pokemonSpecies },
  );
  const pokemonEvolution = pokemonEvolutionQuery.data?.data;
  const pokemonColorName = pokemonSpecies?.color.name ?? '';
  const pokemonColor = pokemonSpecies ? color.palette[pokemonSpecies.color.name] : '';

  // Set the navigation header to match the color of the pokemon
  navigation.setOptions({
    headerStyle: {
      title: _.capitalize(pokemonInfo?.name),
      backgroundColor: pokemonColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  return (
    <Screen preset="scroll">
      <PokemonHeaderSection style={{
        backgroundColor: pokemonColor,
        height: 300,
        ...padding(20, 15, 80, 15),
      }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Text preset="h2" style={{ color: color.palette.white }}>
              {_.capitalize(pokemonInfo?.name)}
            </Text>

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              {/* TODO: Navigate to type chart onPress */}
              {pokemonInfo?.types.map(({ type }) => (
                <Pressable>
                  <TypeTag type={_.capitalize(type.name) as PokemonType} />
                </Pressable>
              ))}
            </div>
          </div>

          <Text preset="h5" style={{ color: color.palette.white, fontWeight: 'bold', marginRight: 10 }}>
            {`#${pokemonId.toString().padStart(3, '0')}`}
          </Text>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}
        >
          <Image
            source={require(`../../../assets/images/pokemon/${pokemonId}.png`)}
            style={{
              height: 200,
              width: 200,
              position: 'absolute',
              bottom: '0px',
            }}
          />
        </div>
      </PokemonHeaderSection>

      <PokemonInfoSection style={{
        backgroundColor: color.background,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30,
        minHeight: 30,
      }}
      >
        <Tab.Navigator
          lazy
          style={{ marginTop: 30, paddingLeft: 30, paddingRight: 30 }}
          sceneContainerStyle={{ backgroundColor: 'white', paddingTop: 30 }}
          tabBarOptions={{ labelStyle: { fontWeight: 'bold' } }}
        >
          <Tab.Screen name="About">
            {() => (
              <PokedexEntryAboutTab info={pokemonInfo} species={pokemonSpecies} />
            )}
          </Tab.Screen>
          <Tab.Screen name="Base Stats">
            {() =>
              <PokedexEntryBaseStatsTab info={pokemonInfo} colorName={pokemonColorName} />}
          </Tab.Screen>
          <Tab.Screen name="Evolutions">
            {() => (
              <PokedexEntryEvolutionsTab evolution={pokemonEvolution} color={pokemonColor} />
            )}
          </Tab.Screen>
          <Tab.Screen name="Moves">{() => <PokedexEntryMovesTab />}</Tab.Screen>
        </Tab.Navigator>
      </PokemonInfoSection>
    </Screen>
  );
};
