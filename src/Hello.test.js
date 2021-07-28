import React from 'react';
import Hello from './Hello';
import {getByTestId, render} from '@testing-library/react';

test("Component should display Hello text", () => {
  const { getByTestId, debug } = render(<Hello />);
  debug();
  let helloText = getByTestId("my-heading");
  expect(helloText).toBeTruthy();
  expect(helloText.tagName).toBe("H1");
});
