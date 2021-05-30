import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { NavigationCard, Text, TextField } from '../../components';
import { padding } from '../../utils/react-native-helpers';
import Page from '../../components/page/page';

export const HomeScreen = () => {
  const [search, setSearch] = useState<string>('');

  return (
    <ScrollView testID="HomeScreen">
      <Page style={{ backgroundColor: 'red' }}>
        <Text preset="h3" style={{ marginTop: 100, marginBottom: 10 }}>What Pokemon are you looking for?</Text>

        <TextField
          preset="search"
          onChangeText={(value) => setSearch(value)}
          value={search}
          placeholderTx="homeScreen.searchPlaceholder"
          style={{ marginBottom: 20 }}
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
      </Page>
    </ScrollView>
  );
};
