import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../components/NotFound';

describe('Teste o componente <NotFound.js />', () => {
  test('Teste se página contém um titulo com o texto Page requested not found 😭', () => {
    render(<NotFound />);
    const tittle = screen.getByText('Page requested not found');
    expect(tittle).toHaveTextContent(' 😭');
  });

  test('Teste se página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    render(<NotFound />);
    const alt = 'Pikachu crying because the page requested was not found';
    const scr = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const img = screen.getByAltText(alt);
    expect(img).toHaveAttribute('src', (scr));
  });
});
