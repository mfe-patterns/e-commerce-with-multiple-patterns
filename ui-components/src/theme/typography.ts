export type FontFamily = "Roboto-Regular";

export interface ITextRule {
  fontFamily: FontFamily;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
}

export interface ITypography {
  heading1: ITextRule;
  heading2: ITextRule;
  heading3: ITextRule;
  heading4: ITextRule;
  pText: ITextRule;
  label: ITextRule;
  helpText: ITextRule
}

export const typography: ITypography = {
  heading1: {
    fontFamily: "Roboto-Regular",
    fontSize: "28px",
    lineHeight: "35px",
    letterSpacing: "1px",
  },
  heading2: {
    fontFamily: "Roboto-Regular",
    fontSize: "25px",
    lineHeight: "33px",
    letterSpacing: "0.3px",
  },
  heading3: {
    fontFamily: "Roboto-Regular",
    fontSize: "22px",
    lineHeight: "30px",
    letterSpacing: "0.4px",
  },
  heading4: {
    fontFamily: "Roboto-Regular",
    fontSize: "20px",
    lineHeight: "27px",
    letterSpacing: "1.2px",
  },
  pText: {
    fontFamily: "Roboto-Regular",
    fontSize: "14px",
    lineHeight: "23px",
    letterSpacing: "0.7px",
  },
  label: {
    fontFamily: "Roboto-Regular",
    fontSize: "14px",
    lineHeight: "21px",
    letterSpacing: "0.7px",
  },
  helpText: {
    fontFamily: "Roboto-Regular",
    fontSize: "11px",
    lineHeight: "16px",
    letterSpacing: "0.7px",
  },
};
