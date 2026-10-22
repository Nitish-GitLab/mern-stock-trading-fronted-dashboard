import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from './Hero';

describe('Hero component', () => {
  test('renders the hero image', () => {
    render(<Hero />);

    const heroImage = screen.getByAltText('hero');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', '/media/homeHero.png');
  });
});