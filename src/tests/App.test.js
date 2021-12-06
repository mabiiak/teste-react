import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <App.js />', () => {
  test('Teste se o topo, contém um conjunto fixo de links de navegação.', () => {
    renderWithRouter(<App />);
    const textHome = screen.getByText(/Home/i);
    const textAbout = screen.getByText(/about/i);
    const textFavorite = screen.getByText(/favorite pokémons/i);

    expect(textHome).toBeInTheDocument();
    expect(textAbout).toBeInTheDocument();
    expect(textFavorite).toBeInTheDocument();
  });

  test('Teste se ao clicar em Home, a aplicação é redirecionada para URL / .', () => {
    const { history } = renderWithRouter(<App />);

    const home = screen.getByText(/Home/i);
    userEvent.click(home);

    expect(history.location.pathname).toEqual('/');
  });

  test('Teste se ao clicar em About, a aplicação é redirecionada URL /about.', () => {
    const { history } = renderWithRouter(<App />);

    const about = screen.getByText(/about/i);
    userEvent.click(about);

    expect(history.location.pathname).toEqual('/about');
  });

  test('Teste se ao clicar em Favoritados, é redirecionada para URL /favorites.', () => {
    const { history } = renderWithRouter(<App />);

    const favorite = screen.getByText(/favorite/i);
    userEvent.click(favorite);

    expect(history.location.pathname).toEqual('/favorites');
  });

  test('Teste se uma URL diferente é direcionada para a para a página Not Found.', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/a');

    const notFound = screen.getByText(/not found/i);

    expect(notFound).toBeInTheDocument();
  });
});
