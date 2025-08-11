"use client";

import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
    </ThemeProvider>
  );
}
