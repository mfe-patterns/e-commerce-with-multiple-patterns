import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import { FormControl } from './FormControl';
import { theme } from '../../../theme/theme';

describe('FormControl', () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <FormControl
          label="Text Input"
          helpText="Filium morte multavit si sine dubio praeclara sunt"
          data-testid="text-input"
        />
        ,
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match the snapshot for error', () => {
    const { container, getByText } = render(
      <ThemeProvider theme={theme}>
        <FormControl
          error
          label="Text Input"
          helpText="Filium morte multavit si sine dubio praeclara sunt"
          data-testid="text-input"
        />
        ,
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
    expect(getByText('Filium morte multavit si sine dubio praeclara sunt')).toHaveStyleRule(
      'color',
      '#dc3545'
    );
  });

  it('should match the snapshot for success', () => {
    const { container, getByText } = render(
      <ThemeProvider theme={theme}>
        <FormControl
          success
          label="Text Input"
          helpText="Filium morte multavit si sine dubio praeclara sunt"
          data-testid="text-input"
        />
        ,
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
    expect(getByText('Filium morte multavit si sine dubio praeclara sunt')).toHaveStyleRule(
      'color',
      '#28a745'
    );
  });
});
