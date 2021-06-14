import { HttpMethod } from '../../enums';
import apiRequest from '../api-request';

export const getPokemonList = async (limit?: number, offset?: number) => {
  return apiRequest<{results: any[]}>('/pokemon', HttpMethod.GET, { limit, offset });
};
