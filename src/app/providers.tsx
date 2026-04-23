import { type ReactNode } from "react";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { appTheme } from "./theme";

type AppProvidersProps = {
  children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundImage: "url('/desk-background.png')",
            backgroundSize: "cover",
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
}
