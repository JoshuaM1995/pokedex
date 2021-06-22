import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  StyleProp, TextStyle, View, ViewStyle,
} from 'react-native';
import convert from 'convert-units';
import _ from 'lodash';
import { PokemonObjectFull, PokemonSpeciesObjectFull } from '../../../api/types';
import { Section, Text } from '../../../components';
import { color } from '../../../theme';
import { Flex } from '../../../components/flex/flex';

const InfoSection = Section;
const BreedingSection = Section;

const wrapperStyle: StyleProp<ViewStyle> = { marginBottom: 15 };
const statStyle: TextStyle = { marginLeft: 50, fontWeight: 'bold', textAlign: 'left' };

type PokedexEntryAboutTabProps = {
  info: PokemonObjectFull | undefined;
  species: PokemonSpeciesObjectFull | undefined;
};

const PokedexEntryAboutTab = ({ info, species }: PokedexEntryAboutTabProps) => {
  const pokemonSpecies = species?.genera.find(({ language }) => language.name === 'en')?.genus ?? '';
  const heightCm = (info?.height ?? 0) * 10;
  const heightIn = convert(heightCm).from('cm').to('in');
  const feet = Math.floor(heightIn / 12);
  const inches = (heightIn - (feet * 12)).toFixed(1);
  const weightKg = (info?.weight ?? 0) / 10;
  const weightLbs = (convert(weightKg).from('kg').to('lb')).toFixed(1);
  const femaleGenderPercentage = species?.genderRate ? (species.genderRate / 8) * 100 : 0;
  const maleGenderPercentage = 100 - femaleGenderPercentage;

  return (
    <>
      <InfoSection style={{ width: '65%' }}>
        <Text preset="h5" style={{ marginBottom: 20 }}>Information</Text>

        <View style={wrapperStyle}>
          <Text>Species</Text>
          <Text style={statStyle}>{pokemonSpecies.replace(' Pokémon', '')}</Text>
        </View>

        <View style={wrapperStyle}>
          <Text>Height</Text>
          <Text style={statStyle}>{`${feet}'${inches}" (${heightCm}cm)`}</Text>
        </View>

        <View style={wrapperStyle}>
          <Text>Weight</Text>
          <Text style={statStyle}>{`${weightLbs}lbs (${weightKg}kg)`}</Text>
        </View>

        <View style={wrapperStyle}>
          <Text>Abilities</Text>
          <Text style={statStyle}>{info?.abilities.map(({ ability }) => _.startCase(ability.name)).join(', ')}</Text>
        </View>
      </InfoSection>

      <BreedingSection style={{ width: '65%' }}>
        <Text preset="h5" style={{ marginBottom: 20 }}>Breeding</Text>

        <Flex style={{ justifyContent: 'space-between', marginBottom: 15 }}>
          <Text>Gender</Text>
          <Text preset="bold">
            <FontAwesomeIcon icon="mars" color={color.gender.male} style={{ marginRight: 5 }} />
            {`${maleGenderPercentage}%`}
          </Text>
          <Text preset="bold">
            <FontAwesomeIcon icon="venus" color={color.gender.female} style={{ marginRight: 5 }} />
            {`${femaleGenderPercentage}%`}
          </Text>
        </Flex>

        <View style={wrapperStyle}>
          <Text>Egg Groups</Text>
          <Text style={statStyle}>
            {species?.eggGroups?.map(({ name }) => _.capitalize(name)).join(', ')}
          </Text>
        </View>
      </BreedingSection>
    </>
  );
};

export default PokedexEntryAboutTab;
