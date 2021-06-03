import React from 'react';
import { ScrollView } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { PokedexCard } from '../../components';
import { PokemonType } from '../../enum';

export const PokedexScreen = () => {
  return (
    <ScrollView testID="PokedexScreen" style={{ padding: 20, paddingBottom: 10 }}>
      <Grid>
        <Row>
          <Col style={{ paddingRight: 5, paddingBottom: 10 }}>
            <PokedexCard
              id={1}
              preset="green"
              text="Bulbasaur"
              types={[PokemonType.Grass, PokemonType.Poison]}
            />
          </Col>
          <Col style={{ paddingLeft: 5, paddingBottom: 10 }}>
            <PokedexCard
              id={2}
              preset="green"
              text="Ivysaur"
              types={[PokemonType.Grass, PokemonType.Poison]}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ paddingRight: 5, paddingBottom: 10 }}>
            <PokedexCard
              id={3}
              preset="green"
              text="Venasaur"
              types={[PokemonType.Grass, PokemonType.Poison]}
            />
          </Col>
          <Col style={{ paddingLeft: 5, paddingBottom: 10 }}>
            <PokedexCard
              id={4}
              preset="red"
              text="Charmander"
              types={[PokemonType.Fire]}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ paddingRight: 5, paddingBottom: 10 }}>
            <PokedexCard
              id={5}
              preset="red"
              text="Charmeleon"
              types={[PokemonType.Fire]}
            />
          </Col>
          <Col style={{ paddingLeft: 5, paddingBottom: 10 }}>
            <PokedexCard
              id={6}
              preset="red"
              text="Charizard"
              types={[PokemonType.Fire]}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ paddingRight: 5, paddingBottom: 10 }}>
            <PokedexCard
              id={7}
              preset="blue"
              text="Squirtle"
              types={[PokemonType.Water]}
            />
          </Col>
          <Col style={{ paddingLeft: 5, paddingBottom: 10 }}>
            <PokedexCard
              id={8}
              preset="blue"
              text="Wartortle"
              types={[PokemonType.Water]}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ paddingRight: 5, paddingBottom: 10 }}>
            <PokedexCard
              id={9}
              preset="blue"
              text="Blastoise"
              types={[PokemonType.Water]}
            />
          </Col>
        </Row>
      </Grid>
    </ScrollView>
  );
};
