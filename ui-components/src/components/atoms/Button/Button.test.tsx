import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components/';

import { Button } from './Button';
import { ButtonAction, ButtonSize } from './ButtonTypes';
import { theme } from '../../../theme/theme';

describe('Button', () => {
  const onClick = jest.fn();
  test('should render primary default button', () => {
    const { container, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button
          buttonType={ButtonAction.PRIMARY}
          size={ButtonSize.DEFAULT}
          onClick={onClick}
          data-testid="primary-button">
          Click here
        </Button>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
    fireEvent.click(getByTestId('primary-button'));
    expect(onClick).toHaveBeenCalled();
  });

  test('should render the primary button in disabled mode', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button
          buttonType={ButtonAction.PRIMARY}
          size={ButtonSize.DEFAULT}
          onClick={onClick}
          disabled
          data-testid="primary-button">
          Click here
        </Button>
      </ThemeProvider>,
    );

    expect(getByTestId('primary-button')).toHaveStyleRule(
      'background-color',
      '#90caf9',
    );
    expect(getByTestId('primary-button')).toHaveStyleRule(
      'border-color',
      'transparent',
    );
  });

  test('should render secondary default button', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button
          buttonType={ButtonAction.SECONDARY}
          size={ButtonSize.DEFAULT}
          onClick={onClick}
          data-testid="secondary-button">
          Click here
        </Button>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('should render secondary button in disabled mode', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button
          buttonType={ButtonAction.SECONDARY}
          size={ButtonSize.DEFAULT}
          onClick={onClick}
          data-testid="secondary-button"
          disabled>
          Click here
        </Button>
      </ThemeProvider>,
    );

    expect(getByTestId('secondary-button')).toHaveStyleRule(
      'background-color',
      '#ffffff',
    );
    expect(getByTestId('secondary-button')).toHaveStyleRule(
      'border-color',
      '#90caf9',
    );
  });
});
