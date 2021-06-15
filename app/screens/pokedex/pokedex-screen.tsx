import _ from 'lodash';
import React from 'react';
import { ScrollView } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { useQuery } from 'react-query';
import { QueryKey } from '../../api';
import { getPokemonByName, getPokemonSpeciesByName, getPokemonList } from '../../api/endpoints/pokemon';
import { PokedexCard } from '../../components';
import { PokemonType } from '../../enums';
import { useQueriesTyped as useQueries } from '../../types';

export const PokedexScreen = () => {
  const { data: pokemonList } = useQuery(QueryKey.PokemonList, () => getPokemonList(10));
  const pokemonListResults = pokemonList?.data.results;
  const pokemonResults = useQueries(
    pokemonListResults?.map(({ name }) => {
      return {
        queryKey: `${QueryKey.Pokemon}_${name}`,
        queryFn: async () => {
          const pokemonInfo = await getPokemonByName(name);
          const pokemonSpecies = await getPokemonSpeciesByName(pokemonInfo.data.id);

          return {
            info: pokemonInfo.data,
            species: pokemonSpecies.data,
          };
        },
        enabled: !!pokemonListResults,
      };
    }) ?? [],
  ).filter(({ data }) => !!data);
  const pokemonResultsChunks = _.chunk(pokemonResults, 2);

  return (
    <ScrollView testID="PokedexScreen" style={{ padding: 20, paddingBottom: 10 }}>
      <Grid>
        {pokemonResultsChunks.map((chunks) => {
          return (
            <Row>
              {chunks.map(({ data: { info: { id, name, types }, species } }) => {
                console.log('color', { species });
                return (
                  <Col key={id} style={{ paddingRight: 5, paddingBottom: 10 }}>
                    <PokedexCard
                      id={id}
                      preset={species.color.name}
                      pokemonName={_.capitalize(name)}
                      types={types.map(({ type }) => type.name as PokemonType)}
                    />
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </Grid>
    </ScrollView>
  );
};
