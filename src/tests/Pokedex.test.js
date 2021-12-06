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

    expect(namePokemon).toBeInTheDocument();

  // O primeiro Pokémon da lista deve ser mostrado ao clicar no botão, se estiver no último Pokémon da lista;
  });

  test('Teste se é mostrado apenas um Pokémon por vez.', () => {
  // tentar puxar pela classe da div (o card do pokemon) ---> contar tamanho dos elementos? quantia de filhos?
  // const {container} = render(<MyComponent />)
  // const foo = container.querySelector('[data-foo="bar"]') */
    const textCounter = screen.getByText(/More details/i);

    console.log(textCounter);
    expect(textCounter.length === 2);
  });

  // test('Teste se a Pokédex tem os botões de filtro.', () => {
  // // Deve existir um botão de filtragem para cada tipo de Pokémon, sem repetição.
  // // A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos pokémons daquele tipo;
  // // O texto do botão deve corresponder ao nome do tipo, ex. Psychic;
  // // O botão All precisa estar sempre visível.
  // });

  // test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
  // // O texto do botão deve ser All;
  // // A Pokedéx deverá mostrar os Pokémons normalmente (sem filtros) quando o botão All for clicado;
  // // Ao carregar a página, o filtro selecionado deverá ser All;
  // });
});
