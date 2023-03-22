import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SingleCurrency from '../components/SIngleCurrency';

describe('single currency', () => {
  it('should render proprtly on the screen', () => {
    render(
      <MemoryRouter>
        <SingleCurrency
          id="bitcoin"
          name="bitcoin"
          rate="0.636534525627277282"
          symbolImg="https://coinicons-api.vercel.app/api/icon/btc"
        />
      </MemoryRouter>,
    );
    const name = screen.getByText(/bitcoin/i);
    const rate = screen.getByText(/0.636534525627277282/i);
    expect(name).toBeInTheDocument();
    expect(rate).toBeInTheDocument();
  });
});
