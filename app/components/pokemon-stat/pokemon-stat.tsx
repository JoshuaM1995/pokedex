import React from 'react';
import PokemonStatProps from './pokemon-stat.props';
import { Text } from '..';
import ProgressBar from '../progress-bar/progress-bar';

export const PokemonStat = ({ name, value, progressBarPreset }: PokemonStatProps) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 15,
    }}
    >
      <Text style={{ flex: 1 }}>{name}</Text>
      <Text preset="bold" style={{ flex: 0.5 }}>{value}</Text>

      <div style={{ flex: 3 }}>
        <ProgressBar preset={progressBarPreset} value={value} />
      </div>
    </div>
  );
};
