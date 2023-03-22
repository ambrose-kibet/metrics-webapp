import { screen, render } from '@testing-library/react';
import DetailsComponent from '../components/DetailsComponent';

describe('details component', () => {
  it('should  render properly on screen', () => {
    render(<DetailsComponent item="hello" title="world" />);
    const title = screen.getByText(/world/i);
    const item = screen.getByText(/hello/i);
    expect(title).toBeInTheDocument();
    expect(item).toBeInTheDocument();
  });
});
