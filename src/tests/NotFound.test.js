import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../components/NotFound';

describe('Teste o componente <NotFound.js />', () => {
  test('Teste se página contém um titulo com o texto Page requested not found 😭', () => {
    // Acessar os elementos da tela ----> screen
    render(<NotFound />);
    // Interagir com os elementos
    const tittle = screen.getByText('Page requested not found');
    // Fazer os testes ----> jest
    expect(tittle).toHaveTextContent(' 😭');
  });

  test('Teste se página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    // Acessar os elementos da tela ----> screen
    render(<NotFound />);
    // Interagir com os elementos
    const alt = 'Pikachu crying because the page requested was not found';
    const scr = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const img = screen.getByAltText(alt);
    // Fazer os testes ----> jest
    expect(img).toHaveAttribute('src', (scr));
  });
});
