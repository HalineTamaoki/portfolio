import { ThemeProvider } from '@mui/material';
import React, { createContext, ReactNode, useMemo, useState } from 'react'
import { darkTheme } from '../common/theme/darkTheme';
import { lightTheme } from '../common/theme/lightTheme';

type ThemeOptions = 'dark' | 'light'; 

interface ThemeContextType {
    setActiveTheme: React.Dispatch<React.SetStateAction<ThemeOptions>>;
}

export const ThemeContext = createContext<ThemeContextType>({setActiveTheme: () => {}});

function CustomThemeProvider({children}: {children:ReactNode}) {
    const [ activeTheme, setActiveTheme ] = useState<ThemeOptions>('dark');

    const theme = useMemo(() => activeTheme === 'dark' ? darkTheme : lightTheme, [activeTheme])

    return (
        <ThemeContext.Provider value={{setActiveTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export {CustomThemeProvider}