import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';

import { weatherSlice } from './weatherSlice';

/**
 * Application wide data storage
 */
export const store = configureStore({
  reducer: {
    weathers: weatherSlice.reducer,
  },
  middleware: [thunk],
});

/**
 * Data types
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
