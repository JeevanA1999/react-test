import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("render jeevan text",()=>{
  render(<App/>);
  const element=screen.getByText(/jeevan/i);
  expect(element).toBeInTheDocument();
})
