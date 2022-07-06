import React from 'react';
import renderer from 'react-test-renderer';
import WeatherWeekForecast from 'services/weatherApi/types/WeatherWeekForecast';
import WeatherForecastItem from '../WeatherForecastItem';

const defaultItem: WeatherWeekForecast = {
  timestamp: Date.now(),
  min: 16.55,
  max: 22.33,
  icon: 'cloudy',
  illustration: 'cloud',
};

describe('WeatherForecastItem Molecule', () => {
  it('Today', () => {
    const component = renderer
      .create(<WeatherForecastItem data={defaultItem} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Not today', () => {
    const component = renderer
      .create(
        <WeatherForecastItem
          data={{
            ...defaultItem,
            timestamp: new Date('2022-06-05').getTime(),
          }}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
