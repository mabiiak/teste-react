import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  test('Teste se é renderizado um card com as informações de um pokémon.', () => {
    renderWithRouter(<App />);

    // O nome correto do Pokémon deve ser mostrado na tela;
    const namePokemon = screen.getByText(/pikachu/i); // em caso de falha, tentar testar pelo data-testeId
    expect(namePokemon).toBeDefined();

    // O tipo correto do pokémon deve ser mostrado na tela.
    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon).toHaveTextContent('Electric');

    // O peso médio do pokémon deve ser exibido com um texto no formato Average weight: <value> <measurementUnit>; onde <value> e <measurementUnit> são, respectivamente, o peso médio do pokémon e sua unidade de medida.
    const weightPokemon = screen.getByTestId('pokemon-weight');
    expect(weightPokemon).toHaveTextContent('6.0 kg');

    // A imagem do Pokémon deve ser exibida. Ela deve conter um atributo src com a URL da imagem e um atributo alt com o texto <name> sprite, onde <name> é o nome do pokémon;
    const URL = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const imgPokemon = screen.getByRole('img');
    expect(imgPokemon).toHaveAttribute('src', (URL));

    const altImagePokemon = screen.getByAltText(/Pikachu/);
    expect(altImagePokemon).toBeDefined();
  });

  test('Teste se o card contém um link para exibir detalhes deste Pokémon.', () => {
    renderWithRouter(<App />);

    const linkPokemon = screen.getAllByRole('link', { name: /more details/i });
    // const HREF = 'href="/pokemons/25"';
    expect(linkPokemon).toBeDefined();
    // expect(linkPokemon).toHaveAttribute('href',(HREF)); // Precisamos verificar a URL
  });

  test('Teste se ao clicar em datails, é feito o direcionamento para detalhes.', () => {
    const { history } = renderWithRouter(<App />);

    const linkPokemon = screen.getByText(/more details/i);
    userEvent.click(linkPokemon);

    expect(history.location.pathname).toEqual('/pokemons/25');
  });

  test('Teste se existe um ícone de estrela nos Pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const moreInfos = screen.getByText(/more details/i);
    userEvent.click(moreInfos);

    const pokemonFav = screen.getByText(/favoritado/i);
    userEvent.click(pokemonFav);

    const backToHome = screen.getByText(/home/i);
    userEvent.click(backToHome);

    const imgStarAtl = screen.getByAltText('Pikachu is marked as favorite');
    expect(imgStarAtl).toBeDefined();
    expect(imgStarAtl).toHaveAttribute('src', ('/star-icon.svg'));
  });
});
