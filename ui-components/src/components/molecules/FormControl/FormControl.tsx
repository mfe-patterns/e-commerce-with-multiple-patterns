import React from 'react';
import { HelpText, HelpTextType } from '../../atoms/Typography/Typography';
import type { ITextInputProps } from '../../atoms/TextInput/TextInput';
import { TextInput } from '../../atoms/TextInput/TextInput';
import * as S from './FormControl.styles';

interface FormControlProps extends ITextInputProps {
  label: string;
  error?: boolean;
  success?: boolean;
  helpText?: string;
}

export const FormControl = React.forwardRef<HTMLElement, FormControlProps>(
  (props: FormControlProps, ref) => {
    const {
      label,
      error,
      success,
      helpText,
      ...textInputProps
    } = props;

    return (
      <>
        <S.LabelContainer>
          <S.StyledLabel>
            {label}
          </S.StyledLabel>
        </S.LabelContainer>
        <TextInput
          ref={ref}
          error={error}
          success={success}
          {...textInputProps}
        />
        {helpText && (
          <S.HelpTextContainer>
            <S.HelpTextLeft>
              <HelpText
                type={
                  error
                    ? HelpTextType.ERROR
                    : success
                      ? HelpTextType.SUCCESS
                      : HelpTextType.DEFAULT
                }>
                {helpText}
              </HelpText>
            </S.HelpTextLeft>
          </S.HelpTextContainer>
        )}
      </>
    );
  },
);
