import React from 'react';
import { View } from 'react-native';
import PokemonStatProps from './pokemon-stat.props';
import { Text } from '..';
import ProgressBar from '../progress-bar/progress-bar';
import { Flex } from '../flex/flex';

export const PokemonStat = ({ name, value, progressBarPreset }: PokemonStatProps) => {
  return (
    <Flex style={{
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 15,
    }}
    >
      <Text style={{ flex: 1 }}>{name}</Text>
      <Text preset="bold" style={{ flex: 0.5 }}>{value}</Text>

      <View style={{ flex: 3 }}>
        <ProgressBar preset={progressBarPreset} value={value} />
      </View>
    </Flex>
  );
};
