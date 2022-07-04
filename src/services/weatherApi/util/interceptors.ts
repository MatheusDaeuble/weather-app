import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { WEATHER_API_KEY } from '@env';
import weatherApiConfig from 'config/weatherApi';
import { camelizeKeys } from 'humps';

export const addApiKey = (request: AxiosRequestConfig): AxiosRequestConfig => {
  request.params = request.params || {};
  request.params.appid = request.params.appid || WEATHER_API_KEY;
  return request;
};

export const addDefaultConfig = (
  request: AxiosRequestConfig
): AxiosRequestConfig => {
  request.params = request.params || {};
  request.params.lang = request.params.lang || weatherApiConfig.lang;
  request.params.units = request.params.units || weatherApiConfig.units;
  return request;
};

export const responseParseToCamelCase = (
  response: AxiosResponse
): AxiosRequestConfig => {
  response.data = camelizeKeys(response.data);
  return response;
};
