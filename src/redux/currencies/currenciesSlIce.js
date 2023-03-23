import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.coincap.io/v2/assets';
const initialState = {
  curencies: [],
  isLoading: false,
  singleCrypto: {},
  searchParams: '',
};

export const getCrypto = createAsyncThunk(
  'currencies/getcrypto',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const getSingleCrypto = createAsyncThunk(
  'currencies/getSinglecrypto',
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`https://api.coincap.io/v2/assets/${id}`);
      const data = await response.json();

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const currencies = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    filterItems: (state, { payload }) => {
      const newItems = state.curencies.filter((item) => item.name.includes(payload.toLowerCase()));
      return { ...state, curencies: newItems };
    },
    updateSearch: (state, { payload }) => ({ ...state, searchParams: payload }),
  },

  extraReducers: (builder) => {
    builder.addCase(getCrypto.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getCrypto.fulfilled, (state, { payload }) => {
      const newItems = payload.map(({
        id, symbol, rank, name,
      }) => ({
        name: name.toLowerCase(),
        rank,
        id,
        symbol,
      }));
      return { ...state, curencies: newItems, isLoading: false };
    });
    builder.addCase(getCrypto.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));

    builder.addCase(getSingleCrypto.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getSingleCrypto.fulfilled, (state, { payload }) => {
      const {
        id,
        symbol,
        rank,
        name,
        supply,
        maxSupply,
        priceUsd,
        changePercent24Hr,
      } = payload;
      const newItem = {
        name,
        rank,
        id,
        symbol: symbol.toLowerCase(),
        supply,
        maxSupply,
        priceUsd,
        changePercent24Hr,
      };
      return { ...state, singleCrypto: newItem, isLoading: false };
    });
    builder.addCase(getSingleCrypto.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
  },
});
export const { filterItems, updateSearch } = currencies.actions;
export default currencies.reducer;
