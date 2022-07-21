import { colors } from './colors';
import { FontFamily } from './typography';

interface ITextInputType {
  color: string;
  placeholderColor?: string;
  backgroundColor: string;
  borderColor: string;
}

export interface ITextInput {
  fontFamily: FontFamily;
  default: ITextInputType;
  disabled: ITextInputType;
  error: ITextInputType;
  success: ITextInputType;
}

export const textInput: ITextInput = {
  fontFamily: 'Roboto-Regular',
  default: {
    color: colors.text,
    placeholderColor: colors.dark[100],
    backgroundColor: colors.white,
    borderColor: colors.neutral[300],
  },
  disabled: {
    color: colors.dark[50],
    backgroundColor: colors.neutral[50],
    borderColor: colors.neutral[300],
  },
  error: {
    color: colors.text,
    backgroundColor: colors.white,
    borderColor: colors.error,
  },
  success: {
    color: colors.text,
    backgroundColor: colors.white,
    borderColor: colors.success,
  },
};
