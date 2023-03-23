import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import HeroComponent from '../components/HeroComponent';

const mockStore = configureStore([thunk]);

describe('hero component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      currencies: {
        searchParams: 'coin',
      },
    });

    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HeroComponent info="some title" />
        </MemoryRouter>
      </Provider>,
    );
  });
  it('should  render proprly on the screen', () => {
    const title = screen.getByText('some title');
    expect(title).toBeInTheDocument();
  });
});
