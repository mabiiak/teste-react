import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('Teste se a página contém as informações sobre a Pokédex.', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    // Acessar os elementos da tela ----> screen
    render(<About />);
    // Interagir com os elementos
    const titleAbout = screen.getByText('About Pokédex');
    // Fazer os testes ----> jest
    expect(titleAbout).toBeInTheDocument();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    // Acessar os elementos da tela ----> screen
    render(<About />);
    // Interagir com os elementos
    const paragraphAbout = screen.getAllByText(/Pokémons/i);
    // Fazer os testes ----> jest
    expect(paragraphAbout.length).toEqual(2);
  });

  test('Teste se a página contém a imagem de uma Pokédex:', () => {
    // Acessar os elementos da tela ----> screen
    render(<About />);
    // Interagir com os elementos
    const imgAbout = screen.getByRole('img');
    const img = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    // Fazer os testes ----> jest
    expect(imgAbout).toHaveAttribute('src', (img));
  });
});
