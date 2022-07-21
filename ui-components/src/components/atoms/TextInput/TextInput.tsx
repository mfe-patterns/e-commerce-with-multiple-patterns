import React, { useState } from 'react';
import * as S from './TextInput.styles';

export interface ITextInputProps {
  disabled?: boolean;
  placeholder?: string;
  error?: boolean;
  success?: boolean;
  onFocus?: VoidFunction;
  onBlur?: VoidFunction;
  maxLength?: number;
  height?: number;
}

export const TextInput = React.forwardRef<HTMLElement, ITextInputProps>(
  (props: ITextInputProps, ref) => {
    const {
      disabled = false,
      error = false,
      success = false,
      onFocus,
      onBlur,
      maxLength,
      placeholder,
      ...rest
    } = props;
    const [active, setActive] = useState(false);

    const onInputFocus = () => {
      setActive(true);
      if (onFocus) {
        onFocus();
      }
    };

    const onInputBlur = () => {
      setActive(false);
      if (onBlur) {
        onBlur();
      }
    };

    return (
      <S.StyledTextWrapper>
        <S.StyledTextInput
          maxLength={maxLength}
          error={error}
          success={success}
          active={active}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          ref={ref}
          {...rest}
        />              
      </S.StyledTextWrapper>
    );
  },
);
