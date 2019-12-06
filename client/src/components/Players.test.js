import React from 'react';
import Players from "./Players";
import { render } from '@testing-library/react';

test('does player exist', () => {
    const container = render(<Players />);
    container.findAllByText(/name/i);
});

test(`'does player's country exist'`, () => {
    const container = render(<Players />);
    container.findAllByText(/country/i);
});