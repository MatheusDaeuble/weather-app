import React from 'react';
import Loading from 'ui/components/atoms/Loading';
import { WeekList, Empty } from './styles';
import { WeatherWeekForecast } from 'services/weatherApi/hooks/useWeatherApi copy';
import WeatherForecastItem from 'ui/components/molecules/WeatherForecastItem';

interface WeatherForecastListProps {
  data?: WeatherWeekForecast[];
  loading?: boolean;
}

const WeatherForecastList = ({
  data = [],
  loading = false,
}: WeatherForecastListProps) => {
  if (loading && !data.length) return <Loading />;

  return (
    <WeekList
      data={data || []}
      ListEmptyComponent={<Empty />}
      keyExtractor={({ timestamp }) => timestamp.toString()}
      renderItem={({ item }) => <WeatherForecastItem data={item} />}
    />
  );
};

export default WeatherForecastList;
