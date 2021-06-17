import { CSSProperties } from 'react';

export interface PokemonMoveCardProps {
    moveName: string;

    moveLevel: number;

    // TODO: Convert to enum/type alias
    moveType: string;

    attackValue: number;

    accuracyPercentage: number;

    powerPointsValue: number;
  }
