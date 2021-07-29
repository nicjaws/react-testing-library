import React from 'react';
import Hello from './Hello';
import {render, fireEvent} from '@testing-library/react';

test("Component should display Hello text", () => {
  const { getByTestId, getByRole } = render(<Hello />);

  let helloText = getByTestId("my-heading");
  expect(helloText).toBeTruthy();

  let myBtn = getByRole("button");
  fireEvent.click(myBtn);


});
