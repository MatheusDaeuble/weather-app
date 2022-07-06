import { addDays } from 'date-fns';
import React from 'react';
import renderer from 'react-test-renderer';
import Weather from 'services/weatherApi/types/Weather';
import WeatherWeekForecast from 'services/weatherApi/types/WeatherWeekForecast';
import ShowWeatherTemplate from '../ShowWeatherTemplate';

const currentWeather: Weather = {
  city: 'Fortaleza',
  country: 'BR',
  timestamp: new Date('2022-06-07').getTime(),
  feelsLike: 25,
  temp: 24.5,
  tempMax: 28.9,
  tempMin: 20.2,
  status: 'nublado',
  illustration: 'cloud',
  icon: 'cloudy',
};

const forecastWeek: WeatherWeekForecast[] = new Array(8)
  .fill(null)
  .map((_, i) => ({
    timestamp: addDays(new Date('2022-06-06'), i).getTime(),
    min: 16.55 + i,
    max: 22.33 + i,
    icon: 'cloudy',
    illustration: 'cloud',
  }));

describe('ShowWeatherTemplate', () => {
  it('Default', () => {
    const component = renderer
      .create(
        <ShowWeatherTemplate
          currentWeather={currentWeather}
          forecastWeek={forecastWeek}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Current Weather Loading', () => {
    const component = renderer
      .create(
        <ShowWeatherTemplate
          currentWeather={null}
          forecastWeek={forecastWeek}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Forecast Loading', () => {
    const component = renderer
      .create(
        <ShowWeatherTemplate
          currentWeather={currentWeather}
          forecastLoading
          forecastWeek={null}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Refreshing', () => {
    const component = renderer
      .create(
        <ShowWeatherTemplate
          refreshing
          currentWeather={currentWeather}
          forecastWeek={forecastWeek}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
