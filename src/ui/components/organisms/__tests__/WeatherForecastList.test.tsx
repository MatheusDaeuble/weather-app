import { addDays } from 'date-fns';
import React from 'react';
import renderer from 'react-test-renderer';
import WeatherWeekForecast from 'services/weatherApi/types/WeatherWeekForecast';
import WeatherForecastList from '../WeatherForecastList';

const defaultData: WeatherWeekForecast[] = new Array(8)
  .fill(null)
  .map((_, i) => ({
    timestamp: addDays(new Date('2022-06-06'), i).getTime(),
    min: 16.55 + i,
    max: 22.33 + i,
    icon: 'cloudy',
    illustration: 'cloud',
  }));

describe('WeatherForecastList Organism', () => {
  it('Default', () => {
    const component = renderer
      .create(<WeatherForecastList data={defaultData} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Empty', () => {
    const component = renderer
      .create(<WeatherForecastList data={[]} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Loading', () => {
    const component = renderer
      .create(<WeatherForecastList data={[]} loading />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Refreshing', () => {
    const component = renderer
      .create(<WeatherForecastList data={defaultData} loading />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
