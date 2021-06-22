import React, { CSSProperties } from 'react';
import { StyleProp, TextStyle, View } from 'react-native';
import { Text } from '..';
import { color } from '../../theme';
import { Flex } from '../flex/flex';
import { PokemonMoveCardProps } from './pokemon-move-card.props';

// #region Styles
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

const statStyle: StyleProp<TextStyle> = {
  marginRight: 10,
};

const moveLevelStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.palette.white,
  padding: 5,
  borderRadius: 20,
  width: 12,
  height: 12,
  textAlign: 'center',
  marginRight: 8,
};
// #endregion

export const PokemonMoveCard = ({
  moveName,
  moveLevel,
  damageClass,
  attackValue,
  accuracyPercentage,
  powerPointsValue,
}: PokemonMoveCardProps) => {
  return (
    <View style={{ width: '85%', marginBottom: 15 }}>
      <div style={{ ...moveHeaderStyle, ...sharedStyles }}>
        <Text>
          <Flex style={{ alignItems: 'center' }}>
            <div style={moveLevelStyle}>
              {moveLevel || '-'}
            </div>
            {' '}
            {moveName}
          </Flex>
        </Text>
        <Text>{damageClass}</Text>
      </div>

      <div style={{ ...moveBodyStyle, ...sharedStyles }}>
        <Text style={statStyle}>{`Att: ${attackValue ?? 0}`}</Text>
        <Text style={statStyle}>{`Acc: ${accuracyPercentage ?? 0}%`}</Text>
        <Text style={statStyle}>{`PP: ${powerPointsValue ?? 0}`}</Text>
      </div>
    </View>
  );
};
