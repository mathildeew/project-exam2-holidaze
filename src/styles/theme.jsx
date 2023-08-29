import { ThemeProvider } from "styled-components";

const theme = {
  color: {},
  font: {},
};

export const Theme = ({ children }) => {
  <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
