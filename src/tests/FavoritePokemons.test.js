import React from 'react';
import { screen, render } from '@testing-library/react';
import FavoritePokemon from '../components/FavoritePokemons';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test('Teste qual o texto é exibido.', () => {
    // Acessar os elementos da tela ----> screen
    render(<FavoritePokemon />);
    // Interagir com os elementos
    const textNotFound = screen.getByText(/No favorite pokemon found/i);
    // Fazer os testes ----> jest
    expect(textNotFound).toBeInTheDocument();


  });
});
