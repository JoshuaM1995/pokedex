import React from 'react';
import { TextStyle } from 'react-native';
import { Section, Text } from '../../../components';

const InfoSection = Section;
const BreedingSection = Section;

const wrapperStyle = { marginBottom: 15 };
const statStyle: TextStyle = { marginLeft: 50, fontWeight: 'bold', textAlign: 'left' };

const PokedexEntryAboutTab = () => {
  return (
    <>
      <InfoSection style={{ width: '65%', marginTop: 30 }}>
        <div style={wrapperStyle}>
          <Text>Species</Text>
          <Text style={statStyle}>Seed</Text>
        </div>

        <div style={wrapperStyle}>
          <Text>Height</Text>
          <Text style={statStyle}>2'3.6" (0.70cm)</Text>
        </div>

        <div style={wrapperStyle}>
          <Text>Weight</Text>
          <Text style={statStyle}>15.2lbs (6.9kg)</Text>
        </div>

        <div style={wrapperStyle}>
          <Text>Abilities</Text>
          <Text style={statStyle}>Overgrow, Chlorophyll</Text>
        </div>
      </InfoSection>

      <BreedingSection style={{ width: '65%' }}>
        <Text preset="h5" style={{ marginBottom: 20 }}>Breeding</Text>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15 }}>
          <Text>Gender</Text>
          <Text preset="bold">87.25%</Text>
          <Text preset="bold">12.5%</Text>
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
