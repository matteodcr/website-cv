import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App.tsx';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bienvenue/i);
  expect(linkElement).toBeInTheDocument();
});
