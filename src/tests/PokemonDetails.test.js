import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <PokemonDetails.js />', () => {
  beforeEach(() => { renderWithRouter(<App />); });

  test('Teste se as informações do Pokémon selecionado são mostradas na tela.', () => {
    const info = screen.getByText(/more details/i);
    userEvent.click(info);

    const name = screen.getByTestId('pokemon-name');

    expect(name).toBeInTheDocument();
    expect(info).not.toBeInTheDocument();

    const titleSumary = screen.getByRole('heading', {
      name: /Summary/i,
      level: 2,
    });

    expect(titleSumary).toBeInTheDocument();
  });
});
