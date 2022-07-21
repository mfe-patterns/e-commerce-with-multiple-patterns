import styled, { css } from "styled-components";
import { ButtonAction, ButtonSize } from "./ButtonTypes";

interface IButton {
  children: React.ReactNode;
  buttonType: ButtonAction;
  size: ButtonSize;
  disabled: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Wrapper = styled.div`
  margin: 20px;
  width: 40%;
`;

export const Button = styled.button<IButton>`
  width: 100%;
  cursor: pointer;
  min-height: ${({ theme, size }) => theme.button.size[size].height};
  border: ${({ theme, buttonType }) => theme.button.type[buttonType].border};
  border-radius: ${({ theme, size }) => theme.button.size[size].borderRadius};
  justify-content: center;
  align-items: center;
  border-color: ${({ theme, buttonType }) =>
    theme.button.type[buttonType].borderColor};
  background-color: ${({ theme, buttonType }) =>
    theme.button.type[buttonType].backgroundColor};
  padding: ${({ theme, size }) =>
    `${theme.button.size[size].paddingVertical} ${theme.button.size[size].paddingHorizontal}`};
  ${({ buttonType, disabled, theme }) =>
    disabled &&
    css`
      border-color: ${theme.button.type[buttonType].disabled.borderColor};
      background-color: ${theme.button.type[buttonType].disabled
        .backgroundColor};
    `}
  color: ${({ theme, buttonType, disabled }) =>
    disabled
      ? theme.button.type[buttonType].disabled.color
      : theme.button.type[buttonType].color};
`;
