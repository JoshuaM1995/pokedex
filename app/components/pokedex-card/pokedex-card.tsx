import _ from 'lodash';
import * as React from 'react';
import { PropsWithChildren } from 'react';
import { Pressable, View } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { Text } from '..';
import {
  BASE_TEXT, TAG_TEXT, TAG_VIEW, viewPresets,
} from './pokedex-card.presets';
import { PokedexCardProps } from './pokedex-card.props';

export const PokedexCard = ({
  types,
  image,
  preset = 'green',
  tx,
  text,
  style: styleOverride,
  textStyle: textStyleOverride,
  children,
  ...pressableProps
}: PropsWithChildren<PokedexCardProps>) => {
  const viewStyle = viewPresets[preset] || viewPresets.primary;
  const viewStyles = [viewStyle, styleOverride];

  const content = tx || text
    ? <Text tx={tx} text={text} style={[BASE_TEXT, textStyleOverride]} />
    : children;

  return (
    <Pressable style={viewStyles} {...pressableProps}>
      <Grid>
        <Col>
          {content}

          {types.map((type) => (
            <View style={TAG_VIEW}>
              <Text style={TAG_TEXT}>{_.upperFirst(type)}</Text>
            </View>
          ))}
        </Col>
        <Col>Image here</Col>
      </Grid>
    </Pressable>
  );
};
