import axios from 'axios';
import { WEATHER_API_URL } from '@env';
import {
  addApiKey,
  addDefaultConfig,
  responseParseToCamelCase,
} from './util/interceptors';

/*
 * Official Documentation: https://openweathermap.org/api/one-call-api
 */
const weatherApi = axios.create({
  baseURL: WEATHER_API_URL,
});

// Request's interceptors
weatherApi.interceptors.request.use(addApiKey);
weatherApi.interceptors.request.use(addDefaultConfig);

// Response's interceptors
weatherApi.interceptors.response.use(responseParseToCamelCase);

export default weatherApi;
