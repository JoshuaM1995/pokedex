import _ from 'lodash';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { useQuery } from 'react-query';
import { QueryKey } from '../../api';
import { getPokemonByName, getPokemonList, getPokemonSpeciesById } from '../../api/endpoints/pokemon';
import { PokedexCard } from '../../components';
import { PokemonType } from '../../enums';
import { useQueriesTyped as useQueries } from '../../types';

const RESULT_LIMIT = 10;

export const PokedexScreen = () => {
  const [page, setPage] = useState(0);

  const pokemonListQuery = useQuery(
    `${QueryKey.PokemonList}_${page}`,
    () => getPokemonList(RESULT_LIMIT, page * RESULT_LIMIT),
    { keepPreviousData: true },
  );
  const pokemonListResults = pokemonListQuery.data?.data.results;
  const pokemonResultsQueries = useQueries(
    pokemonListResults?.map(({ name }) => {
      return {
        queryKey: `${QueryKey.Pokemon}_${name}_${page}`,
        queryFn: async () => {
          const pokemonInfo = await getPokemonByName(name);
          const pokemonSpecies = await getPokemonSpeciesById(pokemonInfo.data.id);

          return {
            info: pokemonInfo.data,
            species: pokemonSpecies.data,
          };
        },
        enabled: !!pokemonListResults,
        keepPreviousData: true,
      };
    }) ?? [],
  ).filter(({ data }) => !!data);
  const pokemonResultsChunks = _.chunk(pokemonResultsQueries, 2);

  return (
    <ScrollView
      testID="PokedexScreen"
      style={{ padding: 20, paddingBottom: 10 }}
    >
      <Grid>
        {pokemonResultsChunks.map((chunks, i) => {
          return (
          // eslint-disable-next-line react/no-array-index-key
            <Row key={i}>
              {chunks.map(({ data: { info: { id, name, types }, species } }) => {
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
