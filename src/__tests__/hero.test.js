import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeroComponent from '../components/HeroComponent';

describe('hero component', () => {
  it('should  render proprly on the screen', () => {
    render(
      <MemoryRouter>
        <HeroComponent info="some title" />
      </MemoryRouter>,
    );
    const title = screen.getByText('some title');
    expect(title).toBeInTheDocument();
  });
});
