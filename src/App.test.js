// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PiBit title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PiBit/i);
    expect(titleElement).toBeInTheDocument();
});
