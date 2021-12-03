import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';

describe('Teste o componente <Pokedex.js />', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });
  test('Teste se página contém um heading h2 com o texto Encountered pokémons', () => {
    const titlePokedex = screen.getAllByRole('heading', {
      name: /Encountered pokémons/i,
      level: 2 });
    expect(titlePokedex).toBeDefined();
  });

  test('Teste se é exibido o próximo Pokémon quando o botão Próximo é clicado.', () => {
    const buttonNext = screen.getByText(/próximo pokémon/i);
    expect(buttonNext).toBeInTheDocument();

    userEvent.click(buttonNext);
    const namePokemon = screen.getByText(/charmander/i); // segundo pokemon

    pokemons.map((pokemon) => (console.log(pokemon.name)));

    expect(namePokemon).toBeInTheDocument();

  // O primeiro Pokémon da lista deve ser mostrado ao clicar no botão, se estiver no último Pokémon da lista;
  });

  test('Teste se é mostrado apenas um Pokémon por vez.', () => {
  });
});
