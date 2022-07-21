import { colors } from "./colors";

interface IButtonType {
  color: string;
  backgroundColor?: string;
  borderColor?: string;
  fontFamily: string;
  border: string;
  disabled: {
    color: string;
    backgroundColor?: string;
    borderColor?: string;
  };
  horizontalPadding: boolean;
}

export const primary: IButtonType = {
  color: colors.white,
  borderColor: colors.transparent,
  fontFamily: "Roboto-Regular",
  border: "none",
  disabled: {
    color: colors.white,
    borderColor: colors.transparent,
  },
  horizontalPadding: true,
};
export const secondary: IButtonType = {
  backgroundColor: colors.white,
  color: colors.text,
  fontFamily: "Roboto-Regular",
  border: "1px solid",
  disabled: {
    backgroundColor: colors.white,
    color: colors.dark[100],
  },
  horizontalPadding: true,
};

interface IButtonSize {
  height: string;
  borderRadius: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  paddingVertical: string;
  paddingHorizontal: string;
}

interface ISize {
  xlarge: IButtonSize;
  large: IButtonSize;
  medium: IButtonSize;
  small: IButtonSize;
  xsmall: IButtonSize;
}

const size: ISize = {
  xlarge: {
    height: "56px",
    borderRadius: "28px",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.7px",
    paddingVertical: "15px",
    paddingHorizontal: "29.5px",
  },
  large: {
    height: "46px",
    borderRadius: "23px",
    fontSize: "15px",
    lineHeight: "20px",
    letterSpacing: "0.7px",
    paddingVertical: "12px",
    paddingHorizontal: "25.5px",
  },
  medium: {
    height: "40px",
    borderRadius: "20px",
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.7px",
    paddingVertical: "10px",
    paddingHorizontal: "21.5px",
  },
  small: {
    height: "36px",
    borderRadius: "18px",
    fontSize: "13px",
    lineHeight: "19px",
    letterSpacing: "0.7px",
    paddingVertical: "8px",
    paddingHorizontal: "20px",
  },
  xsmall: {
    height: "29px",
    borderRadius: "14.5px",
    fontSize: "12px",
    lineHeight: "19px",
    letterSpacing: "0.7px",
    paddingVertical: "5px",
    paddingHorizontal: "14px",
  },
};

export interface IButton {
  type: {
    primary: IButtonType;
    secondary: IButtonType;
  },
  size: ISize;
}

export const button: IButton = {
  type: {
    primary: {
      ...primary,
      disabled: {
        ...primary.disabled,
        backgroundColor: colors.primary[200],
      },
      backgroundColor: colors.primary[500],
    },
    secondary: {
      ...secondary,
      borderColor: colors.primary[500],
      disabled: {
        ...secondary.disabled,
        borderColor: colors.primary[200],
      },
    },
  },
  size,
};
