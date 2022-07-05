import React from 'react';
import Loading from 'ui/components/atoms/Loading';
import { WeekList, Empty } from './styles';
import WeatherForecastItem from 'ui/components/molecules/WeatherForecastItem';
import WeatherWeekForecast from 'services/weatherApi/types/WeatherWeekForecast';

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
