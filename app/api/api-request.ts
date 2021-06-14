import axios, { AxiosResponse, AxiosRequestConfig, CancelToken } from 'axios';
import { HttpMethod } from '../enums';

export const apiRequest = <Response>(
  url: string,
  method: HttpMethod = HttpMethod.GET,
  body?: AxiosRequestConfig['data'],
  cancelToken?: CancelToken,
): Promise<AxiosResponse<Response>> => {
  const requestOptions: AxiosRequestConfig = {
    baseURL: 'https://pokeapi.co/api/v2',
    cancelToken,
  };

  if (method === HttpMethod.POST) {
    if (body) {
      requestOptions.data = body;
    }
  } else if (body) {
    requestOptions.params = body;
  }

  return axios(url, requestOptions);
};

export default apiRequest;
