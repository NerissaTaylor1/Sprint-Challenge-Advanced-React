import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('player is found', () => {
  const container = render(<App />);
  container.findAllByText(/Players Club/i);
});

test("Players are rendered", () => {
  const container = render(<App />);
  container.findAllByText(/players/i);

});