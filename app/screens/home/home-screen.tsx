import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { useNavigation } from '@react-navigation/native';
import {
  NavigationCard, Section as NavigationSection, Section as NewsSection, Text, TextField,
} from '../../components';
import { padding } from '../../utils/react-native-helpers';
import { color } from '../../theme';
import { RouteName } from '../../navigators';

export const HomeScreen = () => {
  const [search, setSearch] = useState<string>('');
  const navigation = useNavigation();

  return (
    <ScrollView testID="HomeScreen" style={{ backgroundColor: '#F2F1F5' }}>
      <NavigationSection style={{
        backgroundColor: color.background,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        ...padding(0, 15, 50, 15),
      }}
      >
        <Text preset="h3" style={{ marginTop: 25, marginBottom: 10, paddingLeft: 15 }}>
          What Pokemon are you looking for?
        </Text>

        <TextField
          preset="search"
          onChangeText={(value) => setSearch(value)}
          value={search}
          placeholderTx="homeScreen.searchPlaceholder"
          style={{ marginBottom: 20 }}
        />

        <Grid style={{ ...padding(10) }}>
          <Col style={{ paddingRight: 10 }}>
            <NavigationCard preset="green" onPress={() => navigation.navigate(RouteName.PokedexIndex)}>Pokedex</NavigationCard>
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
      </NavigationSection>

      <NewsSection style={{ ...padding(35, 15) }}>
        <Grid style={{ justifyContent: 'space-between' }}>
          <Col><Text preset="h5">Pokemon News</Text></Col>
          <Col><Text>View All</Text></Col>
        </Grid>
      </NewsSection>
    </ScrollView>
  );
};
