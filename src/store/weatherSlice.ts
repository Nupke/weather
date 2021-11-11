import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWeather } from '../core';

interface IWeatherSlice {
  weather: IWeather[];
  weatherSaved: IWeather[];
}
const initialState: IWeatherSlice = {
  weather: [],
  weatherSaved: [],
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addWeather(state, action: PayloadAction<IWeather[]>) {
      // eslint-disable-next-line no-param-reassign
      state.weather = action.payload;
    },
    addSavedWeather(state, action: PayloadAction<IWeather>) {
      // eslint-disable-next-line no-param-reassign
      state.weatherSaved.push(action.payload);
    },
    addRemoveWeather(state, action: PayloadAction<IWeather[]>) {
      // eslint-disable-next-line no-param-reassign
      state.weatherSaved = action.payload;
    },
  },
});
