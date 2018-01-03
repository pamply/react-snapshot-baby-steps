/**import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('testing component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});**/
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('Testing components', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});