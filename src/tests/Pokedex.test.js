import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import Pokemons from '../data';

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

    Pokemons.forEach((pokemon) => {
      const name = screen.getByText(pokemon.name);
      expect(name).toBeInTheDocument();
      userEvent.click(buttonNext);
    });
  });

  test('Teste se é mostrado apenas um Pokémon por vez.', () => {
    const img = screen.getByRole('img');

    expect(img).toBeDefined();
  });

  test('Teste se a Pokédex tem os botões de filtro.', () => {
    const buttonsType = screen.getAllByTestId('pokemon-type-button');
    const quantidade = 7;
    const type = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];

    expect(buttonsType).toHaveLength(quantidade);

    buttonsType.forEach((button, index) => {
      expect(button).toHaveTextContent(type[index]);
    });

    const buttonAll = screen.getByTestId('');
    expect(buttonAll).toHaveTextContent('All');
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    const buttonAll = screen.getByTestId('');
    expect(buttonAll).toHaveTextContent('All');

    userEvent.click(buttonAll);

    Pokemons.forEach((pokemon) => {
      const allPokemons = screen.getByText(pokemon.name);

      const buttonProx = screen.getByRole('button', { name: 'Próximo pokémon' });
      userEvent.click(buttonProx);

      expect(allPokemons).toBeInTheDocument();
    });
  });
});
