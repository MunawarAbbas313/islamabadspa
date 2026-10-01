"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// @ts-ignore - ComponentProps is generic and we need to pass props down
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
