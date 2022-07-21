import { ITypography, typography } from "./typography";
import { IColorPallete, colors } from "./colors";
import { ITextInput, textInput } from "./textInput";
import { button, IButton } from "./button";

interface ITheme {
  typography: ITypography;
  colors: IColorPallete;
  textInput: ITextInput;
  button: IButton;
  gridSize: number;
}

export const theme: ITheme = {
  typography,
  colors,
  textInput,
  button,
  gridSize: 8
};
