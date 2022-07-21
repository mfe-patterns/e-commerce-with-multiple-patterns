interface Shade {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
}

const dark: Shade = {
  50: "#11111193",
  100: "#111111a2",
  200: "#111111B3",
  300: "#111111B9",
  400: "#111111CC",
  500: "#111111d8",
  600: "#111111eb",
  700: "#111111",
};
const neutral: Shade = {
  50: "#fafafa",
  100: "#f2f2f2",
  200: "#ededed",
  300: "#dedede",
  400: "#cccccc",
  500: "#666666",
  600: "#434343",
  700: "#343434",
};

const primary: Shade = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
};

const white = "#ffffff";

export interface IColorPallete {
  neutral: Shade;
  dark: Shade;
  primary: Shade;
  white: string;
  black: string;
  error: string;
  success: string;
  text: string;
  transparent: string;
  link: string;
}

export const colors: IColorPallete = {
  neutral,
  dark,
  primary,
  white,
  black: "#000000",
  error: "#dc3545",
  success: "#28a745",
  text: dark[700],
  transparent: "transparent",
  link: "#0064cc",
};
