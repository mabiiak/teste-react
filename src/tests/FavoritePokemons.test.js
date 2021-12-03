import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoritePokemon from '../components/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test(`Teste se é exibido na tela 'No favorite pokemon found',
  caso não hajam Pokemons favoritos.`, () => {
    render(<FavoritePokemon />);
    const textNotFound = screen.getByText(/No favorite pokemon found/i);
    expect(textNotFound).toBeInTheDocument();
  });

  test('Teste se é exibido todos os cards de pokémons favoritados.', () => {
    const { history } = renderWithRouter(<App />);

    const textDetail = screen.getByText(/more details/i);
    expect(textDetail).toBeInTheDocument();
    userEvent.click(textDetail);

    const textFavorite = screen.getByText(/Pokémon favoritado/i);
    expect(textFavorite).toBeInTheDocument();
    userEvent.click(textFavorite);

    history.push('/favorites');
    expect(history.location.pathname).toEqual('/favorites');

    const favoritePokemon = screen.getByText(/pikachu/i);
    expect(favoritePokemon).toBeInTheDocument();
  });
});

// Simulamos a navegação que um usuario teria para favoritar um pokemon
// Problemas com os commits...
