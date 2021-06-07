import React from 'react';
import { View } from 'react-native';
import { PokemonStat } from '../../../components';

const PokedexEntryBaseStatsTab = () => {
  return (
    <View>
      <PokemonStat name="HP" value={45} max={100} />
      <PokemonStat name="Attack" value={60} max={100} />
      <PokemonStat name="Defense" value={48} max={100} />
      <PokemonStat name="Sp. Atk" value={65} max={100} />
      <PokemonStat name="Sp. Def" value={65} max={100} />
      <PokemonStat name="Speed" value={45} max={100} />
      <PokemonStat name="Total" value={317} max={600} />
    </View>
  );
};

export default PokedexEntryBaseStatsTab;
