import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import { TextInput } from './TextInput';
import { theme } from '../../../theme/theme';

describe('TextInput component', () => {
  it('should render with default props', () => {
    const { container, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <TextInput data-testid="text-input" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
    expect(getByTestId('text-input')).toHaveStyleRule('color', '#111111');
    expect(getByTestId('text-input')).toHaveStyleRule(
      'background-color',
      '#ffffff',
    );
    expect(getByTestId('text-input')).toHaveStyleRule(
      'border-color',
      '#dedede',
    );
  });

  it('should render with explicit height', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <TextInput height={100} data-testid="text-input" />
      </ThemeProvider>,
    );
    expect(getByTestId('text-input')).toHaveStyleRule('height', '100px');
  });

  it('should render with error', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <TextInput data-testid="text-input" error />
      </ThemeProvider>,
    );

    expect(getByTestId('text-input')).toHaveStyleRule('color', '#111111');
    expect(getByTestId('text-input')).toHaveStyleRule(
      'background-color',
      '#ffffff',
    );
    expect(getByTestId('text-input')).toHaveStyleRule(
      'border-color',
      '#dc3545',
    );
  });

  it('renders with success', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <TextInput data-testid="text-input" success />
      </ThemeProvider>,
    );

    expect(getByTestId('text-input')).toHaveStyleRule('color', '#111111');
    expect(getByTestId('text-input')).toHaveStyleRule(
      'background-color',
      '#ffffff',
    );
    expect(getByTestId('text-input')).toHaveStyleRule(
      'border-color',
      '#28a745',
    );
  });

  it('should trigger onBlur', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <TextInput onBlur={onBlur} data-testid="text-input" />
      </ThemeProvider>,
    );

    fireEvent.blur(getByTestId('text-input'));

    expect(onBlur).toHaveBeenCalled();
  });

  it('should trigger onFocus', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <TextInput onFocus={onFocus} data-testid="text-input" />
      </ThemeProvider>,
    );

    fireEvent.focus(getByTestId('text-input'));

    expect(onFocus).toHaveBeenCalled();
  });
});
