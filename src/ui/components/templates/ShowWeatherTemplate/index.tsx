import React, { useMemo, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import WeatherForecastList from 'ui/components/organisms/WeatherForecastList';
import Typography from 'ui/components/atoms/Typography';
import Loading from 'ui/components/atoms/Loading';
import SafeArea from 'ui/containers/SafeArea';
import Weather from 'services/weatherApi/types/Weather';
import WeatherWeekForecast from 'services/weatherApi/types/WeatherWeekForecast';
import {
  Container,
  WeekContainer,
  CurrentWeatherContainer,
  Temperature,
  Location,
  LocalTime,
  Status,
  Content,
  WeatherIllustration,
  WeatherIllustrationContainer,
  Description,
  RefreshIcon,
  Refreshing,
  RefreshContainer,
} from './styles';
import { formatWeather } from './util';

interface ShowWeatherTemplateProps {
  currentWeather: Weather;
  forecastWeek: WeatherWeekForecast[];
  forecastLoading?: boolean;
  refreshing?: boolean;
  onRefresh?: () => void;
}

const ShowWeatherTemplate = ({
  currentWeather,
  forecastWeek,
  forecastLoading = false,
  refreshing = false,
  onRefresh = () => {},
}: ShowWeatherTemplateProps) => {
  const [height, setHeight] = useState(0);

  const handleHeight = ({ nativeEvent }: LayoutChangeEvent) =>
    setHeight(nativeEvent.layout.height);

  const { description, date, location, temp } = useMemo(
    () => formatWeather(currentWeather),
    [currentWeather]
  );

  return (
    <>
      <SafeArea color='primary' isFlex={false} />
      <SafeArea color={currentWeather ? 'white' : 'primary'}>
        <Container>
          {currentWeather ? (
            <>
              <CurrentWeatherContainer>
                <RefreshContainer>
                  {refreshing ? (
                    <Refreshing />
                  ) : (
                    <RefreshIcon name='sync' onPress={onRefresh} />
                  )}
                </RefreshContainer>
                <Location>{location}</Location>
                <LocalTime>{date}</LocalTime>
                <Temperature>{temp}</Temperature>
                <Content>
                  <WeatherIllustrationContainer finalHeight={height}>
                    <WeatherIllustration
                      name={currentWeather.illustration}
                      onLayout={handleHeight}
                    />
                  </WeatherIllustrationContainer>
                  <Status>{currentWeather.status}</Status>
                  <Description>{description}</Description>
                </Content>
              </CurrentWeatherContainer>
              <WeekContainer>
                <Typography variant='h4'>Previsão da semana</Typography>
                <WeatherForecastList
                  data={forecastWeek}
                  loading={forecastLoading}
                />
              </WeekContainer>
            </>
          ) : (
            <Loading color='white' />
          )}
        </Container>
      </SafeArea>
    </>
  );
};

export default ShowWeatherTemplate;
