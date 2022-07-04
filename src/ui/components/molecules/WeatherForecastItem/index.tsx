import React from 'react';
import { isSameDay } from 'date-fns';
import { formatTemperature, formatWeekDay } from 'util/format';
import Icon from 'ui/components/atoms/Icon';
import { Container, Day, Temp, TempContainer } from './styles';
import { WeatherWeekForecast } from 'services/weatherApi/hooks/useWeatherApi copy';

interface WeatherForecastItemProps {
  data: WeatherWeekForecast;
}

const WeatherForecastItem = ({ data }: WeatherForecastItemProps) => {
  const isToday = isSameDay(data.timestamp, new Date().getTime());

  return (
    <Container>
      <Day variant={isToday ? 'h4' : 'h5'}>
        {isToday ? 'Hoje' : formatWeekDay(data.timestamp)}
      </Day>
      <Icon name={data.icon} size={18} />
      <TempContainer>
        <Icon name='chevron-up' color='warning' size={18} />
        <Temp>{formatTemperature(data.max)} </Temp>
        <Icon name='chevron-down' color='secondary' size={18} />
        <Temp>{formatTemperature(data.min)} </Temp>
      </TempContainer>
    </Container>
  );
};
export default WeatherForecastItem;
