import React from 'react';
import { Box, Card, Typography } from '@material-ui/core';
import { SaveOutlined } from '@material-ui/icons';

import {
  WiCelsius,
  WiCloud,
  WiCloudy,
  WiDayHaze,
  WiHumidity,
  WiRain,
  WiSnow,
  WiStrongWind,
} from 'react-icons/wi';
import { IWeather } from 'core';

import { useStyles } from './useStyle';
import { CIconButton } from '../CButton';

interface WeatherCardProps {
  id: number;
  element: IWeather;
  handleSave: (id: number) => void;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({
  id,
  element,
  handleSave,
}: WeatherCardProps) => {
  const classes = useStyles();

  let weather: React.ReactNode;
  if (element.main === 'Clouds') {
    weather = <WiCloudy size={150} />;
  } else if (element.main === 'Rain') {
    weather = <WiRain size={150} />;
  } else if (element.main === 'Snow') {
    weather = <WiSnow size={150} />;
  } else {
    weather = <WiDayHaze size={150} />;
  }

  return (
    <Card key={id} elevation={2} className={classes.root}>
      <Box>
        <Typography>City</Typography>
        <Typography variant="h2">{element.city}</Typography>
        <Box>
          <CIconButton
            direction="row"
            title={`${element.temperature}`}
            icon={
              <Box>
                <WiCelsius />
                {weather}
              </Box>
            }
          />
        </Box>
      </Box>
      <Box className={classes.contentWrapper}>
        <CIconButton title="Precipitation" subTitle={`${element.cloud} %`} icon={<WiCloud />} />
        <CIconButton title="Wind" subTitle={`${element.windSpeed} km/h`} icon={<WiStrongWind />} />
        <CIconButton title="Humidity" subTitle={`${element.humidity} %`} icon={<WiHumidity />} />
      </Box>

      <Box className={classes.contentWrapper}>
        <CIconButton
          title={element.saved ? 'Saved' : 'Save'}
          icon={<SaveOutlined />}
          onClick={() => handleSave(element.id)}
        />
      </Box>
    </Card>
  );
};
