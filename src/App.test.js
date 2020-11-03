import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from "react-router-dom";

test('renders user at route /', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>);
  const userElement = screen.getByText('user');
  expect(userElement).toBeInTheDocument();
});

test('renders user at route /user/:id', () => {
  render(
    <MemoryRouter initialEntries={['/user/1']}>
      <App />
    </MemoryRouter>);
  const userElement = screen.getByText('user');
  expect(userElement).toBeInTheDocument();
});
