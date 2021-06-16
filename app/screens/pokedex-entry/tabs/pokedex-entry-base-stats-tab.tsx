import _ from 'lodash';
import React from 'react';
import { View } from 'react-native';
import { PokemonObjectFull, StatName } from '../../../api/types';
import { PokemonStat } from '../../../components';

type PokedexEntryBaseStatsTabProps = {
  info: PokemonObjectFull | undefined;
};

const PokedexEntryBaseStatsTab = ({ info }: PokedexEntryBaseStatsTabProps) => {
  const hpStat = info?.stats.find(({ stat: { name } }) => name === StatName.HP).baseStat ?? 0;
  const attackStat = info?.stats.find(({ stat: { name } }) => name === StatName.Attack).baseStat ?? 0;
  const defenseStat = info?.stats.find(({ stat: { name } }) => name === StatName.Defense).baseStat ?? 0;
  const specialAttackStat = info?.stats.find(({ stat: { name } }) => name === StatName.SpecialAttack).baseStat ?? 0;
  const specialDefenseStat = info?.stats.find(({ stat: { name } }) => name === StatName.SpecialDefense).baseStat ?? 0;
  const speedStat = info?.stats.find(({ stat: { name } }) => name === StatName.Speed).baseStat ?? 0;
  const totalStat = _.sum([hpStat, attackStat, defenseStat, specialAttackStat, specialDefenseStat, speedStat]);

  return (
    <View>
      <PokemonStat name="HP" value={hpStat} max={100} />
      <PokemonStat name="Attack" value={attackStat} max={100} />
      <PokemonStat name="Defense" value={defenseStat} max={100} />
      <PokemonStat name="Sp. Atk" value={specialAttackStat} max={100} />
      <PokemonStat name="Sp. Def" value={specialDefenseStat} max={100} />
      <PokemonStat name="Speed" value={speedStat} max={100} />
      <PokemonStat name="Total" value={totalStat} max={600} />
    </View>
  );
};

export default PokedexEntryBaseStatsTab;
