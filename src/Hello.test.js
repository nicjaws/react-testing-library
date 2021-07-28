import React from 'react';
import Hello from './Hello';
import {render} from '@testing-library/react';

test("Component should display Hello text", () => {
  render(<Hello />)
});
