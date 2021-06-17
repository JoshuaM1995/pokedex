import { Nullable } from '../../types';

export interface PokemonMoveCardProps {
    moveName: string;

    moveLevel: number;

    // TODO: Convert to enum/type alias
    damageClass: string;

    attackValue: Nullable<number>;

    accuracyPercentage: Nullable<number>;

    powerPointsValue: Nullable<number>;
  }
