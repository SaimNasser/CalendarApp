import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import eventReducer from './features/EventsSlice';

export const store = configureStore({
  reducer: {
    Event: eventReducer,
  },
  // middleware: (curryGetDefaultMiddleware) =>
  //   curryGetDefaultMiddleware().concat(openWeatherApi.middleware)
});