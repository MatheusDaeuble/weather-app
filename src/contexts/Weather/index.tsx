import React, { createContext, useContext } from 'react';
import { Accuracy, getCurrentPositionAsync } from 'expo-location';
import { useQuery, UseQueryResult } from 'react-query';
import PermissionsContext from 'contexts/Permissions';
import useToast from 'hooks/useToast';
import { fetchCurrentWeather } from 'services/weatherApi/features/fetchCurrentWeather';
import { fetchWeekForecast } from 'services/weatherApi/features/fetchWeekForecast';
import Weather from 'services/weatherApi/types/Weather';
import WeatherWeekForecast from 'services/weatherApi/types/WeatherWeekForecast';
import IllustrationPageTemplate from 'ui/components/templates/IllustrationPageTemplate';

interface WeatherContextData {
  current: UseQueryResult<Weather>;
  forecastWeek: UseQueryResult<WeatherWeekForecast[]>;
}

const WeatherContext = createContext<WeatherContextData>(
  {} as WeatherContextData
);

const INTERVAL_TO_REFRESH = 60 * 1000 * 1; // 1 Minute

const useWeather = (): WeatherContextData => {
  const { location } = useContext(PermissionsContext);
  const { addToast } = useToast();

  const getCurrentPosition = async () => {
    if (location.granted) {
      const { coords } = await getCurrentPositionAsync({
        accuracy: Accuracy.Low,
      });
      return coords;
    }
  };

  const handleFetchCurrentWeather = async () => {
    const coords = await getCurrentPosition();
    if (coords) {
      const response = await fetchCurrentWeather(coords);
      return response;
    }
  };

  const handleFetchForecastWeek = async () => {
    const coords = await getCurrentPosition();
    if (coords) {
      const response = await fetchWeekForecast(coords);
      return response;
    }
  };

  const current = useQuery('weather', handleFetchCurrentWeather, {
    refetchInterval: INTERVAL_TO_REFRESH,
    onError: () =>
      addToast({ type: 'error', content: 'Ocorreu um erro inesperado!' }),
  });

  const forecastWeek = useQuery('forecast-week', handleFetchForecastWeek, {
    refetchInterval: INTERVAL_TO_REFRESH,
    onError: () =>
      addToast({
        type: 'error',
        content: 'Erro ao carregar a previs??o semanal',
      }),
  });

  return { current, forecastWeek };
};

export const withWeatherContext = WrappedComponent => {
  const WrapperComponent = props => {
    const weather = useWeather();

    if (weather.current.isFetched && !weather.current.data) {
      return (
        <IllustrationPageTemplate
          title='Ops!'
          illustration='error'
          description='Ocorreu um erro ao tentar carregar suas informa????es clim??ticas, por favor verifique sua conex??o ou tente novamente em breve.'
          button={{
            onPress: weather.current.refetch,
            label: 'Tentar novamente',
            loading: weather.current.isFetching,
          }}
        />
      );
    }

    return (
      <WeatherContext.Provider value={weather}>
        <WrappedComponent {...props} />
      </WeatherContext.Provider>
    );
  };
  return WrapperComponent;
};

export default WeatherContext;
