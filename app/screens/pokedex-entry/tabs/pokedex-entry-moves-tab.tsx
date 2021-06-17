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
  info: PokemonObjectFull;
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

  return (
    <ScrollView>
      {pokemonMovesQueries?.map(({
        data: {
          data: {
            name,
            damageClass,
            power,
            accuracy,
            pp,
          },
        },
      }) => {
        return (
          <PokemonMoveCard
            moveName={_.startCase(name)}
            moveLevel={3}
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
