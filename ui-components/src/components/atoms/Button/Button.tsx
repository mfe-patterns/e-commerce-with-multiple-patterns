import React from 'react';

import * as S from './Button.styles';
import { ButtonAction, ButtonSize } from './ButtonTypes';

export interface IButton {
  children: React.ReactNode;
  buttonType?: ButtonAction;
  size?: ButtonSize;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: IButton) => {
  const {
    children,
    buttonType = ButtonAction.PRIMARY,
    size = ButtonSize.DEFAULT,
    disabled = false,
    onClick,
    ...rest
  } = props;

  return (
    <S.Button
      buttonType={buttonType}
      size={size}
      disabled={disabled}
      onClick={onClick}
      {...rest}>
      {children}
    </S.Button>
  );
};

export { ButtonAction, ButtonSize };
