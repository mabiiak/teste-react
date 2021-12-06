import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import Pokemons from '../data';

const types = ['All', 'Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];

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

    expect(img).toBeDefined(); // ATENÇÃO
  });

  test('Teste se a Pokédex tem os botões de filtro.', () => {
    types.forEach((type) => {
      const buttonType = screen.getByRole('button', { name: type });
      expect(buttonType).toBeInTheDocument();
    });

    // A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos pokémons daquele tipo;

    // O texto do botão deve corresponder ao nome do tipo, ex. Psychic;

    // O botão All precisa estar sempre visível.
    const buttonAll = screen.getByRole('button', { name: 'All' });
    expect(buttonAll).toBeVisible();
  });

  // test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
  // // O texto do botão deve ser All;
  // // A Pokedéx deverá mostrar os Pokémons normalmente (sem filtros) quando o botão All for clicado;
  // // Ao carregar a página, o filtro selecionado deverá ser All;
  // });
});
