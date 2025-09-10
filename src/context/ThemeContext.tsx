import { ThemeProvider, useMediaQuery } from '@mui/material';
import React, { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { darkTheme } from '../common/theme/darkTheme';
import { lightTheme } from '../common/theme/lightTheme';
import { STORAGE_THEME_STRING } from '../common/utils';

type ThemeOptions = 'dark' | 'light'; 

interface ThemeContextType {
    setActiveTheme: React.Dispatch<React.SetStateAction<ThemeOptions | undefined>>;
    activeTheme?: ThemeOptions;
}

export const ThemeContext = createContext<ThemeContextType>({
    setActiveTheme: () => {},
    activeTheme: 'dark'
});

function CustomThemeProvider({children}: {children:ReactNode}) {
    const [ activeTheme, setActiveTheme ] = useState<ThemeOptions>();
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const getDefaultTheme = useCallback(() => {
        const localStorageTheme = localStorage.getItem(STORAGE_THEME_STRING);
        if(localStorageTheme === 'dark' || localStorageTheme === 'light'){
            return localStorageTheme as ThemeOptions;
        } else {
            return prefersDarkMode ? 'dark' : 'light'
        }
    }, [prefersDarkMode]);
    
    useEffect(() => {
        setActiveTheme(getDefaultTheme());
    }, [getDefaultTheme])
    
    useEffect(() => {
        if(activeTheme){
            localStorage.setItem(STORAGE_THEME_STRING, activeTheme);
        }
    }, [activeTheme])

    const theme = useMemo(() => activeTheme === 'dark' ? darkTheme : lightTheme, [activeTheme])

    return (
        <ThemeContext.Provider value={{setActiveTheme, activeTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export { CustomThemeProvider };
