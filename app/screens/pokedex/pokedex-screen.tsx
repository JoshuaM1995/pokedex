import React from 'react';
import { ScrollView } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { useQuery } from 'react-query';
import { QueryKey } from '../../api';
import { getPokemonList } from '../../api/endpoints/pokemon';
import { PokedexCard } from '../../components';
import { PokemonType } from '../../enums';

export const PokedexScreen = () => {
  const query = useQuery(QueryKey.Pokemon, () => getPokemonList(50));
  console.log('pokedex-screen', query.data?.data.results);

  return (
    <ScrollView testID="PokedexScreen" style={{ padding: 20, paddingBottom: 10 }}>
      <Grid>
        <Row>
          <Col style={{ paddingRight: 5, paddingBottom: 10 }}>
            <PokedexCard
              id={1}
              preset="green"
              pokemonName="Bulbasaur"
              types={[PokemonType.Grass, PokemonType.Poison]}
            />
          </Col>
          <Col style={{ paddingLeft: 5, paddingBottom: 10 }}>
            <PokedexCard
              id={2}
              preset="green"
              pokemonName="Ivysaur"
              types={[PokemonType.Grass, PokemonType.Poison]}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ paddingRight: 5, paddingBottom: 10 }}>
            <PokedexCard
              id={3}
              preset="green"
              pokemonName="Venasaur"
              types={[PokemonType.Grass, PokemonType.Poison]}
            />
          </Col>
          <Col style={{ paddingLeft: 5, paddingBottom: 10 }}>
            <PokedexCard
              id={4}
              preset="red"
              pokemonName="Charmander"
              types={[PokemonType.Fire]}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ paddingRight: 5, paddingBottom: 10 }}>
            <PokedexCard
              id={5}
              preset="red"
              pokemonName="Charmeleon"
              types={[PokemonType.Fire]}
            />
          </Col>
          <Col style={{ paddingLeft: 5, paddingBottom: 10 }}>
            <PokedexCard
              id={6}
              preset="red"
              pokemonName="Charizard"
              types={[PokemonType.Fire]}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ paddingRight: 5, paddingBottom: 10 }}>
            <PokedexCard
              id={7}
              preset="blue"
              pokemonName="Squirtle"
              types={[PokemonType.Water]}
            />
          </Col>
          <Col style={{ paddingLeft: 5, paddingBottom: 10 }}>
            <PokedexCard
              id={8}
              preset="blue"
              pokemonName="Wartortle"
              types={[PokemonType.Water]}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ paddingRight: 5, paddingBottom: 10 }}>
            <PokedexCard
              id={9}
              preset="blue"
              pokemonName="Blastoise"
              types={[PokemonType.Water]}
            />
          </Col>
        </Row>
      </Grid>
    </ScrollView>
  );
};
