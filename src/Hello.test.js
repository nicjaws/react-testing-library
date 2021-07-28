import React from 'react';
import Hello from './Hello';
import {render} from '@testing-library/react';

test("Component should display Hello text", () => {
  const comp = render(<Hello />);
  //comp.debug();
  const helloText = comp.getByText("Hello");
  expect(helloText).toBeTruthy();
});
