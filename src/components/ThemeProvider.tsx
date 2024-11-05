"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

/**
 * ThemeProvider component wraps the application and provides theme context.
 *
 * This component uses the `next-themes` library to manage and provide theme
 * context to the application. It allows for toggling between light and dark
 * themes and supports system theme preferences.
 *
 * @component
 * @param {ThemeProviderProps} props - The props for the ThemeProvider component.
 * @param {React.ReactNode} props.children - The child components that will receive the theme context.
 * @returns {JSX.Element} The ThemeProvider component.
 * @example
 * return (
 *   <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
 *     {children}
 *   </ThemeProvider>
 * )
 */

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
