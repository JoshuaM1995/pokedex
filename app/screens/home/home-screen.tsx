import React, { useState } from 'react';
import { View } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { NavigationCard, Text, TextField } from '../../components';
import { padding } from '../../utils/react-native-helpers';

export const HomeScreen = () => {
  const [search, setSearch] = useState<any>();

  return (
    <View testID="HomeScreen">
      <Text preset="header">What Pokemon are you looking for?</Text>

      <TextField
        onChangeText={(value) => setSearch(value)}
        value={search}
        placeholderTx="homeScreen.searchPlaceholder"
      />

      <Grid style={{ ...padding(10) }}>
        <Col style={{ paddingRight: 10 }}>
          <NavigationCard preset="green">Pokedex</NavigationCard>
        </Col>
        <Col>
          <NavigationCard preset="red">Moves</NavigationCard>
        </Col>
      </Grid>

      <Grid style={{ ...padding(10) }}>
        <Col style={{ paddingRight: 10 }}>
          <NavigationCard preset="blue">Abilities</NavigationCard>
        </Col>
        <Col>
          <NavigationCard preset="yellow">Items</NavigationCard>
        </Col>
      </Grid>

      <Grid style={{ ...padding(10) }}>
        <Col style={{ paddingRight: 10 }}>
          <NavigationCard preset="purple">Locations</NavigationCard>
        </Col>
        <Col>
          <NavigationCard preset="brown">Type Charts</NavigationCard>
        </Col>
      </Grid>
    </View>
  );
};
