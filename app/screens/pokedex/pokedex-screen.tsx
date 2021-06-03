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
            <PokedexCard
              id={1}
              text="Bulbasaur"
              types={[PokemonType.Grass, PokemonType.Poison]}
            />
          </Col>
          <Col>
            <PokedexCard
              id={2}
              text="Ivysaur"
              types={[PokemonType.Grass, PokemonType.Poison]}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <PokedexCard
              id={3}
              text="Venasaur"
              types={[PokemonType.Grass, PokemonType.Poison]}
            />
          </Col>
          <Col>
            <PokedexCard
              id={4}
              preset="red"
              text="Charmander"
              types={[PokemonType.Fire]}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <PokedexCard
              id={5}
              preset="red"
              text="Charmeleon"
              types={[PokemonType.Fire]}
            />
          </Col>
          <Col>
            <PokedexCard
              id={6}
              preset="red"
              text="Charizard"
              types={[PokemonType.Fire]}
            />
          </Col>
        </Row>
      </Grid>
    </ScrollView>
  );
};
