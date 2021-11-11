import React, { Fragment, useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { store, useAppSelector } from 'store';
import axios from 'axios';

import { API_KEY, IWeather } from 'core';
import { WeatherCard } from 'components/WeatherCard';
import { weatherSlice } from '../../store/weatherSlice';

export const SearchCity: React.FC = () => {
  const { addWeather } = weatherSlice.actions;
  const { weather: weathers } = useAppSelector((state) => state.weathers);

  const [weather, setWeather] = useState<IWeather[]>([]);
  const [city, setCity] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (weathers.length) {
      setWeather(weathers);
    }
  }, [weathers]);

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setCity(event.target.value);
  };

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

  const handleFetchData = async () => {
    setLoading(true);
    await axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`)
      .then((res) => {
        const response: IWeather = {
          id: weather.length,
          city: res.data.name,
          country: res.data.sys.country,
          temperature: Math.round(res.data.main.temp - 273.15),
          description: res.data.weather[0].description,
          windSpeed: res.data.wind.speed,
          cloud: res.data.clouds.all,
          humidity: res.data.main.humidity,
          main: res.data.weather[0].main,
          error: false,
        };
        const result = [...weather, response];

        store.dispatch(addWeather(result));
        setWeather(result);
        setCity('');
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setCity('');
        setLoading(false);
      });
  };
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <TextField
          fullWidth
          id="standard-basic"
          label="City"
          variant="outlined"
          value={city}
          error={error}
          onChange={handleCityChange}
        />
      </Grid>
      <Grid item>
        <Button
          fullWidth
          color="primary"
          variant="outlined"
          onClick={handleFetchData}
          disabled={loading}
        >
          {loading && '...Loading'}
          {!loading && 'Get City'}
        </Button>
      </Grid>

      {weather.length > 0 &&
        weather.map((element, index) => (
          <Fragment key={`${element.city}`}>
            <Grid item>
              <WeatherCard id={index} element={element} handleSave={handleSave} />
            </Grid>
          </Fragment>
        ))}
    </Grid>
  );
};
