import React from 'react';
import { ScrollView } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { PokedexCard } from '../../components';
import { PokemonType } from '../../enum';

export const PokedexScreen = () => {
  return (
    <ScrollView testID="PokedexScreen" style={{ padding: 20 }}>
      <Grid>
        <Row>
          <Col>
            <PokedexCard text="Bulbasaur" types={[PokemonType.Grass, PokemonType.Poison]} image="" />
          </Col>
          <Col>
            <PokedexCard text="Ivysaur" types={[PokemonType.Grass, PokemonType.Poison]} image="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <PokedexCard text="Venasaur" types={[PokemonType.Grass, PokemonType.Poison]} image="" />
          </Col>
          <Col>
            <PokedexCard preset="red" text="Charmander" types={[PokemonType.Fire]} image="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <PokedexCard preset="red" text="Charmeleon" types={[PokemonType.Fire]} image="" />
          </Col>
          <Col>
            <PokedexCard preset="red" text="Charizard" types={[PokemonType.Fire]} image="" />
          </Col>
        </Row>
      </Grid>
    </ScrollView>
  );
};
