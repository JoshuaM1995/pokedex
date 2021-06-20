import _ from 'lodash';
import React from 'react';
import { ScrollView } from 'react-native';
import { QueryKey } from '../../../api';
import { getPokemonMoveByName } from '../../../api/endpoints/pokemon';
import { PokemonObjectFull } from '../../../api/types';
import { PokemonMoveCard } from '../../../components';
import { useQueriesTyped as useQueries } from '../../../types';
import { getIdFromURL } from '../../../utils';

type PokedexEntryMovesTabProps = {
  info: PokemonObjectFull | undefined;
};

const PokedexEntryMovesTab = ({ info }: PokedexEntryMovesTabProps) => {
  const pokemonMovesQueries = useQueries(
    info?.moves.map(({ move: { name, url } }) => {
      return {
        queryKey: `${QueryKey.PokemonMove}_${getIdFromURL(url)}`,
        queryFn: async () => getPokemonMoveByName(name),
        enabled: !!info,
      };
    }) ?? [],
  ).filter(({ data }) => !!data);

  const pokemonMovesResults = pokemonMovesQueries?.map(({ data: { data } }) => data);
  const pokemonMovesResultsWithLevelsLearnedAt = pokemonMovesResults.map((data) => {
    const pokemonInfoMove = info?.moves.find(({ move: { name } }) => name === data.name);
    return { ...data, moveLevel: pokemonInfoMove?.versionGroupDetails[0].levelLearnedAt };
  }).sort((a, b) => a.moveLevel - b.moveLevel);

  return (
    <ScrollView>
      {pokemonMovesResultsWithLevelsLearnedAt?.map(({
        name,
        damageClass,
        power,
        accuracy,
        pp,
        moveLevel,
      }) => {
        return (
          <PokemonMoveCard
            moveName={_.startCase(name)}
            moveLevel={moveLevel}
            damageClass={_.capitalize(damageClass.name)}
            attackValue={power}
            accuracyPercentage={accuracy}
            powerPointsValue={pp}
          />
        );
      })}
    </ScrollView>
  );
};

export default PokedexEntryMovesTab;
