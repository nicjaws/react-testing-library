import React from 'react';
import Hello from './Hello';
import {render, fireEvent} from '@testing-library/react';

test("Component should display Hello text", () => {
  const { getByTestId, getByRole } = render(<Hello />);

  let helloText = getByTestId("my-heading");
  expect(helloText).toBeTruthy();

  let myBtn = getByRole("button");
  fireEvent.click(myBtn);

  const myName = "Nicolas"
  let myInput = getByRole('textbox');
  expect(myInput).toHaveValue('');
  fireEvent.change(myInput, {target: { value: myName }});
  expect(myInput).toHaveValue('');


});
