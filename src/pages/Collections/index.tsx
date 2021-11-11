import React, { Fragment, useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { WeatherCard } from '../../components/WeatherCard';
import { weatherSlice } from '../../store/weatherSlice';
import { store, useAppSelector } from '../../store';
import { IWeather } from '../../core';
import { useStyles } from './useStyles';

export const Collections: React.FC = () => {
  const classes = useStyles();
  const { addWeather } = weatherSlice.actions;
  const { weather: weathers } = useAppSelector((state) => state.weathers);

  const [weather, setWeather] = useState<IWeather[]>([]);

  useEffect(() => {
    if (weathers.length) {
      const saved = weathers.filter((item) => item.saved);
      setWeather(saved);
    }
  }, [weathers]);

  const handleSave = (id: number) => {
    const result = weather.map((item) => {
      if (item.id === id) {
        return { ...item, saved: !item.saved };
      }
      return item;
    });

    setWeather(result);
    store.dispatch(addWeather(result));
  };
  return (
    <Grid container direction="column" className={classes.root}>
      <Typography>Collections</Typography>

      {weather.length > 0 &&
        weather.map((element, index) => (
          <Fragment key={`${element.city}`}>
            <Grid item>
              <WeatherCard id={index} element={element} handleSave={handleSave} />
            </Grid>
          </Fragment>
        ))}

      {!weather.length && <Typography>Not found</Typography>}
    </Grid>
  );
};
