import { ThemeProvider } from "styled-components";
import "react-date-range/dist/theme/default.css";
const theme = {
  color: {},
  font: {},
};

export const Theme = ({ children }) => {
  <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
