import React, { useContext } from 'react';
import WeatherContext from 'contexts/Weather';
import ShowWeatherTemplate from 'ui/components/templates/ShowWeatherTemplate';

const HomeScreen = () => {
  const { current, forecastWeek } = useContext(WeatherContext);

  const doRefresh = () => {
    current.refetch();
    forecastWeek.refetch();
  };

  return (
    <ShowWeatherTemplate
      currentWeather={current.data}
      forecastWeek={forecastWeek.data}
      forecastLoading={forecastWeek.isFetching}
      refreshing={current.isFetching || forecastWeek.isFetching}
      onRefresh={doRefresh}
    />
  );
};

export default HomeScreen;
