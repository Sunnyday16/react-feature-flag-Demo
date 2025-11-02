import { render, screen } from '@testing-library/react';
import App from './App';

test('renders getting started heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /getting started/i });
  expect(headingElement).toBeInTheDocument();
});
