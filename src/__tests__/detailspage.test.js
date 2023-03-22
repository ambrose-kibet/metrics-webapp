import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import DetailsPage from '../pages/DetailsPage';

const mockStore = configureStore([thunk]);

describe('DetailsPage', () => {
  let store;
  const id = 'bitcoin';

  beforeEach(() => {
    store = mockStore({
      currencies: {
        singleCrypto: {
          id,
          name: 'Bitcoin',
          symbol: 'BTC',
          rank: '1',
          changePercent24Hr: '0.1',
          priceUsd: '50000',
          supply: '10000000',
        },
      },
    });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/details/${id}`]}>
          <Routes>
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
  });

  it('should render the hero component', () => {
    const heroComponent = screen.getByText('single crypto info');
    expect(heroComponent).toBeInTheDocument();
  });

  it('should render the crypto name and rank', () => {
    const name = screen.getByText(/Bitcoin/i);
    const rank = screen.getByText(/rank/i);
    expect(name).toBeInTheDocument();
    expect(rank).toBeInTheDocument();
  });

  it('should dispatch the getSingleCrypto action', async () => {
    await waitFor(() => expect(store.dispatch).toHaveBeenCalledTimes(1));
    expect(store.dispatch).toHaveBeenCalled();
  });

  it('should render the crypto details', () => {
    const symbol = screen.getByText(/symbol/i);
    const changePercent = screen.getByText('change Percent 24Hr');
    const price = screen.getByText('price Usd');
    const supply = screen.getByText('supply');
    expect(symbol).toBeInTheDocument();
    expect(changePercent).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(supply).toBeInTheDocument();
  });
});
