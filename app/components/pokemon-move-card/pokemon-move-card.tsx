import React, { CSSProperties } from 'react';
import { StyleProp, TextStyle, View } from 'react-native';
import { Text } from '..';
import { PokemonMoveCardProps } from './pokemon-move-card.props';

const sharedStyles: CSSProperties = {
  padding: 8,
};

const moveHeaderStyle: CSSProperties = {
  background: '#f1e49d',
  display: 'flex',
  justifyContent: 'space-between',
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
};

const moveBodyStyle: CSSProperties = {
  background: '#f1f1f1',
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
};

const statStyle: StyleProp<TextStyle> = {};

export const PokemonMoveCard = ({
  moveName,
  moveLevel,
  moveType,
  attackValue,
  accuracyPercentage,
  powerPointsValue,
}: PokemonMoveCardProps) => {
  return (
    <View style={{ width: '85%', marginBottom: 10 }}>
      <div style={{ ...moveHeaderStyle, ...sharedStyles }}>
        <Text>{`(${moveLevel}) ${moveName}`}</Text>
        <Text>{moveType}</Text>
      </div>

      <div style={{ ...moveBodyStyle, ...sharedStyles }}>
        <Text style={statStyle}>{`Att: ${attackValue}`}</Text>
        <Text style={statStyle}>{`Acc: ${accuracyPercentage}%`}</Text>
        <Text style={statStyle}>{`PP: ${powerPointsValue}`}</Text>
      </div>
    </View>
  );
};
