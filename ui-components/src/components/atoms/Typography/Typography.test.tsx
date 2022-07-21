import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../theme/theme';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  HelpText,
  Label,
  PText,
} from './Typography';
import { HelpTextType } from './Typography';

describe('Typography', () => {
  const typographies = [
    {
      Component: Heading1,
      fontFamily: 'Roboto-Regular',
      color: '#111111',
    },
    {
      Component: Heading2,
      fontFamily: 'Roboto-Regular',
      color: '#111111',
    },
    {
      Component: Heading3,
      fontFamily: 'Roboto-Regular',
      color: '#111111',
    },
    {
      Component: Heading4,
      fontFamily: 'Roboto-Regular',
      color: '#111111',
    },
    {
      Component: PText,
      fontFamily: 'Roboto-Regular',
      color: '#111111',
    },    
    {
      Component: Label,
      fontFamily: 'Roboto-Regular',
      color: '#111111',
    },
    {
      Component: HelpText,
      fontFamily: 'Roboto-Regular',
      color: '#111111CC',
      props: { type: HelpTextType.DEFAULT },
    },
    {
      Component: HelpText,
      fontFamily: 'Roboto-Regular',
      color: '#28a745',
      props: { type: HelpTextType.SUCCESS },
    },
    {
      Component: HelpText,
      fontFamily: 'Roboto-Regular',
      color: '#dc3545',
      props: { type: HelpTextType.ERROR },
    },
  ];
  test.each(typographies)(
    'Should render typography component %p with default color',
    ({ Component, fontFamily, color, props }) => {
      const { container, getByText } = render(
        <ThemeProvider theme={theme}>
          <Component {...props}>Title</Component>
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
      expect(getByText('Title')).toHaveStyleRule('color', color);
      expect(getByText('Title')).toHaveStyleRule(
        'font-family',
        fontFamily,
      );
    },
  );
});
