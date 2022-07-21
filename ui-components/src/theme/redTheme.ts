import { ITypography, typography } from "./typography";
import { IColorPallete, colors } from "./colors";
import { ITextInput, textInput } from "./textInput";
import { button, IButton, primary, secondary } from "./button";

const redPalette: IColorPallete = {
  ...colors,
  primary: {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
  },
};

const redButton: IButton = {
  ...button,
  type: {
    primary: {
      ...primary,
      disabled: {
        ...primary.disabled,
        backgroundColor: redPalette.primary[200],
      },
      backgroundColor: redPalette.primary[500],
    },
    secondary: {
      ...secondary,
      borderColor: redPalette.primary[500],
      disabled: {
        ...secondary.disabled,
        borderColor: redPalette.primary[200],
      },
    },
  },
};

interface ITheme {
  typography: ITypography;
  colors: IColorPallete;
  textInput: ITextInput;
  button: IButton;
  gridSize: number;
}

export const theme: ITheme = {
  typography,
  colors: redPalette,
  textInput,
  button: redButton,
  gridSize: 8,
};
