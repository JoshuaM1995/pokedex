import { PokemonObjectFull, PokemonObjectSimplified, PokemonSpeciesObjectFull } from '../types';
import { HttpMethod } from '../../enums';
import apiRequest from '../api-request';

export const getPokemonList = async (limit?: number, offset?: number) => {
  return apiRequest<{results: PokemonObjectSimplified[]}>('/pokemon', HttpMethod.GET, { limit, offset });
};

export const getPokemonByName = (name: string) => {
  return apiRequest<PokemonObjectFull>(`/pokemon/${name}`, HttpMethod.GET);
};

export const getPokemonSpeciesByName = (id: number) => {
  return apiRequest<PokemonSpeciesObjectFull>(`/pokemon-species/${id}`, HttpMethod.GET);
};
