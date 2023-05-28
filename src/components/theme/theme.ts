import { createTheme } from "@vanilla-extract/css";

export const [theme, vars] = createTheme({
  space: {
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
  },
});
