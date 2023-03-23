import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import Homepage from '../pages/Homepage';

const mockStore = configureStore([]);

describe('Homepage component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      currencies: {
        curencies: [
          {
            id: '1',
            name: 'Bitcoin',
            symbol: 'BTC',
            rank: '1',
          },
          {
            id: '2',
            name: 'Ethereum',
            symbol: 'ETH',
            rank: '2',
          },
        ],
      },
    });
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Homepage />
        </MemoryRouter>
      </Provider>,
    );
  });

  it('renders the correct header', () => {
    expect(
      screen.getByRole('heading', { name: 'Crypto-Currencies' }),
    ).toBeInTheDocument();
  });

  it('renders the correct number of cryptocurrencies', () => {
    expect(screen.getAllByTestId('home-container')).toHaveLength(2);
  });

  it('dispatches the getCrypto action on mount', () => {
    expect(store.dispatch).toHaveBeenCalledTimes(3);
    expect(store.dispatch).toHaveBeenCalled();
  });
});
