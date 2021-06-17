import React from 'react';
import { ScrollView } from 'react-native';
import { PokemonObjectFull } from '../../../api/types';
import { PokemonMoveCard } from '../../../components';
import { useQueriesTyped as useQueries } from '../../types';

type PokedexEntryMovesTabProps = {
  info: PokemonObjectFull;
};

const PokedexEntryMovesTab = ({ info }: PokedexEntryMovesTabProps) => {
  return (
    <ScrollView>
      <PokemonMoveCard
        moveName="Tackle"
        moveLevel={3}
        moveType="Physical"
        attackValue={40}
        accuracyPercentage={100}
        powerPointsValue={35}
      />

      <PokemonMoveCard
        moveName="Tackle"
        moveLevel={3}
        moveType="Physical"
        attackValue={40}
        accuracyPercentage={100}
        powerPointsValue={35}
      />
    </ScrollView>
  );
};

export default PokedexEntryMovesTab;
