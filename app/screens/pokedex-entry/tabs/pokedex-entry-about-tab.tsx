import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { TextStyle } from 'react-native';
import convert from 'convert-units';
import _ from 'lodash';
import { PokemonObjectFull, PokemonSpeciesObjectFull } from '../../../api/types';
import { Section, Text } from '../../../components';
import { color } from '../../../theme';

const InfoSection = Section;
const BreedingSection = Section;

const wrapperStyle = { marginBottom: 15 };
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

  console.log('PokedexEntryAboutTab', {
    info,
    species,
    weightKg,
    weightLbs,
  });

  return (
    <>
      <InfoSection style={{ width: '65%' }}>
        <div style={wrapperStyle}>
          <Text>Species</Text>
          <Text style={statStyle}>{pokemonSpecies.replace(' Pokémon', '')}</Text>
        </div>

        <div style={wrapperStyle}>
          <Text>Height</Text>
          <Text style={statStyle}>{`${feet}'${inches}" (${heightCm}cm)`}</Text>
        </div>

        <div style={wrapperStyle}>
          <Text>Weight</Text>
          <Text style={statStyle}>{`${weightLbs}lbs (${weightKg}kg)`}</Text>
        </div>

        <div style={wrapperStyle}>
          <Text>Abilities</Text>
          <Text style={statStyle}>{info?.abilities.map(({ ability }) => _.startCase(ability.name)).join(', ')}</Text>
        </div>
      </InfoSection>

      <BreedingSection style={{ width: '65%' }}>
        <Text preset="h5" style={{ marginBottom: 20 }}>Breeding</Text>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15 }}>
          <Text>Gender</Text>
          <Text preset="bold">
            <FontAwesomeIcon icon="mars" color={color.gender.male} style={{ marginRight: 5 }} />
            87.b5%
          </Text>
          <Text preset="bold">
            <FontAwesomeIcon icon="venus" color={color.gender.female} style={{ marginRight: 5 }} />
            12.5%
          </Text>
        </div>

        <div style={wrapperStyle}>
          <Text>Egg Groups</Text>
          <Text style={statStyle}>Monster</Text>
        </div>

        <div style={wrapperStyle}>
          <Text>Egg Cycle</Text>
          <Text style={statStyle}>Grass</Text>
        </div>
      </BreedingSection>
    </>
  );
};

export default PokedexEntryAboutTab;
