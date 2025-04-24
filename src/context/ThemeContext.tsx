import { ThemeProvider } from '@mui/material';
import React, { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { darkTheme } from '../common/theme/darkTheme';
import { lightTheme } from '../common/theme/lightTheme';
import { STORAGE_THEME_STRING } from '../common/utils';

type ThemeOptions = 'dark' | 'light'; 

interface ThemeContextType {
    setActiveTheme: React.Dispatch<React.SetStateAction<ThemeOptions>>;
    activeTheme: ThemeOptions;
}

export const ThemeContext = createContext<ThemeContextType>({
    setActiveTheme: () => {},
    activeTheme: 'dark'
});

const getDefaultTheme = () => {
    const localStorageTheme = localStorage.getItem(STORAGE_THEME_STRING);
        if(localStorageTheme === 'dark' || localStorageTheme === 'light'){
            return localStorageTheme as ThemeOptions;
        } else {
            return 'dark';
        }
}

function CustomThemeProvider({children}: {children:ReactNode}) {
    const [ activeTheme, setActiveTheme ] = useState<ThemeOptions>(getDefaultTheme());

    useEffect(() => {
        
    }, [])
    
    useEffect(() => {
        localStorage.setItem(STORAGE_THEME_STRING, activeTheme);
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
