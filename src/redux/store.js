import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer from './currencies/currenciesSlIce';

const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
});
export default store;
