import styled, { css } from 'styled-components';
import { theme } from '../../../theme/theme';

type StyledTextInputProps = {
  active: boolean;
  error: boolean;
  success: boolean;
  disabled: boolean;
  enableClearInput?: boolean;
  theme: typeof theme;
  height?: number;
  ref?: any;
};

export const Wrapper = styled.div`
  margin: 20px;
`;

export const StyledTextInput = styled.input<StyledTextInputProps>`
  height: ${({ theme, height }) => `${height || theme.gridSize * 6}px`};
  padding: ${({ theme }) =>
    `${theme.gridSize * 1.5}px ${theme.gridSize * 2}px`};
  color: ${({ theme }) => theme.textInput.default.color};
  background-color: ${({ theme }) =>
    theme.textInput.default.backgroundColor};
  border: 1px solid;
  border-color: ${({ theme }) =>
    theme.textInput.default.borderColor};
  box-sizing: border-box;
  width: 100%;
  
    ${({ active, success, error, theme }) =>
    active &&
    !success &&
    !error &&
    css`
        border-color: ${theme.colors.primary[500]};
      `}
    ${({ success, theme }) =>
    success &&
    css`
      color: ${theme.textInput.success.color};
      background-color: ${theme.textInput.success.backgroundColor};
      border-color: ${theme.textInput.success.borderColor};
      padding-right: ${theme.gridSize * 6}px;
    `}
    ${({ error, theme }) =>
    error &&
    css`
        color: ${theme.textInput.error.color};
        background-color: ${theme.textInput.error.backgroundColor};
        border-color: ${theme.textInput.error.borderColor};
        padding-right: ${theme.gridSize * 6}px;
      `}
    ${({ disabled, theme }) =>
    disabled &&
    css`
        color: ${theme.textInput.disabled.color};
        background-color: ${theme.textInput.disabled.backgroundColor};
        border-color: ${theme.textInput.disabled.borderColor};
      `};
`;

export const StyledTextWrapper = styled.div<any>`
  min-height: ${({ theme }) => `${theme.gridSize * 6}px`};
  justify-content: center;
  flex-grow: 1;
  flex-shrink: 1;
`;
